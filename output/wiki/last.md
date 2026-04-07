# Last

## Overview
Last is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Last is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Last works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- linux forensics
- system artifacts
- log analysis
- persistence detection
- incident investigation
- digital forensics

## Typical Workflow

## Use Cases
- When investigating a compromised Linux server or workstation
- For identifying persistence mechanisms (cron, systemd, SSH keys)
- When tracing user activity through shell history and authentication logs
- During incident response to determine the scope of a Linux-based breach
- For detecting rootkits, backdoors, and unauthorized modifications

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AIDE, Auditd, Chkrootkit, Osquery, Plaso, Rkhunter, Velociraptor

## Sources
- analyzing-linux-system-artifacts
