import { daisyThemeData } from '@/src/styles/daisyThemeData';

export type ColorSchemeId = (typeof daisyThemeData)[number]['id'];

type ThemeMode = 'light' | 'dark';

interface RawTheme {
  id: ColorSchemeId;
  scheme: ThemeMode;
  vars: Record<string, string>;
}

export interface AppTheme {
  id: ColorSchemeId;
  label: string;
  description: string;
  scheme: ThemeMode;
  colors: {
    background: string;
    backgroundRaised: string;
    panel: string;
    panelAlt: string;
    panelWarm: string;
    border: string;
    text: string;
    textMuted: string;
    textDark: string;
    accent: string;
    accentSoft: string;
    accentWarm: string;
    success: string;
    warning: string;
    danger: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

const baseTokens = {
  spacing: {
    xs: 6,
    sm: 10,
    md: 14,
    lg: 18,
    xl: 24,
  },
};

interface RGB {
  r: number;
  g: number;
  b: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function parseOklch(value: string) {
  const match = value.match(/oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)\s*\)/i);
  if (!match) {
    throw new Error(`Unsupported OKLCH color: ${value}`);
  }

  return {
    l: Number(match[1]) / 100,
    c: Number(match[2]),
    h: Number(match[3]),
  };
}

function linearToSrgb(channel: number) {
  const value = clamp(channel, 0, 1);
  if (value <= 0.0031308) {
    return 12.92 * value;
  }
  return 1.055 * value ** (1 / 2.4) - 0.055;
}

function toByte(value: number) {
  return Math.round(clamp(value, 0, 1) * 255);
}

function rgbToHex({ r, g, b }: RGB) {
  return `#${[r, g, b]
    .map((channel) => clamp(Math.round(channel), 0, 255).toString(16).padStart(2, '0'))
    .join('')}`;
}

function hexToRgb(hex: string): RGB {
  const normalized = hex.replace('#', '');
  const expanded =
    normalized.length === 3
      ? normalized
          .split('')
          .map((segment) => `${segment}${segment}`)
          .join('')
      : normalized;

  const value = Number.parseInt(expanded, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function oklchToHex(value: string) {
  const { l, c, h } = parseOklch(value);
  const hue = (h * Math.PI) / 180;
  const a = c * Math.cos(hue);
  const b = c * Math.sin(hue);

  const lPrime = l + 0.3963377774 * a + 0.2158037573 * b;
  const mPrime = l - 0.1055613458 * a - 0.0638541728 * b;
  const sPrime = l - 0.0894841775 * a - 1.291485548 * b;

  const lCube = lPrime ** 3;
  const mCube = mPrime ** 3;
  const sCube = sPrime ** 3;

  const rgb = {
    r: toByte(linearToSrgb(+4.0767416621 * lCube - 3.3077115913 * mCube + 0.2309699292 * sCube)),
    g: toByte(linearToSrgb(-1.2684380046 * lCube + 2.6097574011 * mCube - 0.3413193965 * sCube)),
    b: toByte(linearToSrgb(-0.0041960863 * lCube - 0.7034186147 * mCube + 1.707614701 * sCube)),
  };

  return rgbToHex(rgb);
}

function mix(colorA: string, colorB: string, weight: number) {
  const a = hexToRgb(colorA);
  const b = hexToRgb(colorB);
  const w = clamp(weight, 0, 1);

  return rgbToHex({
    r: a.r * (1 - w) + b.r * w,
    g: a.g * (1 - w) + b.g * w,
    b: a.b * (1 - w) + b.b * w,
  });
}

function relativeLuminance(color: string) {
  const { r, g, b } = hexToRgb(color);
  const toLinear = (channel: number) => {
    const normalized = channel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  };

  const red = toLinear(r);
  const green = toLinear(g);
  const blue = toLinear(b);
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(foreground: string, background: string) {
  const lighter = Math.max(relativeLuminance(foreground), relativeLuminance(background));
  const darker = Math.min(relativeLuminance(foreground), relativeLuminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

function chooseTextColor(background: string, preferred: string, minimum = 7) {
  if (contrastRatio(preferred, background) >= minimum) {
    return preferred;
  }

  const black = '#111111';
  const white = '#f8f8f8';
  return contrastRatio(black, background) > contrastRatio(white, background) ? black : white;
}

function makeMutedText(text: string, background: string, minimum = 4.5) {
  for (const weight of [0.32, 0.26, 0.2, 0.14, 0.08]) {
    const candidate = mix(text, background, weight);
    if (contrastRatio(candidate, background) >= minimum) {
      return candidate;
    }
  }

  return text;
}

function titleizeTheme(id: string) {
  if (id === 'cmyk') {
    return 'CMYK';
  }

  return id
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function remToPx(value: string | undefined, fallback: number) {
  if (!value) {
    return fallback;
  }

  const numeric = Number.parseFloat(value.replace('rem', ''));
  if (Number.isNaN(numeric)) {
    return fallback;
  }

  return numeric * 16;
}

function buildTheme(rawTheme: RawTheme): AppTheme {
  const background = oklchToHex(rawTheme.vars['--color-base-100']);
  const panel = oklchToHex(rawTheme.vars['--color-base-200']);
  const baseBorder = oklchToHex(rawTheme.vars['--color-base-300']);
  const baseText = oklchToHex(rawTheme.vars['--color-base-content']);
  const primary = oklchToHex(rawTheme.vars['--color-primary']);
  const secondary = oklchToHex(rawTheme.vars['--color-secondary']);
  const accent = oklchToHex(rawTheme.vars['--color-accent']);
  const neutral = oklchToHex(rawTheme.vars['--color-neutral']);
  const success = oklchToHex(rawTheme.vars['--color-success']);
  const warning = oklchToHex(rawTheme.vars['--color-warning']);
  const danger = oklchToHex(rawTheme.vars['--color-error']);
  const isDark = rawTheme.scheme === 'dark';

  const backgroundRaised = isDark ? mix(background, '#ffffff', 0.08) : mix(background, '#000000', 0.05);
  const panelAlt = isDark ? mix(panel, neutral, 0.55) : mix(panel, secondary, 0.12);
  const panelWarm = isDark ? mix(panel, accent, 0.16) : mix(background, warning, 0.18);
  const border = isDark ? mix(baseBorder, '#ffffff', 0.14) : mix(baseBorder, '#000000', 0.12);
  const text = chooseTextColor(background, baseText, 7);
  const textMuted = makeMutedText(text, background, 4.5);
  const textDark = chooseTextColor(panelWarm, baseText, 7);
  const accentSoft = isDark ? mix(background, primary, 0.22) : mix(background, primary, 0.14);
  const accentWarm = isDark ? mix(warning, background, 0.15) : mix(warning, background, 0.05);
  const radiusBase = remToPx(rawTheme.vars['--radius-box'], 12);

  return {
    id: rawTheme.id,
    label: titleizeTheme(rawTheme.id),
    description: `Built-in daisyUI ${rawTheme.scheme} theme.`,
    scheme: rawTheme.scheme,
    colors: {
      background,
      backgroundRaised,
      panel,
      panelAlt,
      panelWarm,
      border,
      text,
      textMuted,
      textDark,
      accent: primary,
      accentSoft,
      accentWarm,
      success,
      warning,
      danger,
    },
    ...baseTokens,
    radius: {
      sm: Math.max(8, Math.round(radiusBase * 0.55)),
      md: Math.max(12, Math.round(radiusBase)),
      lg: Math.max(16, Math.round(radiusBase * 1.35)),
      xl: Math.max(22, Math.round(radiusBase * 1.7)),
    },
  };
}

export const palettes = Object.fromEntries(
  (daisyThemeData as readonly RawTheme[]).map((themeDefinition) => [themeDefinition.id, buildTheme(themeDefinition)]),
) as Record<ColorSchemeId, AppTheme>;

export const defaultTheme = palettes.night ?? palettes.dark;

export function getTheme(colorScheme: ColorSchemeId | undefined): AppTheme {
  return (colorScheme && palettes[colorScheme]) || defaultTheme;
}
