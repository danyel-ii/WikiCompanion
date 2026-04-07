# Credential Dumping

## Overview
Credential Dumping is a penetration testing tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Credential Dumping is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Credential Dumping works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- Active Directory
- BloodHound
- Mimikatz
- Kerberoasting
- domain compromise
- penetration testing

## Typical Workflow
- **Domain enumeration**: `Get-ADDomain` or `crackmapexec smb <dc_ip> -u <user> -p <pass> --domains` to identify domain name, functional level, domain controllers, and forest trusts
- **User enumeration**: `Get-ADUser -Filter * -Properties ServicePrincipalName,AdminCount,PasswordLastSet` to identify service accounts, privileged accounts, and stale passwords
- **Group enumeration**: Map membership of high-value groups (Domain Admins, Enterprise Admins, Schema Admins, Account Operators, Backup Operators) using `net group "Domain Admins" /domain`
- **GPO enumeration**: `Get-GPO -All | Get-GPOReport -ReportType XML` to identify Group Policy configurations including password policies, audit settings, and software deployment
- **Trust enumeration**: `nltest /domain_trusts /all_trusts` to map inter-domain and inter-forest trusts, noting trust direction and transitivity
- **LDAP queries**: Use `ldapsearch` or ADExplorer to search for accounts with `userAccountControl` flags indicating "password never expires", "password not required", or "DES-only Kerberos"

## Use Cases
- Assessing the security of an Active Directory domain and forest against common and advanced attack techniques
- Identifying attack paths from low-privilege domain user to Domain Admin using privilege relationship analysis
- Validating that Kerberos security configurations, credential policies, and delegation settings resist known attacks
- Testing detection capabilities of the SOC and EDR tools against Active Directory-specific TTPs
- Evaluating the effectiveness of tiered administration models and privileged access workstations
- Running SharpHound with noisy collection methods during peak hours, alerting the SOC via excessive LDAP queries
- Password spraying without checking the domain lockout policy first, locking out hundreds of accounts
- Forgetting to test for AD CS vulnerabilities which often provide the fastest path to Domain Admin

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Kerberos Tickets From Windows Memory, And MSSQL With Built In Modules For Password Spraying And Enumeration, And Remote Execution (psexec, BloodHound, Certipy, CrackMapExec, GetNPUsers), Impacket

## Sources
- executing-active-directory-attack-simulation
