# Thread Stacks

## Overview
Thread Stacks is a memory forensics tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Thread Stacks is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Thread Stacks works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- process injection
- detection
- memory forensics
- defense evasion
- malware analysis

## Typical Workflow

## Use Cases
- EDR alerts on suspicious API call sequences (VirtualAllocEx + WriteProcessMemory + CreateRemoteThread)
- A legitimate process (explorer.exe, svchost.exe) exhibits unexpected network connections or file operations
- Memory forensics reveals executable code in memory regions that should not contain it
- Investigating living-off-the-land attacks where malware hides inside trusted processes
- Building detection logic for specific injection techniques in EDR or SIEM rules
- Assuming all svchost.exe instances are identical (each loads different service DLLs)
- Relying only on process name matching (attackers specifically target svchost.exe because multiple instances are expected)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Hollowing, And Injected Modules, API Monitor, Hooking, Pe Sieve, Process Hacker, Sysmon, Useful For Observing Injection Sequences In Real Time

## Sources
- detecting-process-injection-techniques
