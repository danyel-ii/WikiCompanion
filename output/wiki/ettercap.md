# Ettercap

## Overview
Ettercap is a mitmproxy tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Ettercap is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Ettercap works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network security
- mitm
- bettercap
- ettercap
- mitmproxy
- arp spoofing
- layer2 attack

## Typical Workflow
- sudo sysctl -w net.ipv4.ip_forward=1
- sudo sysctl -w net.ipv6.conf.all.forwarding=1
- sudo sysctl -w net.ipv4.conf.all.send_redirects=0
- openssl genrsa -out mitm-ca.key 4096
- -subj "/CN=MITM Test CA/O=Security Assessment/C=US"
- sudo bettercap -iface eth0 -eval "net.probe on; sleep 10; net.show; quit"
- nmap -sn -PR 192.168.1.0/24 -oG arp_discovery.txt
- ip route show default

## Use Cases
- Testing whether applications properly validate TLS certificates and enforce encrypted communications
- Demonstrating the risk of cleartext protocols (HTTP, FTP, Telnet, SMTP) to organization stakeholders
- Validating that HSTS, certificate pinning, and other anti-MITM controls are correctly implemented
- Assessing network detection capabilities for ARP spoofing, DHCP spoofing, and DNS spoofing attacks
- Training incident response teams to identify and respond to MITM attack indicators
- Forgetting to enable IP forwarding, causing a denial of service instead of transparent interception
- Testing SSL stripping on an application with HSTS preloaded in the browser and concluding HSTS works, when a fresh browser instance might be vulnerable
- Testing whether network switches and infrastructure properly implement Dynamic ARP Inspection (DAI)
- Demonstrating man-in-the-middle attack risks to stakeholders during authorized security assessments
- Validating that network monitoring tools (IDS/IPS, SIEM) detect ARP cache poisoning attempts

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- DNS Spoofing, Wireshark, And Credential Capture, And Credential Sniffing With A Modular Architecture, And Plugin Based Traffic Manipulation, Arp Scan, Arpspoof, Bettercap 2.x

## Sources
- conducting-man-in-the-middle-attack-simulation
- performing-arp-spoofing-attack-simulation
