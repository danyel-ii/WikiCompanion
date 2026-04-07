# Immersive Labs

## Overview
Immersive Labs is a ransomware defense tool that appears across ransomware defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Immersive Labs is best understood as a ransomware-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Immersive Labs works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ransomware
- incident response
- tabletop exercise
- defense
- preparedness
- ransomware defense
- soc
- tabletop
- exercise
- training
- nist
- playbook validation

## Typical Workflow
- **Scenario Structure:**
- Phase 1: Initial Detection (30 min)
- SOC receives alert for suspicious process execution on file server
- EDR detects Cobalt Strike beacon on 3 workstations
- Inject: External threat intel report links C2 IP to LockBit affiliate
- Phase 2: Escalation (30 min)
- Ransomware executes on 40% of servers during overnight hours
- Inject: Attackers contact media claiming data theft of customer PII
- Phase 3: Decision Points (45 min)
- title: "Operation Dark Harvest — Ransomware Attack Scenario"

## Use Cases
- Testing organizational ransomware response procedures annually or after major infrastructure changes
- Validating decision-making processes for ransom payment, regulatory notification, and public disclosure
- Training executives, IT, legal, PR, and operations teams on their roles during a ransomware incident
- Meeting cyber insurance policy requirements for documented incident response testing
- Identifying gaps in recovery playbooks, communication plans, and backup procedures
- Designing unrealistic scenarios that do not reflect actual ransomware TTPs, reducing exercise credibility
- Allowing technical teams to dominate the exercise while business and legal participants remain passive
- Annual or semi-annual incident response testing is required (NIST, ISO 27001, PCI DSS compliance)
- New SOC analysts need exposure to major incident scenarios in a controlled environment
- Updated playbooks need validation before next real incident

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Evaluating Exercises, Archer, CISA Tabletop Exercise Packages, Conducting, FEMA Homeland Security Exercise And Evaluation Program, FEMA HSEEP, Infection Monkey, Ransomware Readiness Assessment

## Sources
- performing-ransomware-tabletop-exercise
- performing-soc-tabletop-exercise
