# Cookies

## Overview
Cookies is a penetration testing tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Cookies is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Cookies works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- soc
- phishing
- incident response
- email security
- splunk
- defender
- sandbox
- soc operations
- XSS
- cross site scripting
- client side security
- OWASP A03

## Typical Workflow
- from email import policy
- msg = email.message_from_binary_file(f, policy=policy.default)
- **Reflected inputs**: Test every URL parameter, search field, error message, and HTTP header value that is reflected in the response
- **Stored inputs**: Identify features where input is saved and displayed later: user profiles, comments, forum posts, file names, support tickets, and chat messages
- **DOM inputs**: Identify client-side JavaScript that reads from `location.hash`, `location.search`, `document.referrer`, `window.name`, `postMessage`, or `localStorage` and writes to the DOM
- HTML body: `<div>USER_INPUT</div>`
- HTML attribute: `<input value="USER_INPUT">`
- JavaScript string: `var x = 'USER_INPUT';`
- URL context: `<a href="USER_INPUT">`
- CSS context: `<div style="color: USER_INPUT">`

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
- Testing web applications for client-side injection vulnerabilities as part of OWASP WSTG testing

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And DOM Content When Triggered, And Elements Tabs For Tracing DOM Based XSS Data Flows And Testing Payloads In Real Time, And Network Requests, And Threat Explorer For Investigation, Any.Run, Browser Developer Tools, Burp Suite Professional, DOM

## Sources
- investigating-phishing-email-incident
- testing-for-xss-vulnerabilities
