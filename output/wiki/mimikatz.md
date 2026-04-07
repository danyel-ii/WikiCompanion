# mimikatz

> Open‑source Windows security research tool by Benjamin Delpy (gentilkiwi) best known for extracting credentials from memory and manipulating authentication artifacts (e.g., LSASS contents, Kerberos tickets) and performing directory replication–based credential access (DCSync).

## Overview
Mimikatz is a dual‑use credential access and post‑exploitation tool focused on Windows authentication internals. It provides modules that interact with Local Security Authority (LSA/LSASS), Kerberos, Windows cryptographic stores, and the Vault to read, export, or forge authentication artifacts and to simulate domain controller replication requests (DCSync). The tool is widely referenced in incident response, penetration testing, and adversary tradecraft. It is mapped in MITRE ATT&CK as Software S0002 and underpins several credential access techniques, including OS Credential Dumping: DCSync (T1003.006). Platform hardening such as LSASS Protected Process Light and Credential Guard constrains some behaviors on modern systems, but the tool remains prevalent in threat reporting and defensive detections.

## What It Is
An open‑source codebase maintained on GitHub by Benjamin Delpy (gentilkiwi) comprising modules for credential extraction and manipulation of authentication artifacts. Key modules include sekurlsa for LSASS memory inspection, kerberos for ticket operations, lsadump for registry/AD secrets and DCSync, crypto for keys and certificates, vault for stored secrets, and token for access token operations. It is used to test defenses against credential theft, simulate Active Directory attack techniques, and study Windows authentication mechanisms.

## How It Works
At a systems level, Mimikatz interfaces with Windows authentication subsystems and directory services to surface credential material: (1) LSASS/LSA interaction: with sufficient privileges, the tool inspects the memory of LSASS to enumerate credentials and related secrets (e.g., NTLM hashes, WDigest where present, DPAPI material). LSA Protection (PPL) and Credential Guard restrict or virtualize access, limiting direct dumping on protected hosts. (2) Kerberos manipulation: the kerberos and related modules enumerate, export, and insert Kerberos tickets to support pass‑the‑ticket semantics and can forge ticket‑granting tickets (Golden Tickets) when KRBTGT material is available. (3) DCSync: the lsadump module leverages Active Directory’s Directory Replication Service Remote Protocol (MS‑DRSR), notably IDL_DRSGetNCChanges, to request replication data as though it were a domain controller. Success requires that the calling security principal possess specific replication control access rights on the domain object (DS‑Replication‑Get‑Changes, DS‑Replication‑Get‑Changes‑All, and often DS‑Replication‑Get‑Changes‑In‑Filtered‑Set). Mimikatz can also interact with Windows crypto APIs and key stores to list or export keys and certificates, subject to local protections.

## Core Concepts
- Windows LSA/LSASS credential management and memory inspection
- Kerberos tickets (TGT/TGS), Golden/Silver ticket concepts
- Active Directory replication (MS‑DRSR/DRSUAPI) and required control access rights
- Pass‑the‑Hash and Pass‑the‑Ticket authentication semantics
- DPAPI, CryptoAPI/CNG key storage visibility
- Platform hardening: LSA Protection (PPL), Credential Guard, ASR rules

## Typical Workflow
- Obtain appropriate privileges or contextual access on a Windows host sufficient to interact with LSASS memory or to analyze offline LSASS dumps, within the constraints of LSA Protection and Credential Guard.
- Select modules aligned with objectives: in‑memory credentials and tickets via sekurlsa; ticket operations via kerberos; SAM/Secrets and DCSync via lsadump; keys/certificates via crypto; stored secrets via vault; token operations via token.
- For directory‑level credential access, operate with a principal granted the necessary Active Directory replication control rights and request replication data (DCSync) to retrieve credential material from the domain database.
- Aggregate outputs with digital forensics and telemetry sources (e.g., directory object access events and RPC/DRSR traces) to support detection validation and analysis.

## Use Cases
- Red/purple‑team validation of credential theft detections and controls (e.g., LSASS protection, ASR rules, EDR)
- DFIR artifact triage to assess what credential material a host compromise may have exposed
- Threat hunting and control auditing related to misuse of AD replication rights (DCSync)
- Security research into Windows authentication internals and key/certificate handling
- Purple‑team exercises on Kerberos abuse pathways (pass‑the‑ticket, Golden Ticket) and impact assessment

## Limitations
- Modern Windows protections impede several behaviors: LSASS Protected Process Light (PPL) and Credential Guard restrict memory access and virtualize secrets, reducing available material to dump.
- Execution typically requires elevated privileges; absence of admin/SYSTEM context, code‑integrity policies, or EDR controls will limit effectiveness.
- DCSync requires specific AD replication rights; without these control access rights, a domain controller will deny replication requests.
- Highly detectable in many environments via signatures, behavioral analytics (e.g., RPC DRSUAPI from non‑DC hosts), and security auditing (Event ID 4662 with replication GUIDs).
- Environmental variability: version differences and platform updates influence module reliability; some capabilities depend on legacy or optional configurations (e.g., WDigest, unprotected LSASS).

## Related Tools
- Impacket (secretsdump.py): Performs DCSync and other credential extraction over SMB/RPC without deploying binaries to the domain controller; a common alternative for replication‑based dumping.
- CrackMapExec / NetExec: Post‑exploitation frameworks that orchestrate credential dumping (including DCSync via Impacket) and lateral movement at scale.
- BloodHound: Graph‑based AD analysis that identifies principals with replication rights, informing potential DCSync paths.
- Rubeus: Kerberos‑focused tool for ticket operations that complements Mimikatz’s kerberos module.
- DSInternals: PowerShell module for interacting with AD database and secrets; used in replication/credential extraction scenarios.

## Evidence Gaps
- Release and module status evolve frequently; the official repository should be consulted for current tags and capabilities.
- Behavior on the latest Windows builds varies with LSASS PPL/Credential Guard defaults and EDR policies; field reports are mixed and environment‑specific.

## Sources
- [GitHub - gentilkiwi/mimikatz (README)](https://github.com/gentilkiwi/mimikatz) (GitHub)
- [mimikatz Wiki (modules and history)](https://github.com/gentilkiwi/mimikatz/wiki) (GitHub)
- [MITRE ATT&CK Software S0002: Mimikatz](https://attack.mitre.org/software/S0002) (MITRE)
- [OS Credential Dumping: DCSync (T1003.006)](https://attack.mitre.org/techniques/T1003/006/) (MITRE)
- [[MS‑DRSR] Methods Categorized by Function (IDL_DRSGetNCChanges)](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-drsr/beebc62b-cceb-4705-aafe-14fa53fa19f4) (Microsoft Learn)
- [[MS‑ADTS] DS‑Replication‑Get‑Changes (rightsGuid 1131f6aa‑...)](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-adts/1878718d-ca72-472e-a612-ebbf22514236) (Microsoft Learn)
- [[MS‑ADTS] DS‑Replication‑Get‑Changes‑In‑Filtered‑Set (rightsGuid 89e95b76‑...)](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-adts/a8b179de-bb7f-45e5-8524-3b8ccf5f8758) (Microsoft Learn)
- [[MS‑ADTS] Control Access Rights concordance (includes replication‑related rights)](https://learn.microsoft.com/sr-latn-rs/openspecs/windows_protocols/ms-adts/1522b774-6464-41a3-87a5-1e5633c3fbbb) (Microsoft Learn)
- [Configure additional LSA protection (LSASS PPL)](https://learn.microsoft.com/en-us/windows-server/security/credentials-protection-and-management/configuring-additional-lsa-protection) (Microsoft Learn)
- [Advanced credential protection (Credential Guard overview)](https://learn.microsoft.com/en-us/windows/security/book/identity-protection-advanced-credential-protection) (Microsoft Learn)
- [Detecting and preventing LSASS credential dumping attacks (Windows 11 hardening, PPL by default)](https://www.microsoft.com/en-us/security/blog/2022/10/05/detecting-and-preventing-lsass-credential-dumping-attacks/) (Microsoft Security Blog)
- [Threat Hunter Playbook: AD Object Access via Replication Services (Event 4662 and GUIDs)](https://threathunterplaybook.com/hunts/windows/180815-ADObjectAccessReplication/notebook.html) (Threat Hunter Playbook)

## Confidence
high
