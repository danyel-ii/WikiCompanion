# Digital Guardian

## Overview
Digital Guardian is a endpoint tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Digital Guardian is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Digital Guardian works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- endpoint
- DLP
- data loss prevention
- data protection
- content inspection
- endpoint security
- insider threat
- user behavior analytics
- data exfiltration
- privilege misuse
- DFIR
- incident response

## Typical Workflow
- Microsoft Purview → Data Classification → Sensitive info types
- Credit card number (PCI)
- Social Security Number (PII)
- Health records (HIPAA)
- Keywords: "employee id", "emp id", "staff number"
- Record the source of the allegation (DLP alert, UBA detection, HR referral, manager report)
- Confirm with legal counsel that the investigation is authorized
- Define the investigation scope: what activity is being investigated, time period, systems involved
- Establish the investigation team: security, legal, HR (never investigate alone)
- Create a restricted case file accessible only to the investigation team

## Use Cases
- Deploying endpoint DLP to prevent sensitive data (PII, PHI, PCI) from leaving the organization
- Configuring content inspection rules for email attachments, USB transfers, and cloud uploads
- Implementing Microsoft Purview DLP or Symantec DLP endpoint policies
- Meeting compliance requirements for data protection (GDPR, HIPAA, PCI DSS)
- DLP (Data Loss Prevention) alerts on large data transfers to personal cloud storage or USB devices
- User behavior analytics (UBA) detects anomalous access patterns for a user account
- HR reports a departing employee suspected of taking proprietary information
- A privileged user is observed accessing systems outside their job function
- Whistleblower or coworker report alleges policy violations or data theft
- Investigating without legal counsel authorization (may violate employee privacy rights)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Cloud Modules, And Content Search, And Mobile Evidence Analysis, Cloud, Code42 Incydr, DLP, EDiscovery, Exabeam

## Sources
- implementing-endpoint-dlp-controls
- performing-insider-threat-investigation
