import type { ToolRecord } from '@/src/types/content';

export type ToolGroupSlug = 'recon' | 'web' | 'exploit' | 'creds' | 'post' | 'pivot' | 'other';

export interface ToolGroupDefinition {
  key: ToolGroupSlug;
  label: string;
  description: string;
  examples: string[];
}

const groupDefinitions: ToolGroupDefinition[] = [
  {
    key: 'recon',
    label: 'Recon',
    description: 'Discovery, enumeration, and surface-mapping tools.',
    examples: ['Nmap', 'Amass', 'RustScan'],
  },
  {
    key: 'web',
    label: 'Web',
    description: 'HTTP-centric testing, fuzzing, and application inspection.',
    examples: ['Burp Suite', 'ffuf', 'Gobuster'],
  },
  {
    key: 'exploit',
    label: 'Exploit',
    description: 'Exploitation frameworks, payload delivery, and protocol abuse tooling.',
    examples: ['Metasploit', 'Impacket', 'Searchsploit'],
  },
  {
    key: 'creds',
    label: 'Creds',
    description: 'Credential access, cracking, spraying, and secret extraction.',
    examples: ['Hashcat', 'Mimikatz', 'John the Ripper'],
  },
  {
    key: 'post',
    label: 'Post',
    description: 'Privilege escalation, host triage, graphing, and post-compromise analysis.',
    examples: ['BloodHound', 'PEAS', 'PowerUp'],
  },
  {
    key: 'pivot',
    label: 'Pivot',
    description: 'Tunneling, relays, and movement between footholds and network segments.',
    examples: ['Chisel', 'Netcat', 'Socat'],
  },
  {
    key: 'other',
    label: 'Other',
    description: 'Useful tools that do not fit the main discovery phases cleanly.',
    examples: ['Curl', 'Git', 'Python'],
  },
];

const explicitPatterns: Record<ToolGroupSlug, RegExp[]> = {
  recon: [
    /\bnmap\b/i,
    /\bamass\b/i,
    /\brustscan\b/i,
    /\bmasscan\b/i,
    /\bsubfinder\b/i,
    /\bassetfinder\b/i,
    /\bdnsrecon\b/i,
    /\bdnsenum\b/i,
    /\bfierce\b/i,
    /\btheharvester\b/i,
    /\bshodan\b/i,
    /\bwhatweb\b/i,
    /\benum4linux/i,
  ],
  web: [
    /\bburp\b/i,
    /\bffuf\b/i,
    /\bgobuster\b/i,
    /\bferoxbuster\b/i,
    /\bdirb\b/i,
    /\bdirsearch\b/i,
    /\bwfuzz\b/i,
    /\bsqlmap\b/i,
    /\bnikto\b/i,
    /\bzap\b/i,
    /\bhttpx\b/i,
    /\bnuclei\b/i,
    /\bpostman\b/i,
  ],
  exploit: [
    /\bmetasploit\b/i,
    /\bmsfvenom\b/i,
    /\bsearchsploit\b/i,
    /\bimpacket\b/i,
    /\bresponder\b/i,
    /\bevil-winrm\b/i,
    /\bxsser\b/i,
    /\bcrackmapexec\b/i,
    /\bempire\b/i,
    /\bsliver\b/i,
    /\bcovenant\b/i,
  ],
  creds: [
    /\bhashcat\b/i,
    /\bjohn\b/i,
    /\bhydra\b/i,
    /\bmimikatz\b/i,
    /\bsecretsdump\b/i,
    /\bkerbrute\b/i,
    /\bcreddump\b/i,
    /\blazagne\b/i,
    /\bhash\b/i,
    /\bcredential\b/i,
    /\bpassword\b/i,
  ],
  post: [
    /\bbloodhound\b/i,
    /\blinpeas\b/i,
    /\bwinpeas\b/i,
    /\bpeas\b/i,
    /\bpspy\b/i,
    /\bpowerup\b/i,
    /\bseatbelt\b/i,
    /\bsharpup\b/i,
    /\bautoruns\b/i,
    /\bprocmon\b/i,
    /\bprocess hacker\b/i,
  ],
  pivot: [
    /\bchisel\b/i,
    /\bligolo\b/i,
    /\bnetcat\b/i,
    /\bnc\b/i,
    /\bsocat\b/i,
    /\bproxychains\b/i,
    /\bsshuttle\b/i,
    /\bplink\b/i,
    /\bportfwd\b/i,
    /\btunnel\b/i,
    /\bpivot\b/i,
  ],
  other: [],
};

const keywordWeights: Record<ToolGroupSlug, string[]> = {
  recon: [
    'recon',
    'enumeration',
    'discovery',
    'subdomain',
    'fingerprinting',
    'asset',
    'surface',
    'scan',
    'network-security',
    'threat-intelligence',
  ],
  web: [
    'web',
    'http',
    'api',
    'application',
    'fuzz',
    'content discovery',
    'directory',
    'endpoint',
    'web-application-security',
  ],
  exploit: [
    'exploit',
    'payload',
    'rce',
    'execution',
    'lateral movement',
    'cve',
    'framework',
    'shell',
    'remote code execution',
  ],
  creds: [
    'credential',
    'password',
    'hash',
    'kerberos',
    'authentication',
    'secrets',
    'spray',
    'ticket',
    'identity-and-access-management',
  ],
  post: [
    'post-exploitation',
    'privilege escalation',
    'post exploitation',
    'host triage',
    'enumeration',
    'ad',
    'active directory',
    'graph',
    'forensics',
    'incident-response',
  ],
  pivot: [
    'pivot',
    'tunnel',
    'port forward',
    'proxy',
    'relay',
    'socks',
    'routing',
    'network path',
  ],
  other: [],
};

function searchableText(tool: ToolRecord): string {
  return [tool.displayName, ...tool.aliases, tool.summary, ...tool.topics, ...tool.subdomains]
    .join(' ')
    .toLowerCase();
}

export function getToolGroupDefinitions(): ToolGroupDefinition[] {
  return groupDefinitions;
}

export function getToolGroupDefinition(key: string): ToolGroupDefinition | undefined {
  return groupDefinitions.find((group) => group.key === key);
}

export function getToolGroup(tool: ToolRecord): ToolGroupDefinition {
  const haystack = searchableText(tool);
  const score = new Map<ToolGroupSlug, number>();

  for (const group of groupDefinitions) {
    score.set(group.key, 0);
  }

  for (const [group, patterns] of Object.entries(explicitPatterns) as [ToolGroupSlug, RegExp[]][]) {
    for (const pattern of patterns) {
      if (pattern.test(haystack)) {
        score.set(group, (score.get(group) ?? 0) + 6);
      }
    }
  }

  for (const [group, keywords] of Object.entries(keywordWeights) as [ToolGroupSlug, string[]][]) {
    for (const keyword of keywords) {
      if (haystack.includes(keyword)) {
        score.set(group, (score.get(group) ?? 0) + 1);
      }
    }
  }

  const ordered = groupDefinitions
    .filter((group) => group.key !== 'other')
    .map((group) => ({ group, score: score.get(group.key) ?? 0 }))
    .sort((left, right) => right.score - left.score);

  if ((ordered[0]?.score ?? 0) <= 0) {
    return groupDefinitions.find((group) => group.key === 'other')!;
  }

  return ordered[0]!.group;
}

export function groupToolsByTrack(tools: ToolRecord[]): (ToolGroupDefinition & { tools: ToolRecord[] })[] {
  const grouped = new Map<ToolGroupSlug, ToolRecord[]>();

  for (const group of groupDefinitions) {
    grouped.set(group.key, []);
  }

  for (const tool of tools) {
    grouped.get(getToolGroup(tool).key)?.push(tool);
  }

  return groupDefinitions.map((group) => ({
    ...group,
    tools: grouped.get(group.key) ?? [],
  }));
}
