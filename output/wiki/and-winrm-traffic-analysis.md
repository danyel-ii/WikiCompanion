# And Winrm Traffic Analysis

## Overview
And Winrm Traffic Analysis is a detection tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Winrm Traffic Analysis is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Winrm Traffic Analysis works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- lateral movement
- mitre attack
- pass the hash
- psexec
- wmi
- rdp
- smb
- detection
- soc operations

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
- SOC teams need to detect attackers pivoting between systems after initial compromise
- Incident investigations require tracking an attacker's movement path through the network
- Detection engineering needs lateral movement rules mapped to ATT&CK TA0008 techniques
- Red/purple team exercises identify lateral movement detection gaps
- **PsExec Spread**: Attacker uses PsExec to execute malware across 20 workstations — detect via service creation events
- **RDP Pivoting**: Compromised VPN account used to RDP through multiple internal hosts — detect via Logon_Type 10 chains
- **WMI Recon and Execution**: Attacker uses WMI for discovery then execution — detect via WmiPrvSE child processes
- **Pass-the-Hash Campaign**: Stolen local admin hash used across subnet — detect via NTLM Logon_Type 3 to multiple hosts
- **Scheduled Task Persistence**: Remote scheduled task created on domain controller — detect via EventCode 4698 from non-admin source

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Network Flows, BloodHound, CrowdStrike Falcon, Microsoft Defender For Identity, RDP, Splunk Enterprise Security, Sysmon, Zeek

## Sources
- performing-lateral-movement-detection
