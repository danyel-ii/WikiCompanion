# Edr

## Overview
Edr is a threat hunting tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Edr is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Edr works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- credential dumping
- lsass
- mitre t1003
- edr
- mimikatz
- ntds
- sam database

## Typical Workflow
- 5. **Detect DCSync Activity**: Monitor for non-DC accounts requesting directory replication (Event 4662 with replication GUIDs).
- 6. **Correlate with Lateral Movement**: After credential dumping, attackers typically move laterally. Correlate credential access events with subsequent remote logon attempts.
- 7. **Assess Impact**: Determine which credentials were potentially compromised and initiate password resets.

## Use Cases
- When hunting for credential theft activity in the environment
- After compromise indicators suggest attacker has elevated privileges
- When EDR alerts fire for LSASS access or suspicious process memory reads
- During incident response to determine scope of credential compromise
- When auditing LSASS protection controls (Credential Guard, RunAsPPL)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- detecting-t1003-credential-dumping-with-edr
