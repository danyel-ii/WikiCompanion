# Nozomi Guardian

## Overview
Nozomi Guardian is a ot ics security tool that appears across ot ics security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Nozomi Guardian is best understood as a ot-ics-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Nozomi Guardian works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- scada
- industrial control
- iec62443
- stuxnet
- plc integrity
- apt
- ot ics security
- oil gas
- pipeline security
- api1164

## Typical Workflow
- Map detection opportunities across the multi-stage Stuxnet-style attack chain.
- technique: "USB-borne malware targeting air-gapped network"
- mitre_ics: "T0847 - Replication Through Removable Media"
- Oil and gas facilities have unique characteristics based on their operational segment that affect the assessment approach.
- name: "Gulf Coast Refinery"
- segment: "Downstream"
- capacity: "250,000 barrels per day"
- regulatory: ["TSA SD-02", "API 1164", "IEC 62443", "NIST CSF"]
- description: "Refinery DCS and SCADA systems"

## Use Cases
- When implementing advanced threat detection for high-value OT targets (nuclear, chemical, critical infrastructure)
- When building detection for APT-style attacks targeting PLC logic and process manipulation
- When establishing PLC logic integrity monitoring to detect unauthorized modifications
- When investigating suspected process anomalies that may indicate cyber-physical attacks
- When designing defense-in-depth strategies against nation-state level OT threats
- When conducting a cybersecurity assessment of a refinery, pipeline, or production facility
- When preparing for TSA Pipeline Security Directive compliance (SD-01, SD-02)
- When assessing cybersecurity posture against API Standard 1164 (Pipeline SCADA Security)
- When evaluating the security of remote wellhead SCADA systems and satellite communications
- When a merger, acquisition, or regulatory audit requires a comprehensive OT security evaluation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Claroty XDome, Dragos Platform, ERYTHRITE), Honeywell Forge Cybersecurity, IEC 60870 5 104), KAMACITE, Modbus, Siemens SINEMA Remote Connect

## Sources
- detecting-stuxnet-style-attacks
- performing-oil-gas-cybersecurity-assessment
