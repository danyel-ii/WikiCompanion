# Flare

## Overview
Flare is a frequency analysis tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Flare is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Flare works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- threat hunting
- beaconing
- c2 detection
- frequency analysis
- network traffic
- RITA
- jitter detection
- mitre t1071
- mitre attack
- c2
- network analysis
- proactive detection

## Typical Workflow
- 1. **Define Beacon Parameters**: Establish detection thresholds -- coefficient of variation (CV) below 0.20 indicates strong periodicity, minimum 50 connections over 24 hours, average interval between 30 seconds and 24 hours.
- 2. **Collect Network Telemetry**: Aggregate proxy logs, DNS queries, firewall connection logs, and Zeek metadata into the analysis platform.
- 3. **Calculate Connection Intervals**: For each source-destination pair, compute the time delta between consecutive connections and derive mean interval, standard deviation, and CV.
- 4. **Apply Jitter Analysis**: Sophisticated C2 frameworks like Cobalt Strike add jitter (randomness) to beacon intervals. The Sunburst backdoor beaconed every 15 minutes plus/minus 90 seconds. Analyze jitter patterns to detect even randomized beaconing.
- 5. **Filter Legitimate Periodic Traffic**: Exclude known-good beaconing sources including Windows Update, antivirus definition updates, NTP synchronization, SaaS heartbeat services, and CDN health checks.
- 6. **Analyze Data Size Consistency**: C2 heartbeat packets typically have consistent payload sizes. Calculate the CV of bytes transferred per connection -- low variance suggests automated communication.
- 7. **Enrich with Threat Intelligence**: Check identified beaconing destinations against VirusTotal, WHOIS registration data (flag domains under 30 days old), certificate transparency logs, and passive DNS history.
- 8. **Correlate with Endpoint Telemetry**: Map beaconing source IPs to endpoint hostnames via DHCP logs, then correlate with process creation events (Sysmon Event ID 1, 3) to identify the responsible process.
- 9. **Score and Prioritize**: Assign risk scores based on CV value, domain age, TI matches, data size consistency, and suspicious port usage. Escalate high-confidence findings.
- 1. **Identify Beaconing Characteristics**: Define what constitutes beaconing (regular intervals, small payload sizes, consistent destinations, jitter patterns).

## Use Cases
- When proactively searching for compromised endpoints calling back to C2 infrastructure
- After threat intelligence reports indicate active C2 frameworks targeting your sector
- When network logs show periodic outbound connections to unfamiliar destinations
- During purple team exercises validating C2 detection capabilities
- When investigating a potential breach and need to identify active C2 channels
- When proactively hunting for compromised systems in the network
- After threat intel indicates C2 frameworks targeting your industry
- When investigating periodic outbound connections to suspicious domains
- During incident response to identify active C2 channels
- When DNS query logs show unusual patterns to specific domains

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Elastic Security, RITA, Splunk, Suricata, VirusTotal, Zeek, AC Hunter, PassiveDNS

## Sources
- hunting-for-beaconing-with-frequency-analysis
- hunting-for-command-and-control-beaconing
