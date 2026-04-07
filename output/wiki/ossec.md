# Ossec

## Overview
Ossec is a file integrity monitoring tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Ossec is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Ossec works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- endpoint
- HIDS
- Wazuh
- OSSEC
- file integrity monitoring
- intrusion detection
- endpoint security
- ransomware
- detection
- canary files
- honeytokens
- deception

## Typical Workflow
- Invoke-WebRequest -Uri "https://packages.wazuh.com/4.x/windows/wazuh-agent-4.9.0-1.msi" `
- -OutFile "wazuh-agent.msi"
- msiexec /i wazuh-agent.msi /q WAZUH_MANAGER="wazuh-manager.corp.com" `
- WAZUH_REGISTRATION_SERVER="wazuh-manager.corp.com" WAZUH_AGENT_GROUP="windows-workstations"
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Use names that sort FIRST and LAST alphabetically in each directory
- Ransomware typically enumerates directories A-Z or Z-A
- Examples: _AAAA_budget_2024.docx, ~zzzz_report_final.xlsx
- Desktop, Documents, Downloads on each endpoint
- Department-specific shares (Finance, HR, Legal)

## Use Cases
- Deploying HIDS agents (Wazuh, OSSEC, AIDE) across Windows and Linux endpoints
- Configuring file integrity monitoring (FIM) for compliance (PCI DSS 11.5, NIST SI-7)
- Monitoring system configuration changes, rootkit detection, and security policy violations
- Integrating HIDS alerts with SIEM platforms for centralized monitoring
- Setting up early-warning detection for ransomware on file servers or endpoints
- Supplementing EDR/AV with a deception-based detection layer that catches unknown ransomware variants
- Creating high-fidelity ransomware alerts that have very low false-positive rates (legitimate users have no reason to touch decoy files)
- Testing ransomware response procedures by validating that canary file modifications trigger the expected alerting pipeline
- Protecting high-value file shares (finance, HR, legal) with tripwire files that indicate unauthorized encryption activity

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Agent, AIDE, And Dashboard, And DNS Tokens, And MacOS, Canarytokens, Elastic Endpoint, Samhain

## Sources
- configuring-host-based-intrusion-detection
- deploying-decoy-files-for-ransomware-detection
