# Anomaly Detection

## Overview
Anomaly Detection is a intrusion detection tool that appears across ot ics security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Anomaly Detection is best understood as a ot-ics-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Anomaly Detection works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- scada
- industrial control
- iec62443
- intrusion detection
- threat detection
- ot ics security
- ransomware
- backup
- incident response
- defense

## Typical Workflow
- Before detecting anomalies, establish what normal SCADA traffic looks like. Industrial protocols are highly deterministic - the same master polls the same slaves at the same intervals reading the same registers.
- Analyzes OT network traffic to establish deterministic baselines for
- Modbus/TCP, DNP3, EtherNet/IP, and S7comm communications.
- from collections import defaultdict
- from datetime import datetime
- from statistics import mean, stdev
- | Tier | Examples | RPO | RTO | Backup Frequency |
- |------|----------|-----|-----|------------------|
- | Tier 1 (Critical) | Domain controllers, ERP, databases | 1 hour | 4 hours | Hourly incremental, daily full |
- | Tier 2 (Important) | File servers, email, web apps | 4 hours | 12 hours | Every 4 hours incremental, daily full |

## Use Cases
- When deploying intrusion detection capabilities in a SCADA environment for the first time
- When investigating suspected cyber attacks against industrial control systems
- When building detection rules for OT-specific attack patterns (Stuxnet, TRITON, Industroyer)
- When integrating OT network monitoring with an enterprise SOC for unified threat visibility
- When responding to alerts from OT security monitoring tools (Dragos, Nozomi, Claroty)
- Designing backup architecture that withstands ransomware encryption and deletion attempts
- Migrating from traditional backup to ransomware-resilient backup with immutable storage
- Establishing RPO/RTO targets for critical systems and validating them through restore testing
- Isolating backup credentials and infrastructure from the production Active Directory domain
- Meeting cyber insurance requirements for backup resilience and tested recovery capabilities

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Air Gapped Recovery, And Automated Recovery Orchestration, And BACnet, And Immutable Backup Support, And Instant Mass Restore, And Vulnerability Assessment, Anti Ransomware Detection, AWS S3 Object Lock

## Sources
- detecting-attacks-on-scada-systems
- implementing-ransomware-backup-strategy
