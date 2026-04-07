# Dom

## Overview
Dom is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Dom is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Dom works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- IOC
- VirusTotal
- AbuseIPDB
- MalwareBazaar
- MISP
- threat intelligence
- STIX
- NIST CSF
- soc
- phishing
- incident response
- email security

## Typical Workflow
- **IPv4/IPv6 address**: Check if RFC 1918 private (skip external enrichment), validate format
- **Domain/FQDN**: Defang for safe handling (`evil[.]com`), extract registered domain via tldextract
- **URL**: Extract domain + path separately; check for redirectors
- **File hash**: Identify hash type (MD5/SHA-1/SHA-256); prefer SHA-256 for uniqueness
- **Email address**: Split into domain (check MX/DMARC) and local part for pattern analysis
- Defang IOCs in documentation (replace `.` with `[.]` and `://` with `[://]`) to prevent accidental clicks.
- client = vt.Client("YOUR_VT_API_KEY")
- from email import policy
- msg = email.message_from_binary_file(f, policy=policy.default)
- from dataclasses import dataclass, field

## Use Cases
- A phishing email or alert generates IOCs (URLs, IP addresses, file hashes) requiring rapid triage
- Automated feeds deliver bulk IOCs that need confidence scoring before ingestion into blocking controls
- An incident investigation requires contextual enrichment of observed network artifacts
- A user reports a suspicious email via the phishing report button or helpdesk ticket
- Email security gateway flags a message that bypassed initial filters
- Automated detection identifies credential harvesting URLs or malicious attachments
- A phishing campaign targeting the organization requires scope assessment
- **Credential Phishing**: Fake O365 login page — check proxy for POST requests, force password resets for submitters
- **Macro-Enabled Document**: Word doc with VBA macro — sandbox shows PowerShell download cradle, check endpoints for execution
- **QR Code Phishing (Quishing)**: Email contains QR code linking to credential harvester — decode QR, submit URL to sandbox

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- URLScan.io, AbuseIPDB, Shodan, VirusTotal, And Banner Information For IP Enrichment, And Community Comments, And Domain Analysis With 70+ AV Engines, And Network Requests

## Sources
- analyzing-indicators-of-compromise
- investigating-phishing-email-incident
- performing-ioc-enrichment-automation
