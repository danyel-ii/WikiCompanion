# Enabling

## Overview
Enabling is a network monitoring tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Enabling is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Enabling works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- suricata
- ids
- ips
- network monitoring

## Typical Workflow
- sudo add-apt-repository ppa:oisf/suricata-stable
- sudo apt install -y suricata suricata-update jq
- suricata --build-info | grep -E "Version|AF_PACKET|NFQueue"
- libmagic-dev libnetfilter-queue-dev libhiredis-dev rustc cargo cbindgen

## Use Cases
- Deploying a high-performance IDS/IPS capable of multi-threaded packet processing for 10+ Gbps network links
- Monitoring network traffic with protocol-aware inspection for HTTP, TLS, DNS, SMB, and other protocols
- Generating structured EVE JSON logs for direct SIEM ingestion without custom parsers
- Running in inline (IPS) mode to actively block malicious traffic at network choke points
- Combining signature-based detection with protocol anomaly detection and file extraction
- Enabling all available rules without tuning, overwhelming analysts with false positives
- Forgetting to disable NIC offloading, resulting in incorrect checksums and missed detections

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Custom Rule Sources, And JA3, And Monitoring Rule Performance, Elastic Stack, ET Pro, Evebox, File Extraction, Scirius

## Sources
- configuring-suricata-for-network-monitoring
