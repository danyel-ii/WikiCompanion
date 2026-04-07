# Hollows Hunter

## Overview
Hollows Hunter is a proactive detection tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Hollows Hunter is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Hollows Hunter works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- mitre attack
- process hollowing
- process injection
- edr
- t1055
- proactive detection
- sysmon
- mitre t1055
- defense evasion
- dll injection

## Typical Workflow
- 1. **Understand Hollowing Mechanics**: Process hollowing involves creating a legitimate process in suspended state, unmapping its memory, writing malicious code, then resuming execution.
- 2. **Monitor Suspended Process Creation**: Hunt for processes created with CREATE_SUSPENDED flag followed by memory writes and thread resumption.
- 3. **Detect Memory Section Anomalies**: Identify processes where the in-memory image differs from the on-disk binary (image mismatch).
- 5. **Check Process Integrity**: Compare process memory sections against the legitimate binary on disk.
- 6. **Correlate with Network Activity**: Hollowed processes often establish C2 connections - correlate suspicious process behavior with network logs.
- 7. **Document and Contain**: Report findings, isolate affected endpoints, and update detection rules.
- 1. **Monitor CreateRemoteThread (Event 8)**: Detect when one process creates a thread in another process's address space. This is the primary indicator of classic DLL injection and shellcode injection.
- 2. **Analyze ProcessAccess (Event 10)**: Track cross-process handle requests with PROCESS_VM_WRITE (0x0020), PROCESS_VM_OPERATION (0x0008), and PROCESS_CREATE_THREAD (0x0002) access rights. Legitimate processes rarely need these on other processes.
- 3. **Detect Anomalous DLL Loading (Event 7)**: Identify DLLs loaded from unusual paths (user temp directories, download folders) into system processes.
- 4. **Hunt Process Hollowing (Event 25)**: Sysmon 13+ generates ProcessTampering events when the executable image in memory diverges from what was mapped from disk -- a hallmark of process hollowing (T1055.012).

## Use Cases
- When investigating suspected fileless malware or in-memory threats
- After EDR alerts on process injection or suspicious memory operations
- When hunting for defense evasion techniques in a compromised environment
- When threat intel reports indicate process hollowing in active campaigns
- During purple team exercises validating T1055.012 detection coverage
- When hunting for defense evasion techniques that hide malicious code inside legitimate processes
- After EDR alerts for suspicious cross-process memory access or remote thread creation
- When investigating malware that injects into svchost.exe, explorer.exe, or other system processes
- During purple team exercises testing detection of process injection variants
- When validating Sysmon configuration coverage for injection detection

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Process Hacker, Volatility, API Monitor, CrowdStrike Falcon, Elastic, Microsoft Defender For Endpoint, Moneta, Pe Sieve

## Sources
- detecting-process-hollowing-technique
- detecting-t1055-process-injection-with-sysmon
