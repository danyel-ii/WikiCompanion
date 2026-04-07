# And Ascii Modes Used For Building Custom Modbus Clients

## Overview
And Ascii Modes Used For Building Custom Modbus Clients is a ot monitoring tool that appears across ot security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Ascii Modes Used For Building Custom Modbus Clients is best understood as a ot-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Ascii Modes Used For Building Custom Modbus Clients works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- Modbus TCP
- SCADA
- ICS security
- deep packet inspection
- anomaly detection
- OT monitoring
- ot security

## Typical Workflow
- **Configure network tap**: Position the monitoring interface on the SPAN port mirroring the VLAN carrying Modbus TCP traffic between HMI/SCADA servers and PLCs. Verify bidirectional traffic capture with `tcpdump -i eth0 port 502 -c 100 -w modbus_capture.pcap`.
- Transaction Identifier (2 bytes): Matches requests to responses
- Protocol Identifier (2 bytes): Always 0x0000 for Modbus
- Length (2 bytes): Number of following bytes including Unit ID
- Unit Identifier (1 byte): Slave device address (0-247)
- from scapy.all import rdpcap, TCP
- from scapy.contrib.modbus import ModbusADURequest, ModbusADUResponse
- packets = rdpcap("modbus_capture.pcap")

## Use Cases
- Monitoring OT/ICS networks for unauthorized Modbus commands targeting PLCs, RTUs, or HMIs
- Detecting reconnaissance activity such as Modbus device enumeration (function code 43, Read Device Identification)
- Identifying unauthorized write operations (function codes 05, 06, 15, 16) to coils and holding registers that could alter physical process parameters
- Baselining normal Modbus communication patterns and alerting on deviations in function code distribution, register access ranges, or timing intervals
- Investigating suspected sabotage or insider threats manipulating SCADA process values through Modbus register writes
- Relying solely on IT-side network monitoring (firewall logs, IDS) that does not inspect Modbus application-layer content and would see only a normal TCP connection on port 502
- Setting the baseline period too short (e.g., 4 hours) and missing legitimate but infrequent write operations that occur only during shift changes or maintenance windows

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Exception Responses., And Exporting Specific Fields For Analysis., And Historian. Used For Testing Detection Rules Against Realistic SCADA Traffic., And Register Data In Captured Packets., And Simulating Master Slave Communication In Test Environments., And Sniffing Modbus Frames. Enables Field Level Access To MBAP Headers, And Values For Real Time Alerting., Filtering By Function Code

## Sources
- monitoring-scada-modbus-traffic-anomalies
