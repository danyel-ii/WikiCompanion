# enum4linux-ng

> A next-generation rewrite of enum4linux that enumerates information from Windows and Samba systems via SMB/RPC/LDAP, adds structured JSON/YAML output, and wraps core Samba client tools for use by security professionals and CTF players.

## Overview
enum4linux-ng is an open-source enumeration utility for Windows and Samba environments. It modernizes the original enum4linux by orchestrating Samba client tools, parsing their heterogeneous outputs, and normalizing results into machine-readable formats. It is designed for reconnaissance and assessment, supporting unauthenticated and authenticated modes (cleartext credentials, NT hash, Kerberos ticket), optional RID cycling, and selective checks guided by a preflight that detects service availability and suppresses inapplicable tests. It is not an exploitation framework and is typically chained with broader network discovery or Active Directory assessments.

## What It Is
A Python-based rewrite of the classic enum4linux.pl that primarily acts as a wrapper/driver for Samba client utilities (nmblookup, net, rpcclient, smbclient), adding parsers and exporters. It provides SMB/NetBIOS, RPC, and limited LDAP-driven discovery against Windows hosts, Samba servers, and AD domain controllers. The project is distributed under GPL-3.0 and is packaged in common security distributions such as Kali.

## How It Works
The tool begins by probing target reachability and available services (e.g., SMB versus LDAP) and whether a session can be established, enabling a service-aware preflight that disables checks likely to fail. It then invokes Samba utilities to query NetBIOS names, shares, users, groups, services, password policies, operating system and domain details, printers, and—optionally—performs RID cycling to derive accounts from SIDs. Outputs from these tools are parsed into normalized in-memory structures and emitted as categorized console results and/or JSON/YAML artifacts suitable for downstream processing. Authentication is flexible: anonymous/null sessions, username+password, NT hash (pass-the-hash), or Kerberos tickets in AD contexts with correct DNS configuration.

## Core Concepts
- Windows/Samba enumeration via SMB/RPC/LDAP
- Wrapper orchestration of Samba client tools with robust parsing
- Machine-readable export (JSON/YAML) for pipeline integration
- RID cycling for account discovery
- Support for legacy SMBv1 and SMB dialect checks
- Authentication flexibility (null, password, NT hash, Kerberos)
- Service-aware "smart" enumeration and timeouts

## Typical Workflow
- Identify SMB-capable targets through network discovery and scoping.
- Select an authentication mode aligned with engagement rules (unauthenticated/null, credentials, NT hash, or Kerberos ticket).
- Execute scoped or default enumeration; the tool auto-detects accessible services and adjusts checks accordingly.
- Review categorized console findings and export structured results for archival and correlation.
- Feed JSON/YAML outputs into analysis pipelines or other tools to validate configurations, access controls, and policy posture.
- Iterate with extended checks such as group membership expansion or RID cycling where appropriate and authorized.

## Use Cases
- Enumerating Windows and Samba hosts for users, groups, and shares to support asset and identity inventories.
- Assessing SMB configuration posture (dialect support, signing, legacy protocol use) and password policy exposure.
- Discovering writable or world-readable shares and basic service information to inform risk reviews.
- Collecting AD-relevant metadata from domain controllers (e.g., LDAP-driven domain info) for mapping and scoping.
- Supporting red/blue team exercises and CTFs where quick, parsable SMB/RPC enumeration is needed.
- Exporting machine-readable findings to central repositories for correlation with vulnerability management and SIEM data.

## Limitations
- Not an exploitation or vulnerability scanner; it enumerates but does not directly test complex exploitability (e.g., EternalBlue).
- Relies on Samba client utilities; version mismatches or Samba tool limitations can affect reliability and feature coverage.
- Results depend on network reachability, firewall rules, service configurations, and authentication success; hardened environments may yield limited data or false negatives.
- Default behavior halts when a session cannot be established, limiting data in strictly locked-down scenarios.
- Kerberos mode requires correct DNS/realm setup; misconfiguration leads to authentication failures.
- IPv6 support is marked experimental; behavior may vary by environment and Samba stack.
- High-noise potential in monitored environments; frequent SMB/RPC probes may trigger detections or rate limits.

## Related Tools
- enum4linux (original): Predecessor in Perl; enum4linux-ng rewrites and extends it with structured outputs and modernized behavior.
- Samba client tools: nmblookup, net, rpcclient, smbclient: Underlying dependencies that perform the actual SMB/NetBIOS/RPC interactions coordinated by enum4linux-ng.
- CrackMapExec: Complementary post-auth SMB/AD operator tool; broader credential testing and remote execution beyond enumeration.
- Nmap SMB NSE scripts (e.g., smb-os-discovery, smb-protocols): Complementary network discovery and protocol fingerprinting; provides orthogonal checks to cross-validate findings.
- Impacket examples (e.g., smbclient.py, lookupsid.py, samrdump.py): Alternative Python SMB/RPC clients and SID/LSA/SAM tooling that can replicate or deepen aspects of enumeration.
- smbmap: Adjacent share-focused enumerator that reports permissions and writeability; complements share/access findings.
- ldapsearch / polenum (original): Upstream inspirations; parts of this functionality are natively implemented or emulated within enum4linux-ng.

## Evidence Gaps
- No dedicated standalone documentation site beyond the GitHub README; feature depth and roadmap are primarily inferred from README and release notes.
- Granularity of LDAP coverage and AD-specific object classes is not fully specified in public docs.
- Performance characteristics and scalability on large domains/shares are not benchmarked in official sources.

## Sources
- [cddmp/enum4linux-ng – Project README](https://github.com/cddmp/enum4linux-ng) (GitHub)
- [cddmp/enum4linux-ng – Releases (latest tags and notes)](https://github.com/cddmp/enum4linux-ng/releases) (GitHub)
- [enum4linux-ng – Kali Linux Package Tracker (version history)](https://pkg.kali.org/pkg/enum4linux-ng) (Kali Linux (Debian Distro Tracker))
- [CiscoCXSecurity/enum4linux – Original project repository](https://github.com/CiscoCXSecurity/enum4linux) (GitHub)
- [Samba rpcclient man page](https://www.samba.org/samba/docs/current/man-html/rpcclient.1.html) (Samba Project)
- [Samba nmblookup and smbclient references (suite documentation)](https://www.samba.org/samba/docs/using_samba/appc.html) (Samba Project)
- [https://iemlabs.com/blogs/enum4linux-ng/](https://iemlabs.com/blogs/enum4linux-ng/) (iemlabs.com)
- [https://github.com/cddmp/enum4linux-ng/blob/master/enum4linux-ng.py](https://github.com/cddmp/enum4linux-ng/blob/master/enum4linux-ng.py) (github.com)
- [https://github.com/topics/enum4linux](https://github.com/topics/enum4linux) (github.com)
- [https://www.reddit.com/r/tryhackme/comments/k46vxf](https://www.reddit.com/r/tryhackme/comments/k46vxf) (reddit.com)
- [https://github.com/cddmp/enum4linux-ng/issues](https://github.com/cddmp/enum4linux-ng/issues) (github.com)
- [https://pkg.kali.org/news/560024/enum4linux-ng-132-0kali1-migrated-to-kali-rolling/](https://pkg.kali.org/news/560024/enum4linux-ng-132-0kali1-migrated-to-kali-rolling/) (pkg.kali.org)

## Confidence
high
