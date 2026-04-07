# Burp Collaborator

## Overview
Burp Collaborator is a oob detection tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Burp Collaborator is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Burp Collaborator works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- blind ssrf
- ssrf
- out of band
- burp collaborator
- cloud metadata
- internal network
- oob detection
- web application security
- host header injection
- password reset poisoning
- cache poisoning
- virtual host

## Typical Workflow

## Use Cases
- When testing URL/webhook input parameters where server-side responses are not reflected
- During assessment of applications that fetch external resources (avatars, previews, imports)
- When testing PDF generators, image processors, or document converters for SSRF
- During cloud security assessments to detect metadata endpoint access
- When evaluating webhook functionality and URL validation implementations
- When testing password reset functionality for token theft via host manipulation
- During assessment of web caching behavior influenced by Host header values
- When testing virtual host routing and server-side request processing
- During penetration testing of applications behind reverse proxies or load balancers
- When evaluating SSRF potential through Host header manipulation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite, Ffuf, Gobuster Vhost, Gopherus, Interact.sh, Nuclei, Param Miner, Rebinder.net

## Sources
- performing-blind-ssrf-exploitation
- testing-for-host-header-injection
