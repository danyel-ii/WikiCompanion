# Aide

## Overview
Aide is a forensics tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Aide is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Aide works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- linux forensics
- system artifacts
- log analysis
- persistence detection
- incident investigation
- digital forensics
- endpoint
- HIDS
- Wazuh
- OSSEC
- file integrity monitoring

## Typical Workflow
- Invoke-WebRequest -Uri "https://packages.wazuh.com/4.x/windows/wazuh-agent-4.9.0-1.msi" `
- -OutFile "wazuh-agent.msi"
- msiexec /i wazuh-agent.msi /q WAZUH_MANAGER="wazuh-manager.corp.com" `
- WAZUH_REGISTRATION_SERVER="wazuh-manager.corp.com" WAZUH_AGENT_GROUP="windows-workstations"
- cat >> /etc/modprobe.d/CIS.conf << 'EOF'
- install cramfs /bin/true
- install freevxfs /bin/true
- install jffs2 /bin/true
- install hfs /bin/true
- install hfsplus /bin/true

## Use Cases
- When investigating a compromised Linux server or workstation
- For identifying persistence mechanisms (cron, systemd, SSH keys)
- When tracing user activity through shell history and authentication logs
- During incident response to determine the scope of a Linux-based breach
- For detecting rootkits, backdoors, and unauthorized modifications
- Deploying HIDS agents (Wazuh, OSSEC, AIDE) across Windows and Linux endpoints
- Configuring file integrity monitoring (FIM) for compliance (PCI DSS 11.5, NIST SI-7)
- Monitoring system configuration changes, rootkit detection, and security policy violations
- Integrating HIDS alerts with SIEM platforms for centralized monitoring
- Hardening Linux servers (Ubuntu, RHEL, CentOS, Debian) against CIS benchmarks

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Auditd, Agent, And Dashboard, Ansible Lockdown, Chkrootkit, Last, Lynis, OpenSCAP

## Sources
- analyzing-linux-system-artifacts
- configuring-host-based-intrusion-detection
- hardening-linux-endpoint-with-cis-benchmark
- implementing-file-integrity-monitoring-with-aide
