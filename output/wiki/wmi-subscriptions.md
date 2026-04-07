# Wmi Subscriptions

## Overview
Wmi Subscriptions is a endpoint detection tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Wmi Subscriptions is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Wmi Subscriptions works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- wmi persistence
- mitre t1546 003
- event subscription
- windows
- endpoint detection

## Typical Workflow
- 1. **Enumerate Existing WMI Subscriptions**: Query all permanent WMI event subscriptions on target systems. A clean system typically has very few or zero permanent subscriptions, making anomalies easy to spot.
- 2. **Monitor WMI Event Creation (Sysmon 19/20/21)**: Sysmon Event 19 captures WmiEventFilter activity, Event 20 captures WmiEventConsumer activity, and Event 21 captures WmiEventConsumerToFilter binding.
- 3. **Analyze Consumer Types**: Focus on ActiveScriptEventConsumer (runs VBScript/JScript) and CommandLineEventConsumer (executes commands) -- these are the dangerous types used for persistence.
- 4. **Check Event Filter Triggers**: Examine what triggers the subscription. Common malicious triggers include system startup (Win32_ProcessStartTrace), user logon, or timer-based execution intervals.
- 7. **Validate and Respond**: Confirm malicious subscriptions, remove them, and trace back to the initial infection vector.

## Use Cases
- When proactively searching for fileless persistence mechanisms in Windows environments
- After threat intelligence reports indicate WMI-based persistence by APT groups (APT29, APT32, FIN8)
- When investigating systems where malware persists across reboots despite cleanup attempts
- During incident response when standard persistence locations (Run keys, scheduled tasks) are clean
- When WmiPrvSe.exe is observed spawning unexpected child processes

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- hunting-for-persistence-via-wmi-subscriptions
