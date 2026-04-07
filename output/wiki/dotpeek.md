# Dotpeek

## Overview
Dotpeek is a malware analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Dotpeek is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Dotpeek works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- dotnet
- reverse engineering
- dnSpy
- decompilation
- malware analysis

## Typical Workflow

## Use Cases
- A malware sample is identified as a .NET assembly (C#, VB.NET, F#) requiring decompilation
- Analyzing .NET-based malware families (AgentTesla, AsyncRAT, RedLine Stealer, Quasar RAT)
- Deobfuscating .NET code protected by ConfuserEx, SmartAssembly, or custom obfuscators
- Extracting hardcoded C2 configurations, encryption keys, and credentials from managed assemblies
- Debugging .NET malware at runtime to observe decryption routines and dynamic behavior
- Analyzing without de4dot first (ConfuserEx makes manual analysis extremely difficult)
- Missing configuration stored in .NET resources rather than hardcoded strings

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Compiler Information, And Debugger Supporting C# And VB.NET Decompilation, And IL Views Of Assembly Code, And Many Other Protectors, De4dot, Decompiler, Detect It Easy, dnSpy

## Sources
- reverse-engineering-dotnet-malware-with-dnspy
