# Singularity

## Overview
Singularity is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Singularity is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Singularity works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- penetration testing
- ssrf
- owasp
- cloud security
- web security
- burpsuite
- web application security

## Typical Workflow
- Map all application features that make server-side HTTP requests.

## Use Cases
- During authorized penetration tests when the application fetches URLs provided by users (webhooks, URL previews, file imports)
- When testing cloud-hosted applications for access to instance metadata services
- For assessing PDF generators, screenshot services, or any feature that renders external content
- When evaluating microservice architectures for internal service access via SSRF
- During security assessments of APIs that accept URL parameters for data fetching

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite Professional, Gopherus, Interactsh, Rbndr.us, SSRFmap

## Sources
- exploiting-server-side-request-forgery
