# Elastic Security Eql

## Overview
Elastic Security Eql is a intrusion analysis tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Elastic Security Eql is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Elastic Security Eql works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- kill chain
- Lockheed Martin
- MITRE ATT&CK
- intrusion analysis
- defense in depth
- NIST CSF
- threat intelligence

## Typical Workflow
- **Phase 1 - Reconnaissance**: Adversary gathers target information before attack.
- **Phase 2 - Weaponization**: Adversary creates attack tool (malware + exploit).
- **Phase 3 - Delivery**: Adversary transmits weapon to target.
- **Phase 4 - Exploitation**: Adversary exploits vulnerability to execute code.
- **Phase 5 - Installation**: Adversary establishes persistence on target.
- **Phase 6 - Command & Control (C2)**: Adversary communicates with compromised system.

## Use Cases
- Conducting post-incident analysis to determine how far an adversary progressed through an attack sequence
- Designing layered defensive controls with the goal of interrupting attacks at the earliest possible phase
- Producing threat intelligence reports that communicate attack progression to non-technical stakeholders

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- MISP, MITRE ATT&CK Navigator, Splunk ES

## Sources
- analyzing-cyber-kill-chain
