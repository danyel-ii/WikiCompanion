export interface UpstreamIndexSkill {
  name: string;
  description: string;
  domain: string;
  path: string;
}

export interface UpstreamIndex {
  version: string;
  generated_at: string;
  repository: string;
  domain: string;
  total_skills: number;
  skills: UpstreamIndexSkill[];
}

export interface ParsedSkillSectionMap {
  [title: string]: string;
}

export interface ParsedSkill {
  slug: string;
  title: string;
  description: string;
  subdomain?: string;
  tags: string[];
  sourceUrl: string;
  tools: string[];
  toolsConfidence: number;
  keyConcepts: string[];
  commonScenarios: string[];
  whenToUse: string[];
  sections: ParsedSkillSectionMap;
}

export interface IntermediateToolRecord {
  slug: string;
  displayName: string;
  aliases: string[];
  summary: string;
  topics: string[];
  subdomains: string[];
  referenceCount: number;
  sourceSkills: Array<{
    slug: string;
    title: string;
    description: string;
    subdomain?: string;
    sourceUrl?: string;
    confidence?: number;
  }>;
  sourceNotes: string[];
  generatedAt: string;
  articleMode: 'template' | 'llm';
  confidence: number;
}

export interface RawToolKnowledge {
  aliases: string[];
  skills: string[];
  concepts: string[];
  workflows: string[];
  scenarios: string[];
}

export interface StructuredToolKnowledge {
  aliases: string[];
  domain: string;
  definition: string;
  core_concepts: string[];
  workflow_patterns: string[];
  use_cases: string[];
  related_tools: string[];
  source_skills: string[];
}
