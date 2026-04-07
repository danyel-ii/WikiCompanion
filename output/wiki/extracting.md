# Extracting

## Overview
Extracting is a malware analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Extracting is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Extracting works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- firmware
- IoT
- UEFI
- embedded security
- malware analysis
- ot security
- ics
- scada
- industrial control
- iec62443
- firmware analysis

## Typical Workflow
- binwalk -e firmware.bin
- binwalk -eM firmware.bin
- Extract or obtain PLC firmware through authorized methods. This can be done by downloading from the vendor, extracting from a lab device, or obtaining from a project backup.
- Supports firmware extraction from project files, network downloads,
- and binary image comparison against known-good baselines.

## Use Cases
- A compromised IoT device or router needs firmware analysis to identify implanted backdoors
- Investigating UEFI/BIOS rootkits that persist across OS reinstallations
- Analyzing firmware updates for supply chain compromise or malicious modifications
- Extracting and examining embedded Linux filesystems from IoT device firmware images
- Verifying firmware integrity after a suspected hardware or firmware-level compromise
- Ignoring modified shared libraries (.so files) that may hook system functions
- Missing firmware modifications stored outside the main filesystem (bootloader, configuration partitions)
- When assessing PLC security as part of an IEC 62443 component security evaluation (IEC 62443-4-2)
- When validating firmware integrity after a suspected compromise or supply chain attack
- When evaluating the security of a new PLC platform before deployment in critical infrastructure

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Binwalk, Ghidra, MIPS, And Analyzing Embedded File Systems And Compressed Data In Firmware Images, And Analyzing Embedded Firmware Images, And Drivers, And Other Embedded Architecture Support For Firmware Binary Analysis, And UEFI Analysis

## Sources
- performing-firmware-malware-analysis
- performing-plc-firmware-security-analysis
