# Moneta

## Overview
Moneta is a threat hunting tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Moneta is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Moneta works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- process injection
- sysmon
- mitre t1055
- defense evasion
- dll injection
- process hollowing

## Typical Workflow
- 1. **Monitor CreateRemoteThread (Event 8)**: Detect when one process creates a thread in another process's address space. This is the primary indicator of classic DLL injection and shellcode injection.
- 2. **Analyze ProcessAccess (Event 10)**: Track cross-process handle requests with PROCESS_VM_WRITE (0x0020), PROCESS_VM_OPERATION (0x0008), and PROCESS_CREATE_THREAD (0x0002) access rights. Legitimate processes rarely need these on other processes.
- 3. **Detect Anomalous DLL Loading (Event 7)**: Identify DLLs loaded from unusual paths (user temp directories, download folders) into system processes.
- 4. **Hunt Process Hollowing (Event 25)**: Sysmon 13+ generates ProcessTampering events when the executable image in memory diverges from what was mapped from disk -- a hallmark of process hollowing (T1055.012).
- 5. **Correlate with Process Creation**: Link injection events to the originating process creation (Event 1) to build the full attack chain from initial execution to injection.
- 6. **Filter Known-Good Cross-Process Activity**: Exclude legitimate software that performs cross-process operations (debuggers, AV products, accessibility tools, RMM agents).
- 7. **Map to ATT&CK Sub-Techniques**: Classify detected injection as classic injection (T1055.001), PE injection (T1055.002), thread execution hijacking (T1055.003), APC injection (T1055.004), thread local storage (T1055.005), process hollowing (T1055.012), or process doppelganging (T1055.013).

## Use Cases
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
- Elastic, Hollows Hunter, PE Sieve, Process Hacker, Splunk, Sysmon, Volatility

## Sources
- detecting-t1055-process-injection-with-sysmon
