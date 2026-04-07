# Nozomi Networks Guardian

## Overview
Nozomi Networks Guardian is a anomaly detection tool that appears across ot ics security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Nozomi Networks Guardian is best understood as a ot-ics-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Nozomi Networks Guardian works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- scada
- industrial control
- iec62443
- anomaly detection
- machine learning
- ot ics security
- intrusion detection
- threat detection
- network assessment
- vulnerability assessment

## Typical Workflow
- Capture and model the deterministic behavior of ICS communications across multiple dimensions: timing, protocol behavior, and network topology.
- Builds multi-dimensional baselines from OT network traffic and
- detects anomalies using statistical and machine learning methods.
- Designed for deterministic SCADA communication patterns.
- Before detecting anomalies, establish what normal SCADA traffic looks like. Industrial protocols are highly deterministic - the same master polls the same slaves at the same intervals reading the same registers.
- Analyzes OT network traffic to establish deterministic baselines for
- Modbus/TCP, DNP3, EtherNet/IP, and S7comm communications.
- from collections import defaultdict
- from datetime import datetime
- from statistics import mean, stdev

## Use Cases
- When deploying continuous monitoring for OT environments that lack intrusion detection
- When building behavior-based detection to complement signature-based IDS in OT networks
- When establishing baselines for deterministic SCADA communications to detect deviations
- When integrating machine learning anomaly detection with OT security monitoring platforms
- When investigating alerts from Nozomi Guardian or Dragos Platform that require deeper analysis
- When deploying intrusion detection capabilities in a SCADA environment for the first time
- When investigating suspected cyber attacks against industrial control systems
- When building detection rules for OT-specific attack patterns (Stuxnet, TRITON, Industroyer)
- When integrating OT network monitoring with an enterprise SOC for unified threat visibility
- When responding to alerts from OT security monitoring tools (Dragos, Nozomi, Claroty)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Dragos Platform, Claroty XDome, DNP3, And BACnet, And Anomaly Detection For Industrial Environments, And BACnet Protocol Analyzers For Baseline Building, And Continuous Threat Detection Platform, And IIoT

## Sources
- detecting-anomalies-in-industrial-control-systems
- detecting-attacks-on-scada-systems
- performing-ot-network-security-assessment
- performing-ot-vulnerability-assessment-with-claroty
