# Port Scanning

## Overview
Port Scanning is a network pentest tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Port Scanning is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Port Scanning works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- network pentest
- Nmap
- Metasploit
- vulnerability exploitation
- infrastructure security
- penetration testing

## Typical Workflow
- Validate the scope by confirming IP ranges with the client. Verify that all IP addresses in scope are owned by the client using ARIN/RIPE WHOIS lookups. Confirm testing windows, escalation procedures, and any sensitivity constraints. Set up the testing environment with a dedicated VM, VPN connection, and logging enabled on all tools. Create a timestamped activity log that records every command executed, every scan launched, and every exploit attempted throughout the engagement.
- **ICMP sweep**: `nmap -sn -PE -PP -PM 10.10.0.0/16 -oA discovery_icmp` to find hosts responding to ping
- **ARP scan** (internal networks): `nmap -sn -PR 10.10.0.0/24 -oA discovery_arp` or `arp-scan -l` for local subnet enumeration
- **TCP SYN discovery**: `nmap -sn -PS21,22,25,80,443,445,3389,8080 10.10.0.0/16 -oA discovery_tcp` to find hosts with ICMP blocked
- **UDP discovery**: `nmap -sn -PU53,161,500 10.10.0.0/16 -oA discovery_udp` for hosts only responding on UDP
- Consolidate live hosts into a target list. Map the network topology by identifying gateways, VLAN boundaries, and trust relationships using traceroute and SNMP community string guessing where authorized.
- **Full TCP scan**: `nmap -sS -p- --min-rate 1000 -T4 -oA full_tcp <target>` to identify all open TCP ports
- **Top UDP ports**: `nmap -sU --top-ports 200 -T4 -oA top_udp <target>` for commonly exploitable UDP services
- **Service version detection**: `nmap -sV -sC -p <open_ports> -oA service_enum <target>` to fingerprint service versions and run default NSE scripts
- **OS fingerprinting**: `nmap -O --osscan-guess -oA os_detection <target>` to identify operating systems

## Use Cases
- Assessing the security posture of internal or external network infrastructure before or after deployment
- Validating firewall rules, network segmentation, and access controls under realistic attack conditions
- Identifying exploitable vulnerabilities in network services, protocols, and configurations
- Meeting compliance requirements for PCI-DSS, HIPAA, SOC 2, or ISO 27001 that mandate periodic penetration testing
- Evaluating the effectiveness of IDS/IPS, SIEM, and SOC detection capabilities against real attack traffic
- Scanning too aggressively during business hours and triggering IDS alerts or service disruptions
- Failing to verify that all target IPs are actually owned by the client before scanning

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And MSSQL Enumeration And Exploitation, And Post Exploitation Tools For Validated Vulnerability Exploitation, And Vulnerability Detection Via The Nmap Scripting Engine, Burp Suite, CrackMapExec, Encoders, Impacket, Kerberos) Used For Relay Attacks And Remote Execution

## Sources
- conducting-network-penetration-test
