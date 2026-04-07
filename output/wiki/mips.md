# Mips

## Overview
Mips is a malware analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Mips is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Mips works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- Linux
- ELF
- reverse engineering
- server malware
- malware analysis
- firmware
- IoT
- UEFI
- embedded security
- IoT security
- firmware analysis

## Typical Workflow
- readelf -h suspect_binary
- readelf -S suspect_binary
- readelf -l suspect_binary
- binwalk -e firmware.bin
- binwalk -eM firmware.bin
- **External inspection**: Document all physical interfaces (USB, Ethernet, serial ports, SD card slots), labels, FCC ID, and model numbers
- **FCC ID lookup**: Search the FCC database (fcc.gov/oet/ea/fccid) using the FCC ID to find internal photos, schematics, and radio frequency information
- Main processor/SoC (read markings, search datasheet)
- Flash memory chips (SPI NOR, NAND, eMMC)
- Debug headers and test points

## Use Cases
- A Linux server or container has been compromised and suspicious ELF binaries are found
- Analyzing Linux botnets (Mirai, Gafgyt, XorDDoS), cryptominers, or ransomware
- Investigating malware targeting cloud infrastructure, Docker containers, or Kubernetes pods
- Reverse engineering Linux rootkits and kernel modules
- Analyzing cross-platform malware compiled for Linux x86_64, ARM, or MIPS architectures
- Running ldd on malware outside a sandbox (ldd can execute code in the binary)
- Missing companion scripts (.sh files) that may handle persistence and cleanup
- A compromised IoT device or router needs firmware analysis to identify implanted backdoors
- Investigating UEFI/BIOS rootkits that persist across OS reinstallations
- Analyzing firmware updates for supply chain compromise or malicious modifications

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Ghidra, Binwalk, Extracting, And Analyzing Embedded File Systems And Compressed Data In Firmware Images, And Analyzing Embedded Firmware Images, And Drivers, And Embedded Data Within Firmware Images, And JTAG Protocols For Interfacing With Embedded Device Debug Interfaces

## Sources
- analyzing-linux-elf-malware
- performing-firmware-malware-analysis
- performing-iot-security-assessment
- performing-plc-firmware-security-analysis
