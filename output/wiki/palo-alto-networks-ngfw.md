# Palo Alto Networks Ngfw

## Overview
Palo Alto Networks Ngfw is a network isolation tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Palo Alto Networks Ngfw is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Palo Alto Networks Ngfw works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- breach containment
- lateral movement
- network isolation
- credential revocation
- live response
- incident response

## Typical Workflow
- Identify all confirmed compromised hosts via EDR telemetry and SIEM correlation
- Map lateral movement paths using authentication logs (Windows Event ID 4624 Type 3 and Type 10)
- Identify all compromised credentials (check for pass-the-hash, Kerberoasting, DCSync activity)
- Determine C2 channels (beacon intervals, domains, IPs, protocols)
- Assess whether the adversary has domain admin or equivalent privileges
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Compromised Hosts:     5 (WKSTN-042, WKSTN-087, SRV-FILE01, SRV-DC02, WKSTN-103)
- Compromised Accounts:  3 (jsmith, svc-backup, admin-tier0)
- C2 Channels:           HTTPS beacon to 185.220.x.x every 60s ± 15% jitter

## Use Cases
- A confirmed intrusion is in progress with an active adversary on the network
- Malware is spreading laterally across endpoints or servers
- A compromised account is being used for unauthorized access to systems
- Ransomware encryption has been detected and is actively propagating
- An attacker has established command-and-control communications from internal hosts
- Shutting down servers immediately, destroying volatile memory evidence
- Only disabling the known compromised account without checking for other persistence mechanisms
- Restoring from backup before confirming the adversary's access has been fully revoked

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- BloodHound, CrowdStrike Falcon, Microsoft Defender For Endpoint, Velociraptor

## Sources
- containing-active-breach
