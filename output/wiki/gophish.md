# Gophish

## Overview
Gophish is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Gophish is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Gophish works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- **Admin Panel**: Web UI for campaign management (default port 3333)
- **Phishing Server**: Serves landing pages and tracks clicks (default port 80/443)
- **SMTP Configuration**: Outbound email sending profile
- **Campaign Engine**: Orchestrates email delivery, tracking, and reporting

## Typical Workflow
- Extract the email as an .EML or .MSG file (preserves headers)
- Analyze email headers to determine the true sender, relay path, and authentication results
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Return-Path:     billing@spoofed-domain[.]com
- From:            "IT Support" <support@corp-lookalike[.]com>
- Reply-To:        attacker@gmail[.]com (different from From)
- SPF:             FAIL (sender IP not authorized for domain)
- DKIM:            FAIL (signature invalid)
- DMARC:           FAIL (policy: none - no enforcement)
- IT support: Password expiration notice requiring immediate action

## Use Cases
- A user reports receiving a suspicious email via the phishing report button or abuse mailbox
- Email gateway detects a malicious email that bypassed initial filtering
- Threat intelligence indicates an active phishing campaign targeting the organization
- A user confirms they clicked a link or opened an attachment from a suspicious email
- Credentials have been entered on a suspected phishing page
- Only resetting passwords without revoking active sessions (attacker retains access via stolen session cookies)
- Measuring employee susceptibility to phishing attacks as part of a security awareness program
- Testing the effectiveness of email security controls (secure email gateway, DMARC, SPF, DKIM)
- Conducting the social engineering component of a red team exercise to gain initial access
- Establishing a baseline for phishing susceptibility before deploying security awareness training

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Detailed Analytics, And IOC Extraction, And Payload Delivery, Credential Harvesting, Email Templates, Evilginx2, King Phisher, Landing Pages

## Sources
- conducting-phishing-incident-response
- executing-phishing-simulation-campaign
- performing-phishing-simulation-with-gophish
