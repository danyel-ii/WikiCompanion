# CrackMapExec (CME)

> Open-source post-exploitation and lateral movement framework for automating credential validation, enumeration, and command execution across Windows/Active Directory networks over protocols like SMB, WinRM/WMI, MSSQL, and LDAP.

## Overview
CrackMapExec (CME) is an offensive security framework oriented toward post-exploitation and internal network assessment in Windows and Active Directory environments. It consolidates enterprise-scale actions that are otherwise fragmented across protocol-specific tools: credential validation and reuse, host and domain enumeration, share and service discovery, and remote command execution. CME integrates protocol backends with a plug-in module system to collect artifacts and orchestrate post-exploitation activities while presenting consolidated results across many hosts and credential sets. Originally created by Marcello (@byt3bl33d3r) and subsequently maintained by community contributors, active stewardship and feature development shifted in 2023–2024 to the community-driven successor NetExec (nxc). CME remains widely recognized in documentation and practice, while NetExec receives ongoing updates.

## What It Is
CME is a post-exploitation and lateral movement framework for Windows/AD networks that provides a unified interface to authenticate over multiple enterprise protocols and conduct credential-based actions at scale. It is used in red-team and internal penetration tests, in purple-team labs for validating detections, and by defenders studying recognizable execution patterns for detection engineering.

## How It Works
CME implements protocol-specific backends that encapsulate common Windows/AD service interactions. Over SMB, it performs authentication, service interaction, and remote execution workflows. WinRM and WMI paths enable remote command execution where policy and permissions permit. MSSQL support can execute queries and, when misconfigurations allow, trigger command execution mechanisms such as xp_cmdshell. LDAP backends drive domain reconnaissance, including enumeration of users, groups, SPNs, and other directory attributes relevant to privilege analysis, as well as Kerberoasting and ASREPRoasting tasks where permitted. A module system extends functionality to collect and process artifacts such as network shares, Group Policy Preferences secrets, LAPS, DPAPI and LSA materials, and BloodHound-compatible data; exact availability and behavior vary by version. Historically, CME has relied on Windows/AD protocol operations provided by libraries in the Impacket ecosystem, enabling traffic patterns that resemble normal domain activity. The framework is designed to operate across large host sets and multiple credential types (passwords, hashes, or tickets), aggregating authentication outcomes, access levels, command outputs, and collected data into consumable results that guide subsequent assessment or detection work.

## Core Concepts
- Enterprise‑scale credential validation and spraying
- Lateral movement via SMB, WinRM, WMI, and MSSQL
- Active Directory reconnaissance via LDAP
- Module-based post‑exploitation (e.g., share spidering, GPP secrets, LAPS/DPAPI)
- Kerberoasting/ASREPRoasting for service account tickets where permitted
- Integration with Impacket-style protocol operations
- Data export/collection for tools like BloodHound
- Operational security considerations (noise, lockouts, detections)

## Typical Workflow
- Enumerate reachable Windows/AD hosts and identify accessible services (SMB/WinRM/MSSQL/LDAP).
- Validate available credentials or tickets across the environment to map where access exists and at what privilege levels.
- Use LDAP-backed enumeration to understand users, groups, SPNs, policies, and potentially roastable accounts.
- Leverage protocol backends for remote command execution or data collection on systems where access is granted.
- Run modules to collect domain/host artifacts (e.g., shares, LAPS data, BloodHound ingestion files) to support path analysis and privilege escalation hypotheses.
- Aggregate results to guide targeted follow-on testing and to inform defensive detections and compensating controls.

## Use Cases
- Internal AD penetration testing and red-team operations to assess credential hygiene, segmentation, and lateral movement resistance.
- Purple-team exercises to validate SIEM/EDR detections for credential spraying, remote execution, and AD enumeration patterns.
- Blue-team lab replication of common adversary tradecraft for rule tuning and alert triage playbooks.
- Post-hardening validation to confirm that mitigations (e.g., LAPS scoping, SMB signing, WinRM restrictions) reduce feasible attack paths.

## Limitations
- Changes in project stewardship: active community maintenance and new features are concentrated in NetExec (nxc) as CME’s successor; some CME documentation and modules may be outdated relative to NetExec.
- High operational visibility if misused: credential spraying and remote execution can trigger lockouts and detections; improper rate/targeting can disrupt services.
- Credential and permission dependency: meaningful actions require valid credentials and appropriate network reachability; constrained environments limit effectiveness.
- Version variance: module availability and behavior differ across releases; third-party environment or Python dependency issues may affect stability.
- Legal/authorization constraints: usage must be explicitly authorized; activity can resemble real intrusion behavior and may violate policy without clear scope.

## Related Tools
- NetExec (nxc): Community-driven successor/continuation of CrackMapExec with ongoing updates and new modules.
- Impacket: Underlying Python library historically leveraged for SMB/LDAP and other protocol operations.
- BloodHound: Downstream consumer of AD data collected by modules; CME historically included collectors compatible with BloodHound.
- Mimikatz: Complementary credential extraction tool often used alongside CME outputs to pursue privilege escalation.
- Metasploit Framework: Adjacent exploitation framework; some overlapping capabilities but different architecture and module ecosystem.
- Evil‑WinRM: Protocol-specific tool for PowerShell remoting; overlaps with CME/NetExec WinRM execution paths.

## Evidence Gaps
- The original CME wiki and some community posts are dated; precise module inventories and behaviors vary by version and are not comprehensively documented in a single authoritative, current source.
- Public statements indicate a stewardship shift to NetExec, but not all official CME pages explicitly mark deprecation; some organizations still reference Porchetta‑Industries/CrackMapExec or byt3bl33d3r’s repo, causing version/status ambiguity.

## Sources
- [CrackMapExec releases (feature notes incl. LDAP, Kerberoast/ASREPRoast, modules)](https://github.com/byt3bl33d3r/CrackMapExec/releases) (GitHub)
- [NetExec v1.0.0 release (NetExec as the continuation of CrackMapExec)](https://www.netexec.wiki/news/v1.0.0-release) (NetExec (GitBook))
- [NetExec repository (project history and maintainers; formerly CrackMapExec)](https://github.com/Pennyw0rth/NetExec) (GitHub)
- [HackTool - CrackMapExec execution patterns (Sigma rule, blue‑team detection context)](https://detection.fyi/sigmahq/sigma/windows/process_creation/proc_creation_win_hktl_crackmapexec_execution_patterns/) (Detection.FYI / SigmaHQ)
- [Top Penetration Testing Tools (mentions CME usage and capabilities)](https://www.netspi.com/blog/executive-blog/penetration-testing-as-a-service/top-penetration-testing-tools/) (NetSPI)
- [A Decade of AD Attacks (notes CME purpose and Impacket reliance)](https://troopers.de/downloads/troopers24/TR24_A_Decade_of_Active_Directory_Attacks_VXS8WY.pdf) (TROOPERS / Trimarc Security (Sean Metcalf))
- [CME SMB command reference (historic protocol usage example)](https://github.com/byt3bl33d3r/CrackMapExec/wiki/SMB-Command-Reference) (GitHub Wiki)
- [LeHack 2023 CME workshop write‑up (examples of modules like gpp_password, spider_plus, BloodHound collector, LAPS/DPAPI)](https://www.rayanle.cat/write-up-workshop-cme-lehack-2023/) (rayanle.cat blog)
- [https://www.isec.ne.jp/wp-content/uploads/2017/11/77CrackMapExec.pdf](https://www.isec.ne.jp/wp-content/uploads/2017/11/77CrackMapExec.pdf) (isec.ne.jp)
- [https://gnarizard.github.io/cyberjutsu/cheatsheets/Pentest-Guide/](https://gnarizard.github.io/cyberjutsu/cheatsheets/Pentest-Guide/) (gnarizard.github.io)
- [https://www.reddit.com/r/hackthebox/comments/1oxyhkz](https://www.reddit.com/r/hackthebox/comments/1oxyhkz) (reddit.com)
- [https://github.com/byt3bl33d3r/CrackMapExec/discussions/801](https://github.com/byt3bl33d3r/CrackMapExec/discussions/801) (github.com)

## Confidence
medium
