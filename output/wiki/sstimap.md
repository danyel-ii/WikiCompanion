# Sstimap

## Overview
Sstimap is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sstimap is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sstimap works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- penetration testing
- ssti
- template injection
- rce
- web security
- owasp
- web application security

## Typical Workflow
- Find parameters where user input is processed by a template engine.
- '<%= 7*7 %>'        # ERB (Ruby), EJS (Node.js)

## Use Cases
- During authorized penetration tests when user input is rendered through a server-side template engine
- When testing error pages, email templates, PDF generators, or report builders that include user-supplied data
- For assessing applications that allow users to customize templates or notification messages
- When identifying potential SSTI in parameters that reflect arithmetic results (e.g., {{7*7}} returns 49)
- During security assessments of CMS platforms, marketing tools, or any application with templating functionality

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite Professional, Hackvertor, OWASP ZAP, PayloadsAllTheThings, Tplmap

## Sources
- exploiting-template-injection-vulnerabilities
