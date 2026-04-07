# Offense Management

## Overview
Offense Management is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Offense Management is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Offense Management works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- qradar
- siem
- aql
- correlation
- offense management
- ibm
- soc operations

## Typical Workflow
- SELECT DATEFORMAT(startTime, 'yyyy-MM-dd HH:mm:ss') AS event_time,
- sourceIP, destinationIP, username,
- LOGSOURCENAME(logSourceId) AS log_source,
- QIDNAME(qid) AS event_name,
- WHERE INOFFENSE(12345)
- ORDER BY startTime ASC

## Use Cases
- SOC analysts need to investigate QRadar offenses and correlate events across multiple log sources
- Detection engineers build custom correlation rules to identify multi-stage attacks
- Alert tuning is required to reduce false positive offenses and improve signal quality
- The team migrates from basic event monitoring to behavior-based correlation
- **Brute Force to Compromise**: Correlate failed auth events with subsequent successful login from same source
- **Lateral Movement Chain**: Track authentication events across multiple internal hosts from a single source
- **C2 Beaconing**: Correlate periodic DNS queries with low-entropy payloads to unusual domains
- **Privilege Escalation**: Correlate user account changes (group additions) with prior suspicious authentication
- **Data Exfiltration**: Correlate large outbound flow volumes with prior internal reconnaissance activity

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And AQL Query Engine, And Rule Deployment, IBM QRadar SIEM, Offense Operations, QRadar API, QRadar Assistant, QRadar Pulse, QRadar Use Case Manager

## Sources
- correlating-security-events-in-qradar
