# Landing Pages

## Overview
Landing Pages is a penetration testing tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Landing Pages is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Landing Pages works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- phishing simulation
- social engineering
- GoPhish
- email security
- security awareness
- penetration testing

## Typical Workflow
- IT support: Password expiration notice requiring immediate action
- HR department: Benefits enrollment, policy acknowledgment, W-2/tax document
- Executive impersonation: Urgent request from CEO/CFO to review a document
- Vendor/supplier: Invoice requiring review, delivery notification
- Cloud services: Microsoft 365 shared document, Google Drive access, Zoom meeting invitation
- **Target segmentation**: Divide employees into groups by department, role, or access level. High-value targets (finance, IT admin, executives) may receive more sophisticated pretexts.
- **Timing**: Schedule sends during business hours, preferably Tuesday-Thursday when email engagement is highest. Avoid holidays, mass layoff periods, or other sensitive times.
- **Success metrics**: Define what constitutes campaign success: email open rate, link click rate, credential submission rate, report rate (employees who report the phish to IT)
- **Domain registration**: Register a domain that resembles the target organization's domain (typosquatting, homograph, or brand-adjacent). Examples: `target-corp.com`, `targetcorp-portal.com`, `targetsupport.net`

## Use Cases
- Measuring employee susceptibility to phishing attacks as part of a security awareness program
- Testing the effectiveness of email security controls (secure email gateway, DMARC, SPF, DKIM)
- Conducting the social engineering component of a red team exercise to gain initial access
- Establishing a baseline for phishing susceptibility before deploying security awareness training
- Validating that incident response procedures work when employees report suspicious emails
- Using overly aggressive or threatening pretexts that cause employee anxiety or legal issues
- Sending all emails simultaneously, overwhelming the email server or triggering bulk-send detection

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Detailed Analytics, And Payload Delivery, Credential Harvesting, Email Templates, Evilginx2, GoPhish, King Phisher, SET

## Sources
- executing-phishing-simulation-campaign
