# And Case Management

## Overview
And Case Management is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Case Management is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Case Management works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- elastic
- siem
- threat hunting
- kql
- eql
- mitre attack
- kibana
- soc operations

## Typical Workflow
- **Data sources**: `logs-endpoint.events.process-*`, `logs-windows.sysmon_operational-*`
- **Time range**: Last 30 days

## Use Cases
- SOC teams need to proactively search for threats not caught by existing detection rules
- Threat intelligence reports describe new TTPs requiring validation against historical data
- Red team exercises reveal detection gaps that need hunting query development
- Periodic hunting cadence requires structured hypothesis-driven investigations
- **LOLBin Abuse**: Hunt for mshta.exe, regsvr32.exe, rundll32.exe, certutil.exe with suspicious arguments
- **Persistence Mechanisms**: Query for scheduled task creation, registry run key modification, WMI subscriptions
- **C2 Beaconing**: Analyze network flow data for periodic outbound connections with consistent intervals
- **Data Staging**: Hunt for large file compression (7z, rar, zip) followed by outbound transfers
- **Account Manipulation**: Search for net.exe user creation, group membership changes, or password resets by non-admin users

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Network Monitoring, ATT&CK Navigator, Elastic Agent, Elastic Endpoint Security, Elastic Security, File, Timeline

## Sources
- performing-threat-hunting-with-elastic-siem
