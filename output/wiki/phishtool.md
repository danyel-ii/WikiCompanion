# Phishtool

## Overview
Phishtool is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Phishtool is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Phishtool works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- email analysis
- phishing
- spf
- dkim
- dmarc
- header analysis
- digital forensics
- phishing response
- email security
- credential compromise
- email header analysis

## Typical Workflow
- /cases/case-2024-001/email/
- Extract the email as an .EML or .MSG file (preserves headers)
- Analyze email headers to determine the true sender, relay path, and authentication results
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Return-Path:     billing@spoofed-domain[.]com
- From:            "IT Support" <support@corp-lookalike[.]com>
- Reply-To:        attacker@gmail[.]com (different from From)
- SPF:             FAIL (sender IP not authorized for domain)
- DKIM:            FAIL (signature invalid)
- DMARC:           FAIL (policy: none - no enforcement)

## Use Cases
- When investigating a suspected phishing email to determine its true origin
- For verifying sender authenticity and detecting email spoofing
- During incident response when a user has clicked a phishing link
- When tracing the delivery path and relay servers of a suspicious email
- For validating SPF, DKIM, and DMARC alignment to identify forgery
- A user reports receiving a suspicious email via the phishing report button or abuse mailbox
- Email gateway detects a malicious email that bypassed initial filtering
- Threat intelligence indicates an active phishing campaign targeting the organization
- A user confirms they clicked a link or opened an attachment from a suspicious email
- Credentials have been entered on a suspected phishing page

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Microsoft Defender For Office 365, Proofpoint TAP, AbuseIPDB, And IOC Extraction, And Network Requests, And Threat Explorer For Investigation, Any.Run, Cookies

## Sources
- analyzing-email-headers-for-phishing-investigation
- conducting-phishing-incident-response
- investigating-phishing-email-incident
