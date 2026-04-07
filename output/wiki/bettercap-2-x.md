# Bettercap 2 X

## Overview
Bettercap 2 X is a mitmproxy tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Bettercap 2 X is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Bettercap 2 X works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- mitm
- bettercap
- ettercap
- mitmproxy
- ssl stripping
- https
- hsts
- tls security

## Typical Workflow
- sudo sysctl -w net.ipv4.ip_forward=1
- sudo sysctl -w net.ipv6.conf.all.forwarding=1
- sudo sysctl -w net.ipv4.conf.all.send_redirects=0
- openssl genrsa -out mitm-ca.key 4096
- -subj "/CN=MITM Test CA/O=Security Assessment/C=US"
- sudo bettercap -iface eth0 -eval "net.probe on; sleep 10; net.show; quit"
- sudo bettercap -iface eth0 -eval "set arp.spoof.targets 192.168.1.50; arp.spoof on"
- sudo arpspoof -i eth0 -t 192.168.1.50 -r 192.168.1.1 &
- sudo bettercap -iface eth0
- > set arp.spoof.targets 192.168.1.50

## Use Cases
- Testing whether applications properly validate TLS certificates and enforce encrypted communications
- Demonstrating the risk of cleartext protocols (HTTP, FTP, Telnet, SMTP) to organization stakeholders
- Validating that HSTS, certificate pinning, and other anti-MITM controls are correctly implemented
- Assessing network detection capabilities for ARP spoofing, DHCP spoofing, and DNS spoofing attacks
- Training incident response teams to identify and respond to MITM attack indicators
- Forgetting to enable IP forwarding, causing a denial of service instead of transparent interception
- Testing SSL stripping on an application with HSTS preloaded in the browser and concluding HSTS works, when a fresh browser instance might be vulnerable
- Testing whether web applications properly enforce HTTPS through HSTS headers and redirect chains
- Validating that HSTS preloading is correctly configured and registered in browser preload lists
- Demonstrating the risk of cleartext HTTP to stakeholders during authorized security assessments

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Mitmproxy, And Certificate Validation, And Credential Sniffing, And Credential Sniffing With A Modular Architecture, And Plugin Based Traffic Manipulation, Curl, DNS Spoofing, Ettercap

## Sources
- conducting-man-in-the-middle-attack-simulation
- performing-ssl-stripping-attack
