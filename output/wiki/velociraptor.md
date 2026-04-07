# Velociraptor

## Overview
Velociraptor is a forensics tool that appears across threat hunting workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Velociraptor is best understood as a threat-hunting tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Velociraptor works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- linux forensics
- system artifacts
- log analysis
- persistence detection
- incident investigation
- digital forensics
- prefetch
- windows artifacts
- execution history
- timeline analysis
- evidence collection

## Typical Workflow
- ls -la /cases/case-2024-001/prefetch/ | wc -l
- ls -la /cases/case-2024-001/prefetch/ | head -30
- ━━━━━━━━━━━━━━━━━━━━━━━━━━
- [ ] Create and exercise a cyber incident response plan (IRP)
- [ ] Implement network segmentation between IT and OT networks
- [ ] Enable MFA on all remote access and privileged accounts
- [ ] Deploy endpoint detection and response (EDR) on all endpoints
- [ ] Disable or restrict RDP; require VPN for remote access
- [ ] Maintain a software/hardware asset inventory
- [ ] Apply patches within 48 hours for internet-facing systems

## Use Cases
- When investigating a compromised Linux server or workstation
- For identifying persistence mechanisms (cron, systemd, SSH keys)
- When tracing user activity through shell history and authentication logs
- During incident response to determine the scope of a Linux-based breach
- For detecting rootkits, backdoors, and unauthorized modifications
- When determining which programs were executed on a Windows system and when
- During malware investigations to confirm execution of suspicious binaries
- For establishing a timeline of application usage during an incident
- When correlating program execution with other forensic artifacts
- To identify anti-forensic tools or unauthorized software that was run

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Sysmon, CrowdStrike Falcon, Elastic Security, Microsoft Defender For Endpoint, Sigma Rules, Splunk Enterprise, KAPE, Splunk

## Sources
- analyzing-linux-system-artifacts
- analyzing-prefetch-files-for-execution-history
- analyzing-usb-device-connection-history
- building-ransomware-playbook-with-cisa-framework
- building-threat-hunt-hypothesis-framework
- collecting-volatile-evidence-from-compromised-host
- containing-active-breach
- detecting-email-forwarding-rules-attack
- detecting-insider-threat-behaviors
- detecting-kerberoasting-attacks
- detecting-lateral-movement-in-network
- detecting-mimikatz-execution-patterns
- detecting-pass-the-hash-attacks
- detecting-privilege-escalation-attempts
- detecting-service-account-abuse
- detecting-suspicious-powershell-execution
- detecting-wmi-persistence
- eradicating-malware-from-infected-systems
- extracting-windows-event-logs-artifacts
- hunting-advanced-persistent-threats
- hunting-for-living-off-the-cloud-techniques
- hunting-for-living-off-the-land-binaries
- hunting-for-persistence-mechanisms-in-windows
- hunting-for-registry-persistence-mechanisms
- hunting-for-scheduled-task-persistence
- hunting-for-shadow-copy-deletion
- hunting-for-spearphishing-indicators
- hunting-for-supply-chain-compromise
- hunting-for-unusual-network-connections
- hunting-for-webshell-activity
- implementing-ransomware-kill-switch-detection
- performing-malware-persistence-investigation
