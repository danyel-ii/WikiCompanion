# Timestomping

## Overview
Timestomping is a ntfs forensics tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Timestomping is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Timestomping works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- timestomping
- ntfs forensics
- mft analysis
- defense evasion
- threat hunting

## Typical Workflow

## Use Cases
- Investigating suspected anti-forensic activity where an adversary may have altered file timestamps to blend malware into legitimate directories
- Threat hunting for defense evasion (MITRE ATT&CK T1070.006) across compromised Windows systems
- Validating timeline integrity during forensic examinations of disk images or live acquisitions
- Triaging suspicious files that appear to have creation dates older than the OS installation or inconsistent with known deployment timelines
- Detecting tools like Timestomp (Metasploit), NTimeStomp, SetMACE, or PowerShell Set-ItemProperty used to alter timestamps
- Building automated detection pipelines that flag temporal anomalies in MFT data for SOC analysts

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- hunting-for-defense-evasion-via-timestomping
