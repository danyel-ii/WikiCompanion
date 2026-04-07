# Responder

> Open-source LLMNR/NBT-NS/mDNS poisoner and rogue authentication servers used to coerce and capture Windows network credentials and facilitate NTLM relay in Active Directory environments.

## Overview
Responder is a widely used assessment tool that monitors broadcast and multicast name-resolution traffic—Link-Local Multicast Name Resolution (LLMNR), NetBIOS Name Service (NBT-NS), and often multicast DNS (mDNS)—on local subnets. It forges responses to redirect clients to an attacker-controlled host and exposes lightweight rogue services such as SMB, HTTP, MSSQL, LDAP, or FTP. This interaction elicits NTLM challenge–response authentication, allowing the capture of Net-NTLM credentials for offline cracking or relay to other services when signing or channel-binding protections are not enforced. Defensive guidance typically recommends disabling LLMNR/NBT-NS, enforcing SMB/LDAP signing, and enabling measures such as Extended Protection for Authentication (EPA).

## What It Is
- A poisoner for Windows name-resolution fallbacks (LLMNR, NBT-NS; commonly also mDNS) that responds to queries for non-existent or mis-typed hosts and directs clients to an attacker-controlled address.
- A suite of lightweight rogue servers that solicit NTLM authentication and log captured challenge–response data.
- A red-team and penetration-testing utility referenced in MITRE ATT&CK T1557.001 (LLMNR/NBT-NS Poisoning and SMB Relay) and cited in defensive advisories as representative of this attack class.

## How It Works
- Name-resolution poisoning: When DNS resolution fails, clients may broadcast or multicast LLMNR/NBT-NS (and sometimes mDNS) queries. Responder forges authoritative replies mapping the queried name to the attacker’s address.
- Rogue service interaction: The tool presents emulated services (for example SMB/HTTP/MSSQL/LDAP/FTP and WPAD) so coerced clients initiate NTLM authentication to the attacker-controlled host.
- Credential capture/relay: Responder records Net-NTLMv1/v2 challenge–response exchanges. These can be cracked offline or relayed to other protocols lacking enforced signing or channel binding, typically using separate relay tooling such as ntlmrelayx.

## Core Concepts
- Adversary-in-the-Middle via local name-resolution poisoning
- NTLM challenge–response capture and relay
- Broadcast/multicast name-resolution protocols (LLMNR, NBT-NS, mDNS)
- Rogue service emulation (SMB/HTTP/etc.)
- Mitigations: disable LLMNR/NBT-NS, enforce SMB/LDAP signing, EPA/channel binding, limit or disable NTLM
- ATT&CK T1557.001 mapping

## Typical Workflow
- Phase 1 – Coercion/Poisoning: Observe or induce LLMNR/NBT-NS/mDNS queries and respond with forged address mappings to redirect clients.
- Phase 2 – Interception: Expose rogue services so redirected clients initiate NTLM authentication; record challenge–response material and contextual metadata.
- Phase 3 – Relay/Use: Optionally relay captured NTLM to services lacking enforced signing or channel binding, or perform offline cracking; assess exposure and detection coverage in controlled conditions.

## Use Cases
- Security assessments of Active Directory environments to identify exposure to LLMNR/NBT-NS poisoning and NTLM relay (ATT&CK T1557.001)
- Purple-team exercises to validate controls such as disabling LLMNR/NBT-NS, enforcing SMB/LDAP signing, and enabling EPA/channel binding
- Threat hunting and detection engineering for broadcast name-resolution poisoning and rogue WPAD/SMB/HTTP servers
- Investigation of authentication anomalies where credentials are used from unexpected hosts due to relay
- Exposure reviews tied to coercion techniques (for example PrinterBug, PetitPotam, DFSCoerce) that precede NTLM relay

## Limitations
- Effectiveness drops when organizations disable LLMNR/NBT-NS and mDNS or implement AD DNS hygiene.
- NTLM relay is blocked where SMB/LDAP signing, TLS channel binding, or EPA are enforced; disabling NTLMv1 reduces cracking value.
- Rogue DHCP/WPAD or aggressive modes can disrupt user experience or network services and are often flagged by IDS/EDR/NDR.
- Modern defensive content specifically detects Responder-like traffic patterns and rogue service fingerprints.
- Does not bypass protocol-level protections such as Kerberos with mutual authentication, SMB encryption, or strict HTTPS with valid certificate pinning.

## Related Tools
- impacket ntlmrelayx: Commonly paired to forward captured NTLM auth to SMB/LDAP/HTTP/MSSQL when signing/channel binding are not enforced.
- Inveigh: PowerShell/.NET alternative for LLMNR/NBT-NS/mDNS spoofing and credential capture on Windows.
- Pretender: Modern LLMNR/NBNS/mDNS spoofing tool; functionally adjacent to Responder.
- mitm6: Abuses IPv6/DHCPv6 to become DNS server and coerce authentication; complementary coercion vector when LLMNR/NBT-NS are disabled.
- PetitPotam (EFSRPC): Coercion technique that can force NTLM authentication; often used before relay; not a poisoner itself.
- PrinterBug/SpoolSample: Coercion of authentication via Spooler service; often used to feed relay workflows.
- CrackMapExec: Operational framework that integrates credential capture/relay workflows in AD testing.
- Detect-Responder (osquery extension): Defensive detector for active Responder or spoofers on the network.
- VindicateTool: Defensive sensor for detecting LLMNR/NBNS/mDNS spoofing including Responder.

## Evidence Gaps
- The primary GitHub repository (lgandx/Responder) was referenced widely, but the main landing page could not be retrieved during this collection; exact current version history and maintainership status as of April 7, 2026 are not confirmed here.
- The precise list of built-in rogue servers and optional modules can vary by release; sources consistently mention SMB/HTTP/MSSQL/LDAP and others, but an authoritative, up-to-date module matrix was not accessible in this crawl.

## Sources
- [MITRE ATT&CK T1557.001: LLMNR/NBT-NS Poisoning and SMB Relay](https://attack.mitre.org/techniques/T1557/001) (MITRE ATT&CK)
- [Introducing Responder 1.0 (original project announcement)](https://www.levelblue.com/blogs/spiderlabs-blog/introducing-responder-1.0) (LevelBlue (formerly Trustwave SpiderLabs))
- [KB5005413: Mitigating NTLM Relay Attacks on AD CS (includes PetitPotam context and mitigations)](https://support.microsoft.com/en-us/topic/kb5005413-mitigating-ntlm-relay-attacks-on-active-directory-certificate-services-ad-cs-3612b773-4043-4aa9-b23d-b87910cd3429) (Microsoft)
- [PREVENT-12: Notes on SMB signing and relay limitations](https://docs.specterops.io/misconfiguration-manager-docs/defense-techniques/PREVENT/PREVENT-12/prevent-12_description) (SpecterOps)
- [Responder-Windows (author’s Windows port repository)](https://github.com/lgandx/Responder-Windows) (GitHub)
- [Detect Responder (osquery extension)](https://github.com/clong/detect-responder) (GitHub)
- [CISA RVA Advisory (references LLMNR/NBT-NS/mDNS poisoning and tooling)](https://www.cisa.gov/sites/default/files/2023-12/aa23-349a-risk-vulnerability-assessment-healthcare-public-health-sector.pdf) (CISA)
- [LLMNR/NBT-NS Poisoning and SMB Relay (context and mentions of Responder)](https://mitre.garnet.ai/mitre/mitre/ta0009/t1557/t1557.001) (Garnet (MITRE mirror))
- [https://notes.cavementech.com/pentesting-quick-reference/active-directory/llmnr-poisoning](https://notes.cavementech.com/pentesting-quick-reference/active-directory/llmnr-poisoning) (notes.cavementech.com)
- [https://www.aha.org/system/files/media/file/2023/12/cybersecurity-advisory-enhancing-cyber-resilience-insights-from-the-cisa-healthcare-and-public-health-sector-risk-and-vulnerability-assessment-12-15-2023.pdf](https://www.aha.org/system/files/media/file/2023/12/cybersecurity-advisory-enhancing-cyber-resilience-insights-from-the-cisa-healthcare-and-public-health-sector-risk-and-vulnerability-assessment-12-15-2023.pdf) (aha.org)
- [https://www.securityscientist.net/blog/llmnr-nbt-ns-poisoning-network-attack/](https://www.securityscientist.net/blog/llmnr-nbt-ns-poisoning-network-attack/) (securityscientist.net)
- [https://github.com/Rushyo/VindicateTool](https://github.com/Rushyo/VindicateTool) (github.com)

## Confidence
medium
