# Passivedns

## Overview
Passivedns is a network analysis tool that appears across ransomware defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Passivedns is best understood as a ransomware-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Passivedns works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- mitre attack
- c2
- beaconing
- network analysis
- proactive detection
- ransomware
- kill switch
- mutex
- detection
- WannaCry
- malware analysis

## Typical Workflow
- 1. **Identify Beaconing Characteristics**: Define what constitutes beaconing (regular intervals, small payload sizes, consistent destinations, jitter patterns).
- 2. **Collect Network Telemetry**: Aggregate proxy logs, DNS queries, and connection metadata for analysis.
- 3. **Apply Frequency Analysis**: Identify connections with regular intervals using statistical methods (standard deviation, coefficient of variation).
- 4. **Filter Known-Good Traffic**: Exclude legitimate periodic traffic (Windows Update, AV updates, heartbeat services, NTP).
- 5. **Analyze Domain/IP Reputation**: Check identified beaconing destinations against threat intel, WHOIS data, and certificate transparency logs.
- 6. **Investigate Endpoint Context**: Correlate beaconing activity with process creation, user context, and file system changes on source endpoints.
- 7. **Confirm and Respond**: Validate C2 activity, block communication, and initiate incident response.
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Ransomware creates a named mutex at startup
- If mutex already exists → another instance is running → exit

## Use Cases
- When proactively hunting for compromised systems in the network
- After threat intel indicates C2 frameworks targeting your industry
- When investigating periodic outbound connections to suspicious domains
- During incident response to identify active C2 channels
- When DNS query logs show unusual patterns to specific domains
- Analyzing a ransomware sample to determine if it contains a kill switch mechanism (mutex, domain, registry)
- Deploying proactive mutex vaccination across endpoints to prevent known ransomware families from executing
- Monitoring DNS for kill switch domain lookups that indicate ransomware attempting to check before encrypting
- During incident response to quickly determine if a ransomware variant can be stopped by activating its kill switch
- Building detection signatures for ransomware mutex creation events using Sysmon or EDR telemetry

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- ANY.RUN, Elastic Security, Flare, Malware Mutex, RITA, Splunk, Suricata, Sysinternals Handle

## Sources
- hunting-for-command-and-control-beaconing
- implementing-ransomware-kill-switch-detection
