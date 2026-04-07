import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/src/hooks/useTheme';

function renderInline(text: string, styles: ReturnType<typeof createStyles>) {
  const tokens = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean);

  return tokens.map((token, index) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <Text key={`strong-${index}`} style={styles.strong}>
          {token.slice(2, -2)}
        </Text>
      );
    }

    if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <Text key={`code-${index}`} style={styles.inlineCode}>
          {token.slice(1, -1)}
        </Text>
      );
    }

    return <Fragment key={`text-${index}`}>{token}</Fragment>;
  });
}

export function ArticleMarkdown({ markdown }: { markdown: string }) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const lines = markdown.split('\n');
  const blocks: { type: 'h1' | 'h2' | 'bullet' | 'paragraph'; text: string }[] = [];
  let paragraphBuffer: string[] = [];

  function flushParagraph() {
    const text = paragraphBuffer.join(' ').trim();
    if (text) {
      blocks.push({ type: 'paragraph', text });
    }
    paragraphBuffer = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith('# ')) {
      flushParagraph();
      blocks.push({ type: 'h1', text: line.slice(2).trim() });
      continue;
    }

    if (line.startsWith('## ')) {
      flushParagraph();
      blocks.push({ type: 'h2', text: line.slice(3).trim() });
      continue;
    }

    if (line.startsWith('- ')) {
      flushParagraph();
      blocks.push({ type: 'bullet', text: line.slice(2).trim() });
      continue;
    }

    paragraphBuffer.push(line);
  }

  flushParagraph();

  return (
    <View>
      {blocks.map((block, index) => {
        if (block.type === 'h1') {
          return (
            <Text key={`h1-${index}`} style={styles.h1}>
              {renderInline(block.text, styles)}
            </Text>
          );
        }

        if (block.type === 'h2') {
          return (
            <Text key={`h2-${index}`} style={styles.h2}>
              {renderInline(block.text, styles)}
            </Text>
          );
        }

        if (block.type === 'bullet') {
          return (
            <View key={`bullet-${index}`} style={styles.bulletRow}>
              <Text style={styles.bulletIcon}>{'\u2022'}</Text>
              <Text style={styles.paragraph}>{renderInline(block.text, styles)}</Text>
            </View>
          );
        }

        return (
          <Text key={`p-${index}`} style={styles.paragraph}>
            {renderInline(block.text, styles)}
          </Text>
        );
      })}
    </View>
  );
}

const createStyles = (theme: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    h1: {
      color: theme.colors.text,
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 12,
    },
    h2: {
      color: theme.colors.text,
      fontSize: 18,
      fontWeight: '700',
      marginTop: 18,
      marginBottom: 8,
    },
    paragraph: {
      color: theme.colors.textMuted,
      fontSize: 15,
      lineHeight: 24,
      marginBottom: 14,
      flex: 1,
    },
    bulletRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    bulletIcon: {
      color: theme.colors.textMuted,
      width: 18,
      fontSize: 15,
      lineHeight: 24,
    },
    strong: {
      color: theme.colors.text,
      fontWeight: '700',
    },
    inlineCode: {
      color: theme.colors.accent,
      backgroundColor: theme.colors.background,
    },
  });
