# Email Gateway

## Overview
Email Gateway is a **low volume**: few emails to avoid pattern based detection tool that appears across phishing defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Email Gateway is best understood as a phishing-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Email Gateway works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- **Targeted recipients**: Specific individuals, often executives or finance staff
- **Researched pretexts**: References to real projects, colleagues, or events
- **Impersonation**: Spoofs trusted senders (CEO, vendor, partner)
- **Low volume**: Few emails to avoid pattern-based detection
- **Urgent tone**: Creates pressure to act quickly

## Typical Workflow
- Security > Anti-phishing policies > Impersonation settings
- Enable user impersonation protection for VIPs
- Enable domain impersonation protection
- Add protected users (CEO, CFO, HR Director)
- Set action: Quarantine message
- Email Protection > Impostor Classifier
- Enable display name spoofing detection
- Configure lookalike domain detection
- Set Impostor threshold sensitivity

## Use Cases
- When investigating security incidents that require detecting spearphishing with email gateway
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- detecting-spearphishing-with-email-gateway
