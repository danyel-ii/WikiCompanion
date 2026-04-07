# Dig

## Overview
Dig is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Dig is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Dig works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- email analysis
- phishing
- spf
- dkim
- dmarc
- header analysis
- digital forensics
- network security
- dns
- enumeration
- zone transfer

## Typical Workflow
- /cases/case-2024-001/email/
- dig NS example.com +short
- dig SOA example.com +short
- dig example.com ANY +noall +answer
- dig MX example.com +short

## Use Cases
- When investigating a suspected phishing email to determine its true origin
- For verifying sender authenticity and detecting email spoofing
- During incident response when a user has clicked a phishing link
- When tracing the delivery path and relay servers of a suspicious email
- For validating SPF, DKIM, and DMARC alignment to identify forgery
- Mapping the external attack surface of a target organization during authorized penetration tests
- Discovering hidden subdomains, internal hostnames, and IP addresses exposed via DNS records
- Testing whether DNS servers allow unauthorized zone transfers that leak the entire zone file
- Identifying mail servers, name servers, and service records for further targeted testing
- Validating DNS security configurations including DNSSEC, SPF, DKIM, and DMARC

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AbuseIPDB, Amass, And Data Source Integration, And DNS Databases, And Google Dork Queries, And Zone Transfer Queries, Brute Force, Cache Snooping

## Sources
- analyzing-email-headers-for-phishing-investigation
- performing-dns-enumeration-and-zone-transfer
