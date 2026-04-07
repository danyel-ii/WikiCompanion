# Rdp

## Overview
Rdp is a detection tool that appears across ransomware defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Rdp is best understood as a ransomware-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Rdp works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ransomware
- detection
- honeypot
- canary
- defense
- deception
- ransomware defense
- soc
- lateral movement
- mitre attack
- pass the hash
- psexec

## Typical Workflow
- **Pass-the-Hash Detection (EventCode 4624 with NTLM):**
- index=wineventlog sourcetype="WinEventLog:Security" EventCode=4624 Logon_Type=3
- AuthenticationPackageName="NTLM"
- | stats count, dc(ComputerName) AS unique_targets, values(ComputerName) AS targets
- by src_ip, TargetUserName
- | where unique_targets > 3
- | eval alert = "Possible Pass-the-Hash: NTLM network logon to ".unique_targets." hosts"
- | sort - unique_targets
- | table src_ip, TargetUserName, unique_targets, count, targets, alert

## Use Cases
- Deploying early-warning detection for ransomware encryption attempts using canary files
- Creating honeypot file shares that detect lateral movement and data staging before encryption
- Supplementing EDR and SIEM-based detection with deception-layer alerts that have near-zero false positives
- Detecting ransomware variants that evade signature-based detection by triggering on file modification behavior
- Validating that ransomware detection capabilities work by testing with controlled encryption tools
- Placing canary files only in root directories where ransomware may skip them by targeting subdirectories first
- Using obvious canary names that sophisticated ransomware may recognize and avoid
- SOC teams need to detect attackers pivoting between systems after initial compromise
- Incident investigations require tracking an attacker's movement path through the network
- Detection engineering needs lateral movement rules mapped to ATT&CK TA0008 techniques

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Network Flows, And Ransomware Extension Detection, And WinRM Traffic Analysis, BloodHound, Canarytokens.org, CrowdStrike Falcon, DNS), Elastic Endpoint

## Sources
- implementing-honeypot-for-ransomware-detection
- performing-lateral-movement-detection
