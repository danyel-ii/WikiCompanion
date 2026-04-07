# Powershell Get Wmiobject

## Overview
Powershell Get Wmiobject is a threat hunting tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Powershell Get Wmiobject is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Powershell Get Wmiobject works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- wmi
- persistence
- sysmon
- t1546.003
- mitre attack
- windows
- dfir

## Typical Workflow
- 1. **Collect Telemetry**: Parse Sysmon Event IDs 19 (WmiEventFilter), 20 (WmiEventConsumer), 21 (WmiEventConsumerToFilter).
- 2. **Identify Suspicious Consumers**: Flag CommandLineEventConsumer and ActiveScriptEventConsumer types executing code.
- 3. **Analyze Event Filters**: Examine WQL queries in EventFilters for process start triggers or timer-based execution.
- 4. **Correlate Bindings**: Match FilterToConsumerBindings linking suspicious filters to consumers.
- 6. **Validate Findings**: Cross-reference with known-good WMI subscriptions (SCCM, AV products).
- 7. **Document and Remediate**: Remove malicious subscriptions and update detection rules.

## Use Cases
- When hunting for WMI event subscription persistence (MITRE ATT&CK T1546.003)
- After detecting suspicious WMI activity in endpoint telemetry
- During incident response to identify attacker persistence mechanisms
- When Sysmon alerts trigger on Event IDs 19, 20, or 21
- During purple team exercises testing WMI-based persistence

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Autoruns, Splunk, Sysmon, Velociraptor, WMI Explorer

## Sources
- detecting-wmi-persistence
