# Interact Sh

## Overview
Interact Sh is a oob detection tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Interact Sh is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Interact Sh works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- blind ssrf
- ssrf
- out of band
- burp collaborator
- cloud metadata
- internal network
- oob detection
- web application security
- xml injection
- xxe
- xpath injection
- xml parsing

## Typical Workflow
- -d '<?xml version="1.0"?><root><test>hello</test></root>'

## Use Cases
- When testing URL/webhook input parameters where server-side responses are not reflected
- During assessment of applications that fetch external resources (avatars, previews, imports)
- When testing PDF generators, image processors, or document converters for SSRF
- During cloud security assessments to detect metadata endpoint access
- When evaluating webhook functionality and URL validation implementations
- When testing applications that process XML input (SOAP APIs, XML-RPC, file uploads)
- During penetration testing of applications with XML parsers
- When assessing SAML-based authentication implementations
- When testing file import/export functionality that handles XML formats
- During API security testing of SOAP or XML-based web services

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Collaborator, Burp Suite, Content Type Converter, Gopherus, OXML_XXE, Rebinder.net, SSRFmap, Webhook.site

## Sources
- performing-blind-ssrf-exploitation
- testing-for-xml-injection-vulnerabilities
