# And Risk Based Alerting

## Overview
And Risk Based Alerting is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Risk Based Alerting is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Risk Based Alerting works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- splunk
- alert triage
- siem
- notable events
- correlation search
- incident review
- soc operations

## Typical Workflow
- | search status="new" OR status="unassigned"
- | table _time, rule_name, src, dest, user, urgency, status
- Focus on Critical and High urgency events first. Group related alerts by `src` or `dest` to identify attack chains rather than treating each alert independently.
- index=wineventlog sourcetype="WinEventLog:Security" EventCode=4625
- src_ip="192.168.1.105"

## Use Cases
- SOC Tier 1 analysts need to process the Incident Review queue in Splunk Enterprise Security (ES)
- Notable events require rapid severity classification and initial investigation before escalation
- Alert volume exceeds capacity and analysts need a systematic triage methodology
- Management requests metrics on alert disposition (true positive, false positive, benign)
- **Brute Force Alerts**: Correlate EventCode 4625 (failed logon) with 4624 (successful logon) from same source to determine if attack succeeded
- **Malware Detection**: Cross-reference endpoint AV alert with proxy logs for C2 callback confirmation
- **Data Exfiltration Alert**: Check outbound data volume from DLP and proxy logs against user baseline
- **Privilege Escalation**: Correlate EventCode 4672 (special privileges assigned) with 4720 (account created) from non-admin users
- **Lateral Movement**: Map EventCode 4648 (explicit credential logon) across multiple destinations from single source

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Asset & Identity Framework, Correlation Searches, Splunk Enterprise Security, Splunk SOAR, Threat Intelligence Framework

## Sources
- triaging-security-alerts-in-splunk
