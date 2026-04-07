# Urlscan Io

## Overview
Urlscan Io is a email header analysis tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Urlscan Io is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Urlscan Io works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- IOC
- VirusTotal
- AbuseIPDB
- MalwareBazaar
- MISP
- threat intelligence
- STIX
- NIST CSF
- phishing response
- email security
- credential compromise
- email header analysis

## Typical Workflow
- **IPv4/IPv6 address**: Check if RFC 1918 private (skip external enrichment), validate format
- **Domain/FQDN**: Defang for safe handling (`evil[.]com`), extract registered domain via tldextract
- **URL**: Extract domain + path separately; check for redirectors
- **File hash**: Identify hash type (MD5/SHA-1/SHA-256); prefer SHA-256 for uniqueness
- **Email address**: Split into domain (check MX/DMARC) and local part for pattern analysis
- Defang IOCs in documentation (replace `.` with `[.]` and `://` with `[://]`) to prevent accidental clicks.
- client = vt.Client("YOUR_VT_API_KEY")
- Extract the email as an .EML or .MSG file (preserves headers)
- Analyze email headers to determine the true sender, relay path, and authentication results
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## Use Cases
- A phishing email or alert generates IOCs (URLs, IP addresses, file hashes) requiring rapid triage
- Automated feeds deliver bulk IOCs that need confidence scoring before ingestion into blocking controls
- An incident investigation requires contextual enrichment of observed network artifacts
- A user reports receiving a suspicious email via the phishing report button or abuse mailbox
- Email gateway detects a malicious email that bypassed initial filtering
- Threat intelligence indicates an active phishing campaign targeting the organization
- A user confirms they clicked a link or opened an attachment from a suspicious email
- Credentials have been entered on a suspected phishing page
- Only resetting passwords without revoking active sessions (attacker retains access via stolen session cookies)
- A user reports a suspicious email via the phishing report button or helpdesk ticket

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- DOM, AbuseIPDB, Microsoft Defender For Office 365, PhishTool, Proofpoint TAP, Shodan, VirusTotal, And Banner Information For IP Enrichment

## Sources
- analyzing-indicators-of-compromise
- conducting-phishing-incident-response
- investigating-phishing-email-incident
- performing-ioc-enrichment-automation
