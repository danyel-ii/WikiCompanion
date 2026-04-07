# Service Principal Names

## Overview
Service Principal Names is a red teaming tool that appears across red teaming workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Service Principal Names is best understood as a red-teaming tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Service Principal Names works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- red team
- adversary simulation
- mitre attack
- exploitation
- post exploitation
- kerberoasting
- active directory
- credential access
- red teaming

## Typical Workflow
- 1. Enumerate accounts with SPNs using LDAP queries
- 2. Filter for user accounts (not computer accounts)
- 3. Identify accounts with elevated privileges (adminCount=1)
- 4. Prioritize accounts with weak password policies
- 1. Request TGS tickets for identified SPN accounts
- 2. Extract ticket data in crackable format (hashcat/john compatible)
- 4. Document all requested tickets
- 1. Use hashcat mode 13100 (Kerberos 5 TGS-REP etype 23) for RC4 tickets
- 2. Use hashcat mode 19700 (Kerberos 5 TGS-REP etype 17) for AES-128
- 3. Use hashcat mode 19800 (Kerberos 5 TGS-REP etype 18) for AES-256

## Use Cases
- When conducting security assessments that involve performing kerberoasting attack
- When following incident response procedures for related security events
- When performing scheduled security testing or auditing activities
- When validating security controls through hands-on testing

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- performing-kerberoasting-attack
