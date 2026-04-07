# Impacket

> Open-source Python library and example tools that implement and manipulate network protocols (notably SMB, MSRPC, Kerberos, NTLM, LDAP, MSSQL) to enable low-level packet crafting, protocol clients, and security testing workflows across Windows-centric enterprise networks. ([github.com](https://github.com/fortra/impacket))

## Overview
Impacket is a Python-based collection of protocol implementations and reference utilities designed for research, education, and security assessment of Windows-centric enterprise networks. It offers object-oriented access to construct, parse, and sequence messages for protocols including SMB (v1–v3), DCE/RPC over multiple transports, NTLM and Kerberos authentication, LDAP, and TDS (MSSQL). Beyond the library layer, a suite of example tools demonstrates end-to-end interactions such as remote service execution, Kerberos ticket operations, credential access, network sniffing, and authentication relay attacks. Originally developed by SecureAuth and now maintained by Fortra’s Core Security, the current stable release line is v0.13.0 (released October 22, 2025).

## What It Is
A set of Python classes and reference clients that implement portions or full clients of common enterprise protocols—SMB, MSRPC, NTLM, Kerberos, LDAP, and TDS—together with demonstrative tools that exercise these stacks. Its purpose is to facilitate studied exploration of protocol behavior, authentication flows, and security properties rather than to serve as a hardened production component.

## How It Works
- Library layer: Impacket exposes packet structures, state machines, and client logic for targeted protocols. Practitioners can programmatically compose packets from primitives or parse raw network data into typed objects, then orchestrate multi-step exchanges such as NTLM or Kerberos authentication followed by DCE/RPC method invocation over SMB or other transports.
- Example tools: Built atop the library, the examples sequence realistic workflows across Windows management and identity surfaces. They illustrate remote execution via WMI and service control over SMB, credential access via RPC/registry/NTDS paths, Kerberos ticket requests and manipulations, and NTLM authentication relays that enable adversary-in-the-middle scenarios within ecosystems using NTLM/LLMNR/NBT-NS.
- Platform scope: Implemented in Python 3.x and runnable on Linux, macOS, and Windows, enabling cross-platform research against Windows network services and Active Directory.
Inputs typically include target endpoints (SMB shares, RPC endpoints, LDAP servers), authentication material (passwords, NTLM hashes, Kerberos tickets/keys), and protocol parameters (dialects, transports, interface UUIDs, SPNs). Outputs consist of constructed/parsed protocol sessions, management-channel responses, collected authentication artifacts in credential-access workflows, and telemetry suitable for defensive analysis (e.g., authentication attempts, RPC/service-creation events).

## Core Concepts
- Low-level protocol manipulation and client implementations for SMB, MSRPC, Kerberos, NTLM, LDAP, and TDS. ([github.com](https://github.com/fortra/impacket))
- Authentication relay and adversary-in-the-middle against NTLM/LLMNR/NBT-NS ecosystems. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Remote management execution via WMI/SMB service mechanisms analogous to PsExec. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Credential access via RPC/registry/domain database interfaces (e.g., SAM, LSA, NTDS). ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Research/education focus—not intended as a production component. ([github.com](https://github.com/fortra/impacket))

## Typical Workflow
- Plan: Define assessment goals, targets, and legal authorization; determine which protocol surfaces (SMB, RPC, AD/LDAP, Kerberos) are in scope for validation. ([github.com](https://github.com/fortra/impacket))
- Model interactions: Use Impacket’s protocol clients to emulate legitimate authentication/management sequences (e.g., Kerberos or NTLM auth followed by MSRPC operations) to validate controls and logging. ([github.com](https://github.com/fortra/impacket))
- Exercise attack paths (authorized testing): Demonstrate risks such as NTLM relay, remote service execution, or credential exposure to inform mitigations and detections mapped to MITRE ATT&CK. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Analyze and report: Correlate host/network telemetry (auth logs, service creation, RPC calls) with expected ATT&CK techniques to assess monitoring efficacy and control gaps. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))

## Use Cases
- Red team and penetration testing of Windows enterprise networks, including remote execution over WMI/SMB and AD-related protocol testing. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Identity and authentication control validation (NTLM/Kerberos), including testing for relay exposure and service hardening. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Credential access risk assessment by exercising domain database and local secrets retrieval paths for defensive tuning. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Threat emulation and purple teaming mapped to ATT&CK techniques like Adversary-in-the-Middle (T1557.001), Windows Management Instrumentation (T1047), OS Credential Dumping (T1003.*). ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Incident response threat hunting and detections development informed by prior advisories noting threat-actor use of Impacket (e.g., AA22-277A). ([cisa.gov](https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-277a?utm_source=openai))

## Limitations
- Intended for research and educational purposes; repository explicitly discourages production use without secure SDLC hardening. ([github.com](https://github.com/fortra/impacket))
- Ethical/legal constraints: capabilities mirror adversary techniques (e.g., relay, credential access) and must only be used with explicit authorization. ([github.com](https://github.com/fortra/impacket))
- Python-only implementation may introduce performance and platform dependency considerations compared to native tooling. ([github.com](https://github.com/fortra/impacket))
- Coverage depth varies by protocol/interface; many MSRPC interfaces are partial implementations. ([github.com](https://github.com/fortra/impacket))

## Related Tools
- PsExec (and analogs): Impacket includes modules that emulate PsExec-style remote service execution workflows. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- Mimikatz: Frequently paired in credential access narratives; ATT&CK notes credential dumping capabilities overlapping with Impacket workflows. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))
- NTLM relay tooling (e.g., ntlmrelayx): Impacket provides its own relay modules used in Adversary-in-the-Middle scenarios. ([attack.mitre.org](https://attack.mitre.org/software/S0357/))

## Evidence Gaps
- Public documentation lists example capabilities but does not centrally catalog every example tool’s current behavior and options; behavior may change across releases.
- Some widely referenced community practices (e.g., pairing with specific third-party tools like BloodHound or Responder) are common in practitioner workflows but are not formally documented by project maintainers—caution in asserting tight integrations without source verification.

## Sources
- [fortra/impacket – GitHub repository and README](https://github.com/fortra/impacket) (Fortra Core Security)
- [MITRE ATT&CK Software S0357 – Impacket](https://attack.mitre.org/software/S0357/) (MITRE)
- [CISA AA22-277A – Impacket and Exfiltration Tool Used to Steal Sensitive Information from Defense Industrial Base Organization (PDF mirror)](https://media.defense.gov/2022/Oct/04/2003090705/-1/-1/0/CSA_IMPACKET_AND_EXFIL_TOOL_STEAL_SENSITIVE_INFO_FROM_DEFENSE_INDUSTRIAL_BASE.PDF) (CISA/NSA/FBI)
- [https://www.cisa.gov/news-events/alerts/2023/12/07/cisa-and-international-partners-release-advisory-russia-based-threat-actor-group-star-blizzard](https://www.cisa.gov/news-events/alerts/2023/12/07/cisa-and-international-partners-release-advisory-russia-based-threat-actor-group-star-blizzard) (cisa.gov)
- [https://en.wikipedia.org/wiki/ATT%26CK](https://en.wikipedia.org/wiki/ATT%26CK) (en.wikipedia.org)
- [https://www.reddit.com/r/blueteamsec/comments/1im2585](https://www.reddit.com/r/blueteamsec/comments/1im2585) (reddit.com)
- [https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-277a](https://www.cisa.gov/news-events/cybersecurity-advisories/aa22-277a) (cisa.gov)
- [https://deepwiki.com/fortra/impacket/3.1-smb-protocol-implementation](https://deepwiki.com/fortra/impacket/3.1-smb-protocol-implementation) (deepwiki.com)
- [https://de.wikipedia.org/wiki/ATT%26CK](https://de.wikipedia.org/wiki/ATT%26CK) (de.wikipedia.org)
- [https://fr.wikipedia.org/wiki/ATT%26CK](https://fr.wikipedia.org/wiki/ATT%26CK) (fr.wikipedia.org)
- [https://readmex.com/en-US/fortra/impacket/page-46e076549-5f41-4b4e-9516-21fca55be908](https://readmex.com/en-US/fortra/impacket/page-46e076549-5f41-4b4e-9516-21fca55be908) (readmex.com)
- [https://pt.wikipedia.org/wiki/ATT%26CK](https://pt.wikipedia.org/wiki/ATT%26CK) (pt.wikipedia.org)

## Confidence
high
