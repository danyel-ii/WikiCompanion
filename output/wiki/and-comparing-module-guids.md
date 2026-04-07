# And Comparing Module Guids

## Overview
And Comparing Module Guids is a firmware security tool that appears across firmware security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Comparing Module Guids is best understood as a firmware-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Comparing Module Guids works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- UEFI
- bootkit
- firmware
- Secure Boot
- chipsec
- ESP
- persistence
- firmware security

## Typical Workflow
- flashrom -p internal -r firmware_dump.rom

## Use Cases
- A compromised system re-establishes C2 communication after OS reinstallation or disk replacement
- Secure Boot has been tampered with, disabled, or shows unexpected Machine Owner Key (MOK) enrollment
- Firmware integrity verification fails against vendor-provided baselines
- Memory forensics reveals rootkit components loading during early boot phase
- Investigating advanced persistent threat (APT) campaigns known to deploy UEFI implants
- Auditing firmware security posture for enterprise endpoint hardening
- Running analysis from the compromised OS (rootkit components hide from live analysis)
- Only checking the ESP without examining SPI flash firmware (misses firmware-level implants like LoJax, MoonBounce)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Secure Boot Configuration Auditing, Chipsec, Extracting DXE Drivers, Flashrom, Reading UEFI Variables, Sigcheck, UEFITool, Verifying Firmware Write Protection

## Sources
- analyzing-uefi-bootkit-persistence
