# Nessus

## Overview
Nessus is a endpoint tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Nessus is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Nessus works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- endpoint
- hardening
- windows security
- CIS benchmark
- GPO
- baseline configuration
- endpoint security
- vulnerability management
- patching
- CVE
- remediation
- CVSS

## Typical Workflow
- Practical hardening settings that can be applied to most organizations
- Minimal impact on functionality and user experience
- Covers: password policy, audit policy, user rights, security options, Windows Firewall
- Includes all L1 settings plus additional restrictions
- May impact usability (disabling autorun, restricting remote desktop, enhanced audit logging)
- Appropriate for systems handling PII, PHI, PCI data, or classified information
- Select profile based on data classification and risk tolerance of the endpoint.
- 1. CVSS Base Score (0-10)
- 2. EPSS (Exploit Prediction Scoring System) - probability of exploitation
- 3. CISA KEV (Known Exploited Vulnerabilities) catalog membership

## Use Cases
- Deploying new Windows 10/11 or Server 2019/2022 endpoints that require security hardening
- Establishing organization-wide security baselines using CIS Level 1 or Level 2 profiles
- Remediating findings from compliance audits (PCI DSS, HIPAA, SOC 2) that reference CIS benchmarks
- Validating existing endpoint configurations against current CIS benchmark versions
- Remediating vulnerabilities identified by scanners (Nessus, Qualys, Rapid7)
- Responding to zero-day CVE advisories requiring immediate patching
- Maintaining compliance with patch management SLAs (critical within 14 days, high within 30 days)
- Building a prioritized remediation plan from vulnerability scan results
- When conducting security assessments that involve scanning infrastructure with nessus
- When following incident response procedures for related security events

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Response Platform, Automox, CIS CAT Pro Assessor, CISA KEV Catalog, Group Policy Management Console, LGPO.exe, MacOS, Microsoft Security Compliance Toolkit

## Sources
- hardening-windows-endpoint-with-cis-benchmark
- performing-endpoint-vulnerability-remediation
- scanning-infrastructure-with-nessus
