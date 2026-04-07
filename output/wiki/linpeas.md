# linPEAS

> An open-source Linux/Unix privilege-escalation enumeration script in the PEASS-ng suite that audits a host for misconfigurations, vulnerabilities, and environmental conditions that could enable local privilege escalation.

## Overview
linPEAS is a component of the PEASS-ng (Privilege Escalation Awesome Scripts – next generation) project maintained on GitHub. It targets local, post-compromise auditing of Linux/Unix-like and macOS systems, presenting likely privilege-escalation vectors through color-coded findings and structured sections. The suite provides parsers that convert tool output into machine-readable and report-oriented formats. Distribution is via GitHub releases as shell scripts and prebuilt binaries, with documentation cross-referenced to the HackTricks knowledge base curated by the same author. The project is actively updated.

## What It Is
A host-based, read-only-by-default enumerator that inspects configuration, permissions, services, credential artifacts, container/virtualization settings, software versions, and kernel/build information to surface conditions commonly abused for privilege escalation. It is not an exploitation framework; it reports potential paths and leaves validation and exploitation to the operator.

## How It Works
linPEAS executes locally on a target host as a POSIX shell script, with compiled binaries also available. It performs modular checks spanning operating system and build details; users, groups, and sudoers configuration; file permissions including SUID/SGID; services, processes, timers, and cron; environment and PATH risks; network and storage mounts such as NFS and fstab; credentials in predictable locations; software and package versions; and indicators of containerization or virtualization (e.g., Docker, LXC, Kubernetes). Findings are highlighted to aid triage. The PEASS-ng builder composes variants with differing check sets (e.g., full, default, small). Output can be post-processed by official PEASS-ng parsers into JSON, HTML, or PDF for analysis and reporting. By design, it avoids writing to disk and avoids credential use; some optional extended checks increase runtime and noisiness.

## Core Concepts
- Local privilege escalation assessment
- Post-exploitation host auditing
- Misconfiguration discovery (sudo, SUID/SGID, PATH, services, timers/cron)
- Credentials and secrets exposure discovery
- Kernel and software version risk context
- Container/virtualization breakout indicators
- Color-coded triage of findings
- Suite integration within PEASS-ng

## Typical Workflow
- Obtain low-privileged execution on a Linux/Unix-like host during an engagement.
- Run linPEAS to enumerate system- and user-level misconfigurations and conditions associated with privilege escalation.
- Review highlighted findings (e.g., risky sudo rules, writable service files, dangerous SUID binaries, exposed credentials, insecure mounts, container escape indicators).
- Correlate findings with trusted references (e.g., GTFOBins entries for specific binaries; vendor/CVE notes for kernel or package versions).
- Manually validate feasibility, impact, and exploitability of shortlisted vectors within the agreed rules of engagement.
- Document confirmed risks and recommended remediations; optionally export/parse output for reporting and tracking.

## Use Cases
- Rapid triage of local privilege-escalation opportunities during penetration tests or red team assessments after initial foothold.
- Purple/blue team hardening reviews to identify common misconfigurations and weak controls on Linux fleets.
- Control validation for EDR/monitoring by observing detections when enumeration touches sensitive areas.
- Baseline checks in lab environments and CTFs to speed up manual analysis.
- Offline analysis of extracted firmware or filesystem images to spot hardening gaps before deployment.

## Limitations
- Requires code execution on the host; may be noisy and trigger EDR/AV or monitoring alerts.
- Findings are suggestive, not definitive; false positives/negatives can occur depending on platform specifics and environment hardening.
- Not an exploitation tool—operators must validate and execute any escalation steps separately and ethically.
- Coverage varies by OS/distribution/version; some checks depend on available system utilities and permissions.
- Runtime can be significant on large filesystems or when extended checks are enabled; some optional checks may briefly create and remove temporary artifacts.
- Operational security considerations apply (tool provenance, on-disk artifacts if not executed purely in-memory, potential network egress when cross-referencing).

## Related Tools
- WinPEAS: Windows counterpart within the PEASS-ng suite for local privilege-escalation enumeration on Windows hosts.
- macOS-PEAS (via linPEAS auto-detection): When executed on macOS, linPEAS switches to a macOS-focused enumeration mode within the same suite.
- GTFOBins: Reference knowledge base of Unix binaries that can be abused for privesc; often used to validate linPEAS-highlighted SUID/sudo vectors.
- Linux Smart Enumeration (lse): Alternative Linux enumeration script emphasizing verbosity levels and targeted selection; complementary to or substitutive for linPEAS in some workflows.
- Linux Exploit Suggester (and forks): Separate utilities that, given kernel/build info, suggest known kernel exploits; sometimes embedded or referenced by linPEAS variants for context.

## Evidence Gaps
- Public documentation of every individual linPEAS check is spread across the HackTricks wiki and repository; a single authoritative, versioned specification of all checks is not centralized.
- Behavioral guarantees (e.g., never writing to disk under all modes) can vary with options; definitive mode-by-mode side-effect documentation is limited.
- Claims about specific, very recent check additions change frequently with releases; exact coverage at any given date should be confirmed against the current GitHub README and release notes.

## Sources
- [PEASS-ng repository (top-level README) – suite overview, releases, parsers, and linPEAS entry](https://github.com/peass-ng/PEASS-ng) (GitHub)
- [linPEAS README – purpose, platforms, build variants, behavior notes, and recent updates](https://github.com/peass-ng/PEASS-ng/tree/master/linPEAS) (GitHub)
- [PEASS-ng releases – distribution of linPEAS artifacts](https://github.com/peass-ng/PEASS-ng/releases) (GitHub)
- [PEASS-ng parsers – transforming PEASS outputs to JSON/HTML/PDF](https://github.com/peass-ng/PEASS-ng/tree/master/parsers) (GitHub)
- [HackTricks – Linux Privilege Escalation checklist and linPEAS references](https://book.hacktricks.wiki/linux-hardening/linux-privilege-escalation-checklist.html) (HackTricks (project wiki))
- [GTFOBins project – curated Unix binaries abuse reference](https://gtfobins.github.io/) (GTFOBins)
- [Linux Smart Enumeration (lse) – alternative Linux privesc enumerator](https://github.com/diego-treitos/linux-smart-enumeration) (GitHub)
- [https://winpeas.com/](https://winpeas.com/) (winpeas.com)
- [https://deepwiki.com/peass-ng/PEASS-ng/6-output-parsers](https://deepwiki.com/peass-ng/PEASS-ng/6-output-parsers) (deepwiki.com)
- [https://deepwiki.com/peass-ng/PEASS-ng/2.2-linpeas-architecture](https://deepwiki.com/peass-ng/PEASS-ng/2.2-linpeas-architecture) (deepwiki.com)
- [https://kb.offsec.nl/tools/framework/peass-ng/](https://kb.offsec.nl/tools/framework/peass-ng/) (kb.offsec.nl)
- [https://linpeas.sh/](https://linpeas.sh/) (linpeas.sh)

## Confidence
high
