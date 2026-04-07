# Binwalk

## Overview
Binwalk is a firmware analysis tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Binwalk is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Binwalk works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- firmware
- binwalk
- extraction
- entropy
- IoT security
- reverse engineering
- firmware analysis
- malware
- IoT
- UEFI
- embedded security
- malware analysis

## Typical Workflow
- binwalk -v firmware.bin
- binwalk -y "squashfs" firmware.bin
- binwalk -A firmware.bin
- binwalk -e firmware.bin
- binwalk -eM firmware.bin
- **External inspection**: Document all physical interfaces (USB, Ethernet, serial ports, SD card slots), labels, FCC ID, and model numbers
- **FCC ID lookup**: Search the FCC database (fcc.gov/oet/ea/fccid) using the FCC ID to find internal photos, schematics, and radio frequency information
- Main processor/SoC (read markings, search datasheet)
- Flash memory chips (SPI NOR, NAND, eMMC)
- Debug headers and test points

## Use Cases
- Analyzing IoT device firmware downloaded from vendor sites or extracted from flash chips
- Reverse engineering router, camera, or embedded device firmware for vulnerability research
- Identifying embedded filesystems (SquashFS, CramFS, JFFS2, UBIFS) within firmware blobs
- Detecting encrypted or compressed regions using entropy analysis
- Extracting hardcoded credentials, API keys, certificates, or configuration files from firmware
- Performing security assessments of embedded devices in authorized penetration tests
- Some vendors use non-standard SquashFS with custom compression; use sasquatch instead of unsquashfs
- Encrypted firmware requires decryption keys often found in bootloader or previous unencrypted versions
- A compromised IoT device or router needs firmware analysis to identify implanted backdoors
- Investigating UEFI/BIOS rootkits that persist across OS reinstallations

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Ghidra, MIPS, Extracting, And Analyzing Embedded File Systems And Compressed Data In Firmware Images, And Analyzing Embedded Firmware Images, And Automated Extraction Of Embedded Files, And Drivers, And Embedded Data Within Firmware Images

## Sources
- performing-firmware-extraction-with-binwalk
- performing-firmware-malware-analysis
- performing-iot-security-assessment
- performing-plc-firmware-security-analysis
- performing-steganography-detection
