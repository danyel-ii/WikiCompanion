# Word Docs

## Overview
Word Docs is a detection tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Word Docs is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Word Docs works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- deception
- honeypot
- honeytoken
- canary
- lateral movement
- detection
- soc operations

## Typical Workflow
- DECEPTION DEPLOYMENT MAP
- ━━━━━━━━━━━━━━━━━━━━━━━━
- Segment              Decoy Type          Rationale
- Server VLAN          Fake file server    Attackers enumerate SMB shares during recon
- Database VLAN        Fake DB server      SQL scanning detected in past incidents
- AD/DC Segment        Honeytoken account  Credential theft detection
- Executive Subnet     Fake workstation    Targeted attacks pivot through exec systems
- DMZ                  Honeypot web app    External attacker detection
- OT Network           Fake PLC/HMI        Industrial threat detection
- Cloud (AWS VPC)      Canary EC2 + S3     Cloud lateral movement detection

## Use Cases
- SOC teams need high-fidelity detection of post-compromise lateral movement with near-zero false positives
- Existing detection tools miss advanced attackers who avoid triggering threshold-based alerts
- The organization wants to detect credential abuse by planting fake credentials as honeytokens
- Network segmentation gaps need compensating detection controls
- **Lateral Movement Detection**: Attacker enumerates SMB shares and accesses honeypot file server — immediate high-fidelity alert
- **Credential Theft Discovery**: Mimikatz dumps honeytoken cached credentials — usage of fake account triggers alert
- **Cloud Key Compromise**: Stolen AWS canary token used from external IP — detects supply chain or insider compromise
- **Ransomware Early Warning**: Ransomware encrypts canary files on honeypot shares — early detection before production systems affected
- **Insider Threat Signal**: Employee accesses honeypot "salary database" — indicates unauthorized data exploration

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Attivo Networks, AWS Keys, Canarytokens.org, HoneyDB, SQL Queries), T Pot, Thinkst Canary

## Sources
- performing-deception-technology-deployment
