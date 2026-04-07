# Forcepoint Insider Threat

## Overview
Forcepoint Insider Threat is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Forcepoint Insider Threat is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Forcepoint Insider Threat works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- insider threat
- data exfiltration
- dlp
- ueba
- investigation
- hr correlation
- soc operations

## Typical Workflow
- INSIDER THREAT INVESTIGATION AUTHORIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Case ID:           IT-2024-0089
- Subject:           [Employee Name] — [Department]
- Authorized By:     [CISO / General Counsel]
- Referral Source:   HR — Employee submitted resignation, 2-week notice
- Justification:     Employee has access to trade secrets and customer PII
- Scope:             Email, file access, USB, cloud storage, printing
- Duration:          2024-03-15 to 2024-03-29 (notice period)
- Privacy Review:    Completed — compliant with acceptable use policy

## Use Cases
- HR refers a departing employee for monitoring during their notice period
- DLP alerts indicate bulk data downloads or transfers to personal storage
- UEBA detects anomalous access patterns deviating significantly from peer baselines
- Management reports concerns about an employee accessing sensitive data outside their role
- **Departing Employee**: Bulk download of customer lists and product roadmaps during two-week notice period
- **Disgruntled Employee**: After negative performance review, employee accesses executive salary data outside their role
- **Contractor Overreach**: External consultant accessing systems beyond contracted scope, downloading source code
- **Account Misuse**: Employee sharing credentials with unauthorized third party for competitive intelligence
- **Sabotage Indicator**: IT admin creating backdoor accounts and modifying system configurations before departure

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Cloud Storage, Code42 Incydr, DTEX InTERCEPT, Email, Microsoft Purview, Splunk UBA

## Sources
- investigating-insider-threat-indicators
