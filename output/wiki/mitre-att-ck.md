# MITRE Att Ck

## Overview
MITRE Att Ck is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
MITRE Att Ck is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
MITRE Att Ck works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ransomware
- incident response
- CISA
- playbook
- compliance
- NIST
- ransomware defense
- triage
- severity classification
- soc

## Typical Workflow
- ━━━━━━━━━━━━━━━━━━━━━━━━━━
- [ ] Create and exercise a cyber incident response plan (IRP)
- [ ] Implement network segmentation between IT and OT networks
- [ ] Enable MFA on all remote access and privileged accounts
- [ ] Deploy endpoint detection and response (EDR) on all endpoints
- [ ] Disable or restrict RDP; require VPN for remote access
- [ ] Maintain a software/hardware asset inventory
- [ ] Apply patches within 48 hours for internet-facing systems
- index=notable status=new severity IN ("critical","high")
- | table _time, rule_name, src, dest, severity, description

## Use Cases
- An organization needs to create or update its ransomware incident response playbook following CISA guidelines
- A security team is conducting a ransomware readiness assessment against the CISA StopRansomware framework
- Compliance requires documenting ransomware response procedures aligned with NIST CSF and CISA recommendations
- During tabletop exercises to validate that the organization's ransomware response steps match industry best practices
- After a ransomware incident to update the playbook with lessons learned and close identified gaps
- New security alert received from SIEM, EDR, or other detection sources
- SOC analyst needs to determine if an alert is a true positive requiring response
- Incident needs severity classification and team assignment
- Multiple concurrent incidents require prioritization
- Automated triage rules need validation or tuning

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- CISA StopRansomware Guide, Cortex XSOAR, ID Ransomware, NIST CSF, PagerDuty, Splunk, TheHive, Velociraptor

## Sources
- building-ransomware-playbook-with-cisa-framework
- triaging-security-incident-with-ir-playbook
