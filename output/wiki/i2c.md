# I2c

## Overview
I2c is a firmware analysis tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
I2c is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
I2c works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- IoT security
- firmware analysis
- embedded systems
- hardware hacking
- UART JTAG
- penetration testing

## Typical Workflow
- **External inspection**: Document all physical interfaces (USB, Ethernet, serial ports, SD card slots), labels, FCC ID, and model numbers
- **FCC ID lookup**: Search the FCC database (fcc.gov/oet/ea/fccid) using the FCC ID to find internal photos, schematics, and radio frequency information
- Main processor/SoC (read markings, search datasheet)
- Flash memory chips (SPI NOR, NAND, eMMC)
- Debug headers and test points
- UART/JTAG/SWD pins (look for 4-pin or 10-pin headers, or unpopulated pads)
- **UART identification**: Use a multimeter to identify UART pins (TX, RX, GND, VCC). Connect USB-to-UART adapter and attempt serial console access at common baud rates (9600, 38400, 57600, 115200)
- **JTAG identification**: Use JTAGulator or manual probing to identify JTAG pins (TCK, TMS, TDI, TDO, TRST). Connect JTAG debugger for memory access and debugging.

## Use Cases
- Evaluating the security of IoT devices before deployment in enterprise or critical infrastructure environments
- Assessing consumer IoT products for security vulnerabilities as part of product security review or certification
- Testing industrial IoT (IIoT) devices for vulnerabilities that could affect operational technology environments
- Analyzing firmware for backdoors, hardcoded credentials, and known vulnerabilities in embedded components
- Evaluating the security of the complete IoT ecosystem including device, cloud backend, and mobile companion app
- Focusing only on the web interface and missing UART/JTAG access that provides a root shell with no authentication
- Testing the device in isolation and missing network-level risks from deploying vulnerable devices on the corporate network

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Embedded Data Within Firmware Images, And JTAG Protocols For Interfacing With Embedded Device Debug Interfaces, And Other Architectures, Binwalk, Bus Pirate, Compression Formats, FirmAE, Ghidra

## Sources
- performing-iot-security-assessment
