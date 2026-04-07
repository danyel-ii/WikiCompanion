# Claroty Xdome

## Overview
Claroty Xdome is a intrusion detection tool that appears across ot ics security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Claroty Xdome is best understood as a ot-ics-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Claroty Xdome works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- scada
- industrial control
- iec62443
- intrusion detection
- threat detection
- ot ics security
- stuxnet
- plc integrity
- apt
- patch management

## Typical Workflow
- Before detecting anomalies, establish what normal SCADA traffic looks like. Industrial protocols are highly deterministic - the same master polls the same slaves at the same intervals reading the same registers.
- Analyzes OT network traffic to establish deterministic baselines for
- Modbus/TCP, DNP3, EtherNet/IP, and S7comm communications.
- from collections import defaultdict
- from datetime import datetime
- from statistics import mean, stdev
- Map detection opportunities across the multi-stage Stuxnet-style attack chain.
- technique: "USB-borne malware targeting air-gapped network"
- mitre_ics: "T0847 - Replication Through Removable Media"
- Define the patch management lifecycle adapted for OT environments where availability and safety take priority over immediate vulnerability remediation.

## Use Cases
- When deploying intrusion detection capabilities in a SCADA environment for the first time
- When investigating suspected cyber attacks against industrial control systems
- When building detection rules for OT-specific attack patterns (Stuxnet, TRITON, Industroyer)
- When integrating OT network monitoring with an enterprise SOC for unified threat visibility
- When responding to alerts from OT security monitoring tools (Dragos, Nozomi, Claroty)
- When implementing advanced threat detection for high-value OT targets (nuclear, chemical, critical infrastructure)
- When building detection for APT-style attacks targeting PLC logic and process manipulation
- When establishing PLC logic integrity monitoring to detect unauthorized modifications
- When investigating suspected process anomalies that may indicate cyber-physical attacks
- When designing defense-in-depth strategies against nation-state level OT threats

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Dragos Platform, Nozomi Networks Guardian, And BACnet, DNP3, Nozomi Guardian, And Anomaly Detection For Industrial Environments, And Continuous Threat Detection Platform, And IIoT

## Sources
- detecting-attacks-on-scada-systems
- detecting-stuxnet-style-attacks
- implementing-patch-management-for-ot-systems
- performing-oil-gas-cybersecurity-assessment
- performing-ot-network-security-assessment
- performing-ot-vulnerability-assessment-with-claroty
