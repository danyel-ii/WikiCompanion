# And Threat Explorer For Investigation

## Overview
And Threat Explorer For Investigation is a soc operations tool that appears across soc operations workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Threat Explorer For Investigation is best understood as a soc-operations tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Threat Explorer For Investigation works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- phishing
- incident response
- email security
- splunk
- defender
- sandbox
- soc operations

## Typical Workflow
- from email import policy
- msg = email.message_from_binary_file(f, policy=policy.default)

## Use Cases
- A user reports a suspicious email via the phishing report button or helpdesk ticket
- Email security gateway flags a message that bypassed initial filters
- Automated detection identifies credential harvesting URLs or malicious attachments
- A phishing campaign targeting the organization requires scope assessment
- **Credential Phishing**: Fake O365 login page — check proxy for POST requests, force password resets for submitters
- **Macro-Enabled Document**: Word doc with VBA macro — sandbox shows PowerShell download cradle, check endpoints for execution
- **QR Code Phishing (Quishing)**: Email contains QR code linking to credential harvester — decode QR, submit URL to sandbox
- **Thread Hijacking**: Attacker uses compromised mailbox to reply in existing threads — check for impossible travel or new inbox rules
- **Voicemail Phishing**: Fake voicemail notification with HTML attachment — analyze attachment for redirect chains

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Network Requests, Any.Run, Cookies, DOM, Microsoft Defender For Office 365, PhishTool, Proofpoint TAP, Safe Attachments

## Sources
- investigating-phishing-email-incident
