# Amsi

## Overview
Amsi is a detection engineering tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Amsi is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Amsi works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- endpoint
- fileless malware
- memory attacks
- PowerShell
- detection engineering
- endpoint security

## Typical Workflow

## Use Cases
- Building detection rules for fileless malware that operates entirely in memory
- Hunting for PowerShell-based attacks, reflective DLL injection, and WMI abuse
- Configuring endpoint telemetry (Sysmon, AMSI, PowerShell logging) to capture fileless indicators
- Investigating incidents where traditional AV found no malicious files

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Transcription Logging, And WMI Monitoring, DLL, Microsoft Defender For Endpoint, Module, PowerShell Logging, Sysmon, Volatility

## Sources
- detecting-fileless-attacks-on-endpoints
