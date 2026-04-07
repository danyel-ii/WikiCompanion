# Pymodbus

## Overview
Pymodbus is a anomaly detection tool that appears across ot ics security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Pymodbus is best understood as a ot-ics-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Pymodbus works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- scada
- industrial control
- iec62443
- modbus
- protocol anomaly
- ot ics security
- Modbus TCP
- ICS security
- deep packet inspection
- anomaly detection

## Typical Workflow
- Deploy passive monitoring to capture all Modbus/TCP traffic and parse it into structured records for analysis.
- Monitors Modbus/TCP traffic for anomalies including unauthorized
- function codes, unusual register access, timing deviations,
- and rogue client devices.
- **Configure network tap**: Position the monitoring interface on the SPAN port mirroring the VLAN carrying Modbus TCP traffic between HMI/SCADA servers and PLCs. Verify bidirectional traffic capture with `tcpdump -i eth0 port 502 -c 100 -w modbus_capture.pcap`.
- Transaction Identifier (2 bytes): Matches requests to responses
- Protocol Identifier (2 bytes): Always 0x0000 for Modbus
- Length (2 bytes): Number of following bytes including Unit ID
- Unit Identifier (1 byte): Slave device address (0-247)
- from scapy.all import rdpcap, TCP

## Use Cases
- When deploying Modbus-specific intrusion detection in an OT environment
- When building baseline models for deterministic Modbus polling patterns
- When investigating suspicious Modbus traffic flagged by OT monitoring tools
- When implementing function code allowlisting on industrial firewalls
- When detecting unauthorized Modbus write commands that could manipulate process setpoints
- Monitoring OT/ICS networks for unauthorized Modbus commands targeting PLCs, RTUs, or HMIs
- Detecting reconnaissance activity such as Modbus device enumeration (function code 43, Read Device Identification)
- Identifying unauthorized write operations (function codes 05, 06, 15, 16) to coils and holding registers that could alter physical process parameters
- Baselining normal Modbus communication patterns and alerting on deviations in function code distribution, register access ranges, or timing intervals
- Investigating suspected sabotage or insider threats manipulating SCADA process values through Modbus register writes

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And ASCII Modes. Used For Building Custom Modbus Clients, And Exception Responses., And Exporting Specific Fields For Analysis., And Historian. Used For Testing Detection Rules Against Realistic SCADA Traffic., And Register Data In Captured Packets., And Simulating Master Slave Communication In Test Environments., And Sniffing Modbus Frames. Enables Field Level Access To MBAP Headers, And Values For Real Time Alerting.

## Sources
- detecting-modbus-protocol-anomalies
- monitoring-scada-modbus-traffic-anomalies
