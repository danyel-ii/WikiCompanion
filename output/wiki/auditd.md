# Auditd

## Overview
Auditd is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Auditd is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Auditd works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- linux forensics
- system artifacts
- log analysis
- persistence detection
- incident investigation
- digital forensics
- endpoint
- hardening
- linux security
- CIS benchmark
- Ubuntu

## Typical Workflow
- cat >> /etc/modprobe.d/CIS.conf << 'EOF'
- install cramfs /bin/true
- install freevxfs /bin/true
- install jffs2 /bin/true
- install hfs /bin/true
- install hfsplus /bin/true
- install squashfs /bin/true
- install udf /bin/true

## Use Cases
- When investigating a compromised Linux server or workstation
- For identifying persistence mechanisms (cron, systemd, SSH keys)
- When tracing user activity through shell history and authentication logs
- During incident response to determine the scope of a Linux-based breach
- For detecting rootkits, backdoors, and unauthorized modifications
- Hardening Linux servers (Ubuntu, RHEL, CentOS, Debian) against CIS benchmarks
- Automating Linux security baselines using Ansible, OpenSCAP, or shell scripts
- Meeting compliance requirements (PCI DSS, HIPAA, SOC 2) for Linux endpoints
- Remediating findings from vulnerability scans or security audits

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AIDE, Ansible Lockdown, Chkrootkit, Last, Lynis, OpenSCAP, Osquery, Plaso

## Sources
- analyzing-linux-system-artifacts
- hardening-linux-endpoint-with-cis-benchmark
