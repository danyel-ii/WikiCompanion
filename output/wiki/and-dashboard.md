# And Dashboard

## Overview
And Dashboard is a file integrity monitoring tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Dashboard is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Dashboard works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- endpoint
- HIDS
- Wazuh
- OSSEC
- file integrity monitoring
- intrusion detection
- endpoint security

## Typical Workflow
- Invoke-WebRequest -Uri "https://packages.wazuh.com/4.x/windows/wazuh-agent-4.9.0-1.msi" `
- -OutFile "wazuh-agent.msi"
- msiexec /i wazuh-agent.msi /q WAZUH_MANAGER="wazuh-manager.corp.com" `
- WAZUH_REGISTRATION_SERVER="wazuh-manager.corp.com" WAZUH_AGENT_GROUP="windows-workstations"

## Use Cases
- Deploying HIDS agents (Wazuh, OSSEC, AIDE) across Windows and Linux endpoints
- Configuring file integrity monitoring (FIM) for compliance (PCI DSS 11.5, NIST SI-7)
- Monitoring system configuration changes, rootkit detection, and security policy violations
- Integrating HIDS alerts with SIEM platforms for centralized monitoring

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Agent, AIDE, OSSEC, Samhain, Tripwire, Wazuh

## Sources
- configuring-host-based-intrusion-detection
