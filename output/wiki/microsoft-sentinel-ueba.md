# Microsoft Sentinel Ueba

## Overview
Microsoft Sentinel Ueba is a anomaly detection tool that appears across identity access management workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Microsoft Sentinel Ueba is best understood as a identity-access-management tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Microsoft Sentinel Ueba works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- UEBA
- authentication anomaly
- impossible travel
- brute force
- credential stuffing
- behavioral analytics
- identity access management
- soc
- user behavior
- insider threat
- anomaly detection
- splunk

## Typical Workflow
- from datetime import datetime, timedelta
- from collections import defaultdict
- index=auth sourcetype IN ("o365:management:activity", "vpn_logs", "WinEventLog:Security")
- earliest=-30d latest=-1d
- | stats dc(src_ip) AS unique_ips,
- dc(src_country) AS unique_countries,
- dc(app) AS unique_apps,
- count AS total_logins,
- earliest(_time) AS first_login,
- latest(_time) AS last_login,

## Use Cases
- Security operations needs to identify compromised accounts from authentication log analysis
- Implementing impossible travel detection to flag geographically inconsistent logins
- Detecting brute force, password spraying, and credential stuffing attacks in real time
- Building behavioral baselines for users to identify deviations indicating account compromise
- Correlating authentication anomalies with threat intelligence for lateral movement detection
- Investigating alerts from SIEM or IdP for suspicious sign-in activity
- Relying on single-signal detection (failed logins only) misses successful spray results
- SOC teams need to detect compromised accounts through abnormal authentication patterns
- Insider threat programs require behavioral monitoring beyond rule-based detection
- Impossible travel or geographic anomalies indicate credential compromise

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Exabeam Advanced Analytics, Splunk UBA, Elastic SIEM ML Jobs, Securonix

## Sources
- detecting-anomalous-authentication-patterns
- performing-user-behavior-analytics
