# Interactsh

## Overview
Interactsh is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Interactsh is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Interactsh works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- penetration testing
- ssrf
- owasp
- cloud security
- web security
- burpsuite
- web application security
- xxe
- xml injection

## Typical Workflow
- Map all application features that make server-side HTTP requests.
- Find all application endpoints that accept or process XML data.

## Use Cases
- During authorized penetration tests when the application fetches URLs provided by users (webhooks, URL previews, file imports)
- When testing cloud-hosted applications for access to instance metadata services
- For assessing PDF generators, screenshot services, or any feature that renders external content
- When evaluating microservice architectures for internal service access via SSRF
- During security assessments of APIs that accept URL parameters for data fetching
- During authorized penetration tests when the application processes XML input (SOAP APIs, file uploads, RSS feeds)
- When testing APIs that accept Content-Type: application/xml or text/xml
- For assessing XML parsers in file upload functionality (DOCX, XLSX, SVG, PDF)
- When evaluating SOAP-based web services for entity injection
- During security assessments of enterprise applications using XML configuration

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite Professional, DTD Finder, Gopherus, OWASP ZAP, Rbndr.us, Singularity, SSRFmap, XXEinjector

## Sources
- exploiting-server-side-request-forgery
- testing-for-xxe-injection-vulnerabilities
