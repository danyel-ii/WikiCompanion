# Microsoft Purview

## Overview
Microsoft Purview is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Microsoft Purview is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Microsoft Purview works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- dlp
- data protection
- macie
- data classification
- privacy
- soc
- insider threat
- data exfiltration
- ueba
- investigation
- hr correlation

## Typical Workflow
- Enable Macie and configure automated sensitive data discovery jobs for S3 buckets.
- aws macie2 enable-macie
- INSIDER THREAT INVESTIGATION AUTHORIZATION
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Case ID:           IT-2024-0089
- Subject:           [Employee Name] — [Department]
- Authorized By:     [CISO / General Counsel]
- Referral Source:   HR — Employee submitted resignation, 2-week notice
- Justification:     Employee has access to trade secrets and customer PII
- Scope:             Email, file access, USB, cloud storage, printing

## Use Cases
- When compliance frameworks (GDPR, HIPAA, PCI DSS) require automated sensitive data discovery and protection
- When building data governance programs that classify and label data across cloud storage
- When implementing data loss prevention controls for cloud-based data pipelines
- When auditing cloud environments for unprotected sensitive data (PII, PHI, financial data)
- When integrating DLP scanning into CI/CD pipelines to prevent sensitive data from reaching production
- HR refers a departing employee for monitoring during their notice period
- DLP alerts indicate bulk data downloads or transfers to personal storage
- UEBA detects anomalous access patterns deviating significantly from peer baselines
- Management reports concerns about an employee accessing sensitive data outside their role
- **Departing Employee**: Bulk download of customer lists and product roadmaps during two-week notice period

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Amazon Macie, And Cloud Storage, And Content Search, And DLP Policy Enforcement, And Mobile Evidence Analysis, And Redacting Sensitive Data, Auto Classification, Azure Information Protection

## Sources
- implementing-cloud-dlp-for-data-protection
- investigating-insider-threat-indicators
- performing-insider-threat-investigation
