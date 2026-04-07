# Qualys Vmdr

## Overview
Qualys Vmdr is a endpoint tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Qualys Vmdr is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Qualys Vmdr works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- vulnerability scanning
- nessus
- qualys
- openvas
- cvss
- remediation
- patch management
- soc operations
- endpoint
- vulnerability management
- patching

## Typical Workflow
- **Nessus Scan Configuration (API):**
- nessus_url = "https://nessus.company.com:8834"
- 1. CVSS Base Score (0-10)
- 2. EPSS (Exploit Prediction Scoring System) - probability of exploitation
- 3. CISA KEV (Known Exploited Vulnerabilities) catalog membership
- 4. Asset criticality (business impact of affected endpoint)
- 5. Network exposure (internet-facing vs. internal)
- Listed in CISA KEV OR
- Active exploitation in the wild + CVSS >= 7.0

## Use Cases
- SOC teams need to establish or improve recurring vulnerability scanning programs
- Scan results require prioritization beyond raw CVSS scores using asset context and threat intelligence
- Vulnerability data must be integrated into SIEM for correlation with exploitation attempts
- Remediation tracking needs formalization with SLA-based dashboards and reporting
- **Zero-Day Response**: New CVE published — run targeted scan for affected software, cross-reference with KEV and exploit databases
- **Compliance Audit Prep**: Generate PCI DSS or HIPAA vulnerability report showing scan coverage and remediation status
- **Post-Patch Verification**: Rescan patched systems to confirm vulnerability closure and update tracking dashboard
- **Network Expansion**: New subnet added to infrastructure — onboard to scan scope with appropriate policy
- **Third-Party Risk**: Scan externally-facing assets to validate vendor patch compliance before integration
- Remediating vulnerabilities identified by scanners (Nessus, Qualys, Rapid7)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- CISA KEV Catalog, Rapid7 InsightVM, And Patching Integration, And Response Platform, Automox, MacOS, Nessus, OpenVAS

## Sources
- building-vulnerability-scanning-workflow
- performing-endpoint-vulnerability-remediation
