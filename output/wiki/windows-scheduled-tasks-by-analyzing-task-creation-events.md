# Windows Scheduled Tasks By Analyzing Task Creation Events

## Overview
Windows Scheduled Tasks By Analyzing Task Creation Events is a endpoint detection tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Windows Scheduled Tasks By Analyzing Task Creation Events is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Windows Scheduled Tasks By Analyzing Task Creation Events works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- scheduled tasks
- persistence
- mitre t1053 005
- windows
- endpoint detection

## Typical Workflow
- 1. **Enumerate All Scheduled Tasks**: Collect complete task inventory from target systems using `schtasks /query /fo CSV /v` or `Get-ScheduledTask` PowerShell cmdlet.
- 2. **Monitor Task Creation Events**: Track Event ID 4698 for new task creation, correlating with the creating process and user account context.
- 3. **Analyze Task Actions**: Examine what each task executes. Flag tasks running scripts (PowerShell, cmd, wscript), binaries from user-writable paths (TEMP, AppData, Downloads), or encoded/obfuscated commands.
- 4. **Check Task Triggers**: Review trigger conditions. Tasks triggered by system startup, user logon, or short intervals (1-5 minutes) warrant investigation.
- 5. **Identify Hidden or Disguised Tasks**: Hunt for tasks with names mimicking legitimate Windows tasks, tasks with Security Descriptor modifications hiding them from standard enumeration, or tasks stored in non-standard registry locations.
- 6. **Correlate with Process Execution**: Match scheduled task execution events with process creation logs to confirm what actually runs.
- 7. **Baseline and Diff**: Compare current task inventory against known-good baselines to identify new, modified, or unexpected tasks.

## Use Cases
- When proactively hunting for persistence mechanisms in Windows environments
- After detecting schtasks.exe or at.exe usage in process creation logs
- When investigating malware that survives reboots and user logoffs
- During incident response to enumerate all persistence on compromised systems
- When Windows Security Event ID 4698 (Scheduled Task Created) fires for unusual tasks

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- hunting-for-suspicious-scheduled-tasks
