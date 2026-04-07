# Microsoft Defender For Identity

## Overview
Microsoft Defender For Identity is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Microsoft Defender For Identity is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Microsoft Defender For Identity works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- azure
- entra id
- active directory
- iam audit
- conditional access
- threat hunting
- dcsync
- credential theft
- mitre t1003 006
- mimikatz
- kerberos

## Typical Workflow
- Assess the tenant's baseline identity security settings including security defaults and legacy authentication status.
- Connect-MgGraph -Scopes "Directory.Read.All","Policy.Read.All","AuditLog.Read.All"
- Get-MgOrganization | Select-Object DisplayName, Id, VerifiedDomains
- Get-MgPolicyIdentitySecurityDefaultEnforcementPolicy | Select-Object IsEnabled
- Get-MgPolicyAuthenticationMethodPolicy | ConvertTo-Json -Depth 5
- 1. **Identify Legitimate Replication Sources**: Document all domain controllers in the environment by hostname, IP, and computer account. Only these should perform directory replication.
- 2. **Enable Required Auditing**: Configure Advanced Audit Policy to capture Event ID 4662 on domain controllers with specific GUID monitoring for replication rights.
- 3. **Monitor Replication Rights Access**: Track access to three critical GUIDs -- DS-Replication-Get-Changes (1131f6aa-9c07-11d1-f79f-00c04fc2dcd2), DS-Replication-Get-Changes-All (1131f6ad-9c07-11d1-f79f-00c04fc2dcd2), and DS-Replication-Get-Changes-In-Filtered-Set (89e95b76-444d-4c62-991a-0facbeda640c).
- 4. **Detect Non-DC Replication Requests**: Alert when any account NOT associated with a domain controller requests replication rights.
- 5. **Correlate with Network Traffic**: DCSync generates replication traffic (MS-DRSR/RPC) from the attacker's machine to the DC. Monitor for DrsGetNCChanges RPC calls from non-DC IP addresses.

## Use Cases
- When performing a security assessment of an Azure tenant's identity configuration
- When compliance audits require review of authentication policies, MFA enforcement, and role assignments
- When onboarding a new Azure tenant after merger or acquisition
- When investigating suspicious sign-in activity or compromised accounts
- When validating conditional access policies adequately protect against identity-based attacks
- When hunting for credential theft in Active Directory environments
- After compromise of accounts with Replicating Directory Changes permissions
- When investigating suspected use of Mimikatz or Impacket secretsdump
- During incident response involving lateral movement with domain admin credentials
- When auditing AD replication permissions as part of security hardening

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- BloodHound, CrowdStrike Falcon, And Audit Logs, And Identity Checks, And Network Flows, And WinRM Traffic Analysis, AzureADRecon, DSInternals

## Sources
- auditing-azure-active-directory-configuration
- detecting-dcsync-attack-in-active-directory
- performing-lateral-movement-detection
