# Metasploit Framework

> An extensible Ruby-based platform from Rapid7 for developing, testing, and executing exploits, payloads, and related modules against target systems, with data management and remote APIs for integration into security workflows.

## Overview
Metasploit Framework is the best-known subproject of Metasploit and is maintained by Rapid7. It is an open-source penetration testing and exploit development framework distributed under a 3‑clause BSD‑style license. The framework provides a large, continuously updated corpus of exploit, auxiliary, post-exploitation, payload, encoder, and NOP modules, along with interactive and programmatic interfaces (console, RPC, and web services). It is widely used in authorized security testing and research contexts. Module inventory evolves rapidly through community and vendor contributions; Rapid7 issues ongoing release notes to track new modules and platform changes. Project materials emphasize ethical, authorized use and centralize documentation at docs.metasploit.com.

## What It Is
Metasploit Framework is a modular offensive security platform. It represents techniques as loadable modules, provides payload generation and session management (including Meterpreter), exposes a configurable datastore for module options, and organizes discovered information and artifacts (hosts, services, credentials, loot) within workspaces. It offers local and remote interfaces for both human operators and automated systems. The framework defines six primary module types: exploit, auxiliary, post, payload, encoder, and nop.

## How It Works
- Architecture and modules: Functionality is encapsulated in modules covering exploitation, discovery and enumeration, post-exploitation, payload encoding, and NOP sled generation. Each module declares metadata (such as rank and references) and configurable options via a datastore. Exploit modules resolve compatible payloads based on target characteristics.
- Payloads and sessions: When exploitation succeeds, payloads establish sessions that provide interactive access, commonly as standard shells or Meterpreter. Meterpreter is an in-memory, extensible payload supporting interactive control and dynamic extension loading.
- Data management: Operational data is organized into projects/workspaces containing hosts, services, credentials, loot, and notes. The datastore supports reporting, as well as import and export of structured results.
- Interfaces and automation: The primary user experience is via msfconsole. Automation and integration are exposed through a JSON‑RPC API and service/daemon modes, enabling remote control, module execution, and data retrieval by external tools.
- External scanning integration: Built‑in discovery can be augmented by leveraging Nmap for TCP scanning as part of host and service identification.

## Core Concepts
- Module types: exploit, auxiliary, post, payload, encoder, nop
- Payloads and Meterpreter sessions
- Datastore options and global vs module‑level configuration
- Workspaces/projects and data (hosts, services, credentials, loot)
- Automation and integration via JSON‑RPC and service/daemon modes
- Integration with external scanners (e.g., Nmap) for discovery

## Typical Workflow
- Establish a workspace and assemble host and service context; optionally augment discovery with Nmap through the framework.
- Identify relevant modules by vulnerability reference, service, or platform, and review module metadata and compatible payloads.
- Adjust datastore and payload parameters to reflect scope, targets, and environmental constraints.
- Execute modules and observe outcomes; successful actions may produce interactive sessions (shell or Meterpreter).
- Conduct authorized post‑exploitation to validate impact and collect evidence such as credentials, configurations, and files.
- Consolidate findings in the workspace and generate exports or reports; recurring tasks can be orchestrated via the RPC API.

## Use Cases
- Authorized penetration testing of networked services and systems, including validation of exploitable conditions mapped to disclosed CVEs.
- Security control validation by exercising known offensive techniques to assess IDS/IPS/EDR/SIEM detection and blocking.
- Red‑team emulation of initial access and lateral movement under defined rules of engagement.
- Research and exploit development leveraging the framework’s module and payload APIs.
- Integration into larger testing pipelines via JSON‑RPC for programmatic module execution and results collection.
- Credential lifecycle assessment, including harvesting, reuse testing, and consolidated credential reporting within a workspace.

## Limitations
- Use is intended for lawful, authorized testing; misuse is illegal. Practitioners must obtain explicit permission before testing.
- Exploit reliability is environment- and version-dependent; many modules are specific to certain releases and may fail or be unstable on fully patched systems.
- Modern defenses (EDR/AV, behavioral analytics, application control) can detect or block common payloads and techniques; public payloads like Meterpreter are widely known to defenders.
- Module inventory changes frequently; static counts become outdated quickly, and maintenance levels vary across modules.
- Scanning and exploitation can impact fragile services; production environments require careful scoping and change control.
- Generated payloads and artifacts may be flagged or quarantined; sensitive loot and credentials require secure handling and appropriate export controls.

## Related Tools
- Nmap: Often used alongside Metasploit for host/service discovery; Metasploit can leverage Nmap scans for basic TCP scanning.
- Nessus / Rapid7 InsightVM (Nexpose) / OpenVAS: Vulnerability scanners whose findings can inform Metasploit module selection for exploitation validation.
- CrackMapExec: Adjacency for credential spraying and SMB/WinRM/Lateral Movement tasks that can complement Metasploit post‑exploitation.
- Impacket: Library and toolset for network protocol operations (e.g., SMB/LDAP/Kerberos) often used before/after Metasploit exploitation.
- Armitage: Historical GUI front end for Metasploit that visualizes targets and coordinates collaborative use.
- Cobalt Strike: Commercial red‑team platform with post‑exploitation beacons; often compared as a complementary/alternative tool to Metasploit’s post‑exploitation.

## Evidence Gaps
- Current module counts and CVE coverage shift rapidly; authoritative numbers are only available in up-to-date release notes or the repository.
- Public descriptions of payload evasion (e.g., Meterpreter) are high-level; effectiveness against specific EDR/AV versions and configurations is variable and not assured.
- References sometimes conflate Framework features with historical Pro-only capabilities; careful differentiation is required.

## Sources
- [Metasploit (Wikipedia)](https://en.wikipedia.org/wiki/Metasploit) (Wikipedia)
- [Metasploit Framework – GitHub repository (README)](https://github.com/rapid7/metasploit-framework) (Rapid7 (GitHub))
- [Metasploit Framework overview](https://docs.rapid7.com/metasploit/msf-overview) (Rapid7)
- [Standard API Methods Reference (JSON‑RPC)](https://docs.rapid7.com/metasploit/standard-api-methods-reference) (Rapid7)
- [Running Metasploit Remotely (RPC/daemon usage)](https://docs.rapid7.com/metasploit/running-metasploit-remotely/) (Rapid7)
- [Managing Workspaces](https://docs.rapid7.com/metasploit/managing-workspaces/) (Rapid7)
- [Exporting Project Data / Exporting and Importing Data](https://docs.rapid7.com/metasploit/exporting-project-data) (Rapid7)
- [Quick Start Guide (discovery and Nmap note)](https://docs.rapid7.com/metasploit/) (Rapid7)
- [Manage Meterpreter and Shell Sessions](https://docs.rapid7.com/metasploit/manage-meterpreter-and-shell-sessions/) (Rapid7)
- [Meterpreter ‘getsystem’ (privilege elevation overview)](https://docs.rapid7.com/metasploit/meterpreter-getsystem) (Rapid7)
- [The Modules Page (module statistics and types)](https://docs.rapid7.com/metasploit/the-modules-page/) (Rapid7)
- [Modules (definition of module categories)](https://docs.rapid7.com/metasploit/modules/) (Rapid7)

## Confidence
high
