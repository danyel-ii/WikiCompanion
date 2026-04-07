# Code42 Incydr

## Overview
Code42 Incydr is a endpoint tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Code42 Incydr is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Code42 Incydr works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- endpoint
- DLP
- data loss prevention
- data protection
- content inspection
- endpoint security
- soc
- insider threat
- data exfiltration
- ueba
- investigation
- hr correlation

## Typical Workflow
- Microsoft Purview → Data Classification → Sensitive info types
- Credit card number (PCI)
- Social Security Number (PII)
- Health records (HIPAA)
- Keywords: "employee id", "emp id", "staff number"
- INSIDER THREAT INVESTIGATION AUTHORIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Case ID:           IT-2024-0089
- Subject:           [Employee Name] — [Department]
- Authorized By:     [CISO / General Counsel]

## Use Cases
- Deploying endpoint DLP to prevent sensitive data (PII, PHI, PCI) from leaving the organization
- Configuring content inspection rules for email attachments, USB transfers, and cloud uploads
- Implementing Microsoft Purview DLP or Symantec DLP endpoint policies
- Meeting compliance requirements for data protection (GDPR, HIPAA, PCI DSS)
- HR refers a departing employee for monitoring during their notice period
- DLP alerts indicate bulk data downloads or transfers to personal storage
- UEBA detects anomalous access patterns deviating significantly from peer baselines
- Management reports concerns about an employee accessing sensitive data outside their role
- **Departing Employee**: Bulk download of customer lists and product roadmaps during two-week notice period
- **Disgruntled Employee**: After negative performance review, employee accesses executive salary data outside their role

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Cloud Modules, And Cloud Storage, Digital Guardian, DTEX InTERCEPT, Email, Forcepoint DLP, Forcepoint Insider Threat, Microsoft Purview

## Sources
- implementing-endpoint-dlp-controls
- investigating-insider-threat-indicators
