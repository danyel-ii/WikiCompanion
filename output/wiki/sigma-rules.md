# Sigma Rules

## Overview
Sigma Rules is a hunting framework tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sigma Rules is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sigma Rules works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- methodology
- hypothesis
- threat intelligence
- hunting framework
- proactive detection
- mitre attack
- email forwarding
- persistence
- bec
- t1114
- endpoint

## Typical Workflow
- 1. **Formulate Hypothesis**: Define a testable hypothesis based on threat intelligence or ATT&CK gap analysis.
- 2. **Identify Data Sources**: Determine which logs and telemetry are needed to validate or refute the hypothesis.
- 3. **Execute Queries**: Run detection queries against SIEM and EDR platforms to collect relevant events.
- 4. **Analyze Results**: Examine query results for anomalies, correlating across multiple data sources.
- 5. **Validate Findings**: Distinguish true positives from false positives through contextual analysis.
- 6. **Correlate Activity**: Link findings to broader attack chains and threat actor TTPs.
- 7. **Document and Report**: Record findings, update detection rules, and recommend response actions.
- CommandLine contains: "wevtutil cl" OR "wevtutil clear-log"
- Source: Microsoft-Windows-Eventlog
- 2. **Identify Target LOLBins**: Select specific binaries from the LOLBAS Project database to hunt for, prioritizing those matching current threat landscape (certutil, mshta, rundll32, regsvr32, msiexec, wmic, cmstp, bitsadmin).

## Use Cases
- When proactively hunting for indicators of building threat hunt hypothesis framework in the environment
- After threat intelligence indicates active campaigns using these techniques
- During incident response to scope compromise related to these techniques
- When EDR or SIEM alerts trigger on related indicators
- During periodic security assessments and purple team exercises
- When proactively hunting for indicators of detecting email forwarding rules attack in the environment
- Hunting for adversary defense evasion techniques (MITRE ATT&CK TA0005) in endpoint telemetry
- Building detection rules for common evasion methods (process injection, timestomping, log clearing)
- Investigating incidents where adversaries disabled or bypassed security tools
- Analyzing endpoint logs for indicators of living-off-the-land binary (LOLBin) abuse

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- CrowdStrike Falcon, Elastic Security, Microsoft Defender For Endpoint, Sysmon, Velociraptor, Splunk Enterprise, LOLBAS Project, Splunk

## Sources
- building-threat-hunt-hypothesis-framework
- detecting-email-forwarding-rules-attack
- detecting-evasion-techniques-in-endpoint-logs
- detecting-insider-threat-behaviors
- detecting-kerberoasting-attacks
- detecting-mimikatz-execution-patterns
- detecting-pass-the-hash-attacks
- detecting-privilege-escalation-attempts
- detecting-service-account-abuse
- detecting-suspicious-powershell-execution
- hunting-for-living-off-the-cloud-techniques
- hunting-for-living-off-the-land-binaries
- hunting-for-lolbins-execution-in-endpoint-logs
- hunting-for-registry-persistence-mechanisms
- hunting-for-scheduled-task-persistence
- hunting-for-shadow-copy-deletion
- hunting-for-spearphishing-indicators
- hunting-for-supply-chain-compromise
- hunting-for-unusual-network-connections
- hunting-for-webshell-activity
