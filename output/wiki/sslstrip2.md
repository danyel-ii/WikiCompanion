# Sslstrip2

## Overview
Sslstrip2 is a network security tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sslstrip2 is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sslstrip2 works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- ssl stripping
- https
- hsts
- tls security

## Typical Workflow
- sudo sysctl -w net.ipv4.ip_forward=1
- sudo bettercap -iface eth0 -eval "set arp.spoof.targets 192.168.1.50; arp.spoof on"
- sudo arpspoof -i eth0 -t 192.168.1.50 -r 192.168.1.1 &
- sudo bettercap -iface eth0
- > set arp.spoof.targets 192.168.1.50

## Use Cases
- Testing whether web applications properly enforce HTTPS through HSTS headers and redirect chains
- Validating that HSTS preloading is correctly configured and registered in browser preload lists
- Demonstrating the risk of cleartext HTTP to stakeholders during authorized security assessments
- Assessing whether internal applications and thick clients validate TLS certificates and reject downgrades
- Training SOC teams to detect SSL stripping indicators in network traffic
- Testing with a browser that already has HSTS cached for the target domain and concluding HSTS works, when a first-time visitor might be vulnerable
- Forgetting to test mobile applications which may not respect HSTS headers at all

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Certificate Validation, And Credential Sniffing, Bettercap 2.x, Curl, Hstspreload.org, Mitmproxy, Redirect Chains

## Sources
- performing-ssl-stripping-attack
