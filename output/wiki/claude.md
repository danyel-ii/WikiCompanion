# Claude

## Overview
Claude is a link analysis tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Claude is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Claude works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- osint
- ai correlation
- threat intelligence
- reconnaissance
- link analysis
- target profiling
- sherlock
- theharvester
- spiderfoot
- maltego

## Typical Workflow
- Obtain documented written authorization before any investigation
- Establish lawful basis for data processing (law enforcement, corporate policy, etc.)
- Define PII retention limits and data handling procedures
- Comply with local privacy regulations (GDPR, CCPA, etc.)
- 0. **Create the working directory for all OSINT outputs:**
- 1. **Enumerate usernames across platforms with Sherlock:**
- sherlock "targetusername" --output /tmp/osint/sherlock-results.txt --csv
- 2. **Harvest emails, subdomains, and hosts with theHarvester:**
- theHarvester -d targetdomain.com -b all -f /tmp/osint/harvester-results.json

## Use Cases
- You have collected raw OSINT data from multiple tools and sources but need to identify connections, contradictions, and patterns across them.
- You need to build a unified intelligence profile for a target entity (person, organization, or infrastructure) from fragmented data.
- Traditional manual correlation is too slow or error-prone for the volume of data collected.
- You want confidence-scored assessments of identity linkage across platforms rather than simple keyword matching.
- **Threat Actor Attribution:** Correlate a suspicious username found in a phishing campaign with social media profiles, domain registrations, and breach data to build an attribution profile.
- **Attack Surface Mapping:** Link discovered subdomains, emails, and employee social accounts to understand an organization's full external exposure.
- **Insider Threat Investigation:** Cross-reference an employee's known accounts with dark web marketplace activity and breach databases.
- **Brand Impersonation Detection:** Identify accounts across platforms mimicking a target brand by correlating registration patterns, naming conventions, and temporal signals.

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- HaveIBeenPwned, LLM API (GPT 4, Maltego, Ollama), Sherlock, SpiderFoot, TheHarvester

## Sources
- performing-ai-driven-osint-correlation
