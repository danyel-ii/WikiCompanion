# Tidal Cyber

## Overview
Tidal Cyber is a detection coverage tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Tidal Cyber is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Tidal Cyber works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- mitre attack
- threat modeling
- ttp
- detection coverage
- attack navigator
- risk assessment
- soc operations

## Typical Workflow
- response = requests.get(
- attack_data = response.json()

## Use Cases
- SOC teams need to assess detection coverage against relevant threat actors and their TTPs
- Security leadership requires threat-informed defense prioritization
- New environments (cloud migration, OT integration) need detection strategy planning
- Purple team exercises require structured adversary emulation based on threat models
- Annual risk assessments need ATT&CK-based threat landscape analysis
- **Annual Threat Assessment**: Map top 5 threat actors to ATT&CK, overlay against detection, produce gap analysis
- **Cloud Migration Planning**: Model cloud-specific threats (T1078.004, T1537) and plan detection coverage
- **M&A Security Assessment**: Threat model the acquired company's environment against relevant threat actors
- **Budget Justification**: Use gap analysis to demonstrate detection blind spots requiring tool investment
- **Purple Team Planning**: Select adversary emulation scenarios based on highest-priority gaps from threat model

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Atomic Red Team, CTID ATT&CK Workbench, MITRE ATT&CK Navigator, MITRE Caldera

## Sources
- implementing-threat-modeling-with-mitre-attack
