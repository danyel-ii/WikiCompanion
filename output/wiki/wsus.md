# Wsus

## Overview
Wsus is a endpoint tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Wsus is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Wsus works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- scada
- industrial control
- iec62443
- patch management
- vulnerability management
- ot ics security
- endpoint
- patching
- CVE
- remediation

## Typical Workflow
- Define the patch management lifecycle adapted for OT environments where availability and safety take priority over immediate vulnerability remediation.
- Tracks patches for OT systems, manages risk-based prioritization,
- coordinates testing and deployment, and documents compensating
- controls for unpatchable systems.
- from collections import defaultdict
- from dataclasses import dataclass, field, asdict
- 1. CVSS Base Score (0-10)
- 2. EPSS (Exploit Prediction Scoring System) - probability of exploitation
- 3. CISA KEV (Known Exploited Vulnerabilities) catalog membership
- 4. Asset criticality (business impact of affected endpoint)

## Use Cases
- When establishing a formal OT patch management program for the first time
- When responding to critical ICS-CERT advisories affecting deployed OT systems
- When preparing for NERC CIP-007-6 or IEC 62443 patch management compliance audits
- When planning patch deployment during limited maintenance windows in continuous operations
- When evaluating compensating controls for systems that cannot be patched
- Remediating vulnerabilities identified by scanners (Nessus, Qualys, Rapid7)
- Responding to zero-day CVE advisories requiring immediate patching
- Maintaining compliance with patch management SLAs (critical within 14 days, high within 30 days)
- Building a prioritized remediation plan from vulnerability scan results

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Response Platform, Automox, CISA KEV Catalog, Claroty XDome, Engineering Workstations), Historians, MacOS, Nessus

## Sources
- implementing-patch-management-for-ot-systems
- performing-endpoint-vulnerability-remediation
