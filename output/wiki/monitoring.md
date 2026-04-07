# Monitoring

## Overview
Monitoring is a network monitoring tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Monitoring is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Monitoring works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- zeek
- network monitoring
- anomaly detection
- threat hunting
- microsegmentation
- guardicore
- akamai
- zero trust
- east west traffic
- network segmentation
- lateral movement

## Typical Workflow
- sudo apt install -y zeek
- sudo vi /opt/zeek/etc/node.cfg
- Install agents to collect process-level network communication data.
- -o gc-agent-installer.sh
- chmod +x gc-agent-installer.sh

## Use Cases
- Deploying passive network security monitoring at key network choke points for continuous visibility
- Generating structured connection, DNS, HTTP, SSL, and file transfer logs for SIEM ingestion and threat hunting
- Writing custom Zeek scripts to detect organization-specific threats, policy violations, or beaconing behavior
- Performing retrospective analysis on network metadata to investigate security incidents
- Complementing IDS solutions with protocol-level metadata analysis that signature-based tools may miss
- Failing to exclude CDN and cloud service provider IP ranges that naturally receive many repeat connections
- Running Zeek without sufficient CPU cores, causing packet drops on high-throughput links
- When implementing east-west traffic controls to prevent lateral movement within data centers
- When needing application-level visibility into network communication patterns before writing segmentation policies
- When segmenting workloads across heterogeneous environments (VMs, containers, bare metal, cloud)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Akamai Guardicore Segmentation, And Incident Investigation, And Managing Zeek Instances Across Single Or Clustered Deployments, And Other Threat Indicators, DNS Tunneling, Filebeat, Guardicore Agents, Guardicore Centra

## Sources
- detecting-network-anomalies-with-zeek
- implementing-microsegmentation-with-guardicore
