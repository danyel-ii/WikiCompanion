# Virustotal

## Overview
Virustotal is a forensics tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Virustotal is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Virustotal works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- email analysis
- phishing
- spf
- dkim
- dmarc
- header analysis
- digital forensics
- IOC
- VirusTotal
- AbuseIPDB
- MalwareBazaar

## Typical Workflow
- /cases/case-2024-001/email/
- **IPv4/IPv6 address**: Check if RFC 1918 private (skip external enrichment), validate format
- **Domain/FQDN**: Defang for safe handling (`evil[.]com`), extract registered domain via tldextract
- **URL**: Extract domain + path separately; check for redirectors
- **File hash**: Identify hash type (MD5/SHA-1/SHA-256); prefer SHA-256 for uniqueness
- **Email address**: Split into domain (check MX/DMARC) and local part for pattern analysis
- Defang IOCs in documentation (replace `.` with `[.]` and `://` with `[://]`) to prevent accidental clicks.
- client = vt.Client("YOUR_VT_API_KEY")
- 1. **Triage with pdfid**: Scan PDF for suspicious keywords (/JS, /JavaScript, /OpenAction, /Launch, /EmbeddedFile).
- 2. **Interactive Analysis**: Open PDF in peepdf interactive mode to explore object structure.

## Use Cases
- When investigating a suspected phishing email to determine its true origin
- For verifying sender authenticity and detecting email spoofing
- During incident response when a user has clicked a phishing link
- When tracing the delivery path and relay servers of a suspicious email
- For validating SPF, DKIM, and DMARC alignment to identify forgery
- A phishing email or alert generates IOCs (URLs, IP addresses, file hashes) requiring rapid triage
- Automated feeds deliver bulk IOCs that need confidence scoring before ingestion into blocking controls
- An incident investigation requires contextual enrichment of observed network artifacts
- When triaging suspicious PDF attachments from phishing emails
- During malware analysis of PDF-based exploit documents

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AbuseIPDB, CyberChef, Splunk, Cuckoo Sandbox, DOM, Elastic Security, Joe Sandbox, MalwareBazaar

## Sources
- analyzing-email-headers-for-phishing-investigation
- analyzing-indicators-of-compromise
- analyzing-malicious-pdf-with-peepdf
- building-automated-malware-submission-pipeline
- collecting-indicators-of-compromise
- conducting-malware-incident-response
- detecting-mobile-malware-behavior
- extracting-iocs-from-malware-samples
- hunting-for-beaconing-with-frequency-analysis
- hunting-for-command-and-control-beaconing
- performing-ioc-enrichment-automation
- performing-malware-hash-enrichment-with-virustotal
- triaging-security-incident-with-ir-playbook
