# Windows Event Forwarding

## Overview
Windows Event Forwarding is a endpoint tool that appears across endpoint security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Windows Event Forwarding is best understood as a endpoint-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Windows Event Forwarding works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- splunk
- windows events
- sysmon
- event logs
- mitre attack
- active directory
- soc operations
- endpoint
- windows security
- event logging
- audit policy

## Typical Workflow
- **Brute Force Detection (EventCode 4625 — Failed Logon):**
- index=wineventlog sourcetype="WinEventLog:Security" EventCode=4625
- | stats count, dc(TargetUserName) AS unique_users, values(TargetUserName) AS targeted_users
- by src_ip, Logon_Type, Status
- | eval attack_type = case(
- Logon_Type=3, "Network Brute Force",
- Logon_Type=10, "RDP Brute Force",
- Logon_Type=2, "Interactive Brute Force",
- Computer Configuration → Windows Settings → Security Settings
- → Advanced Audit Policy Configuration → Audit Policies

## Use Cases
- SOC analysts investigate alerts related to Windows authentication, process execution, or AD changes
- Detection engineers build SPL queries for Windows-based threat detection
- Incident responders need forensic timelines of Windows endpoint or domain controller activity
- Periodic threat hunting targets Windows-specific ATT&CK techniques
- **Kerberoasting (T1558.003)**: Detect EventCode 4769 with encryption type 0x17 (RC4) for non-standard service accounts
- **DCSync (T1003.006)**: Detect EventCode 4662 with DS-Replication-Get-Changes from non-DC sources
- **Golden Ticket (T1558.001)**: Detect EventCode 4769 with abnormal ticket properties (long lifetime, non-standard encryption)
- **Pass-the-Hash (T1550.002)**: Detect EventCode 4624 Logon_Type 3 with NTLM authentication from unexpected sources
- **DLL Side-Loading (T1574.002)**: Sysmon EventCode 7 showing unsigned DLLs loaded by legitimate processes
- Configuring Windows Advanced Audit Policy for security monitoring

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Splunk Enterprise, Sysmon, And File Activity Logging, BloodHound, NXLog, Palantir WEF Configuration, PingCastle, Splunk CIM

## Sources
- analyzing-windows-event-logs-in-splunk
- configuring-windows-event-logging-for-detection
- detecting-lateral-movement-with-splunk
