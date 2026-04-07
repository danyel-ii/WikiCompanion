# Cloudflare Diagnostics

## Overview
Cloudflare Diagnostics is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Cloudflare Diagnostics is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Cloudflare Diagnostics works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- web cache deception
- cdn attack
- cache poisoning
- path normalization
- cloudflare
- cache key
- static resource
- web application security

## Typical Workflow
- for ext in css js png jpg gif svg ico woff woff2 pdf; do

## Use Cases
- When testing applications behind CDNs or reverse proxies (Cloudflare, Akamai, Varnish, Nginx)
- During assessment of authenticated page caching behavior
- When evaluating path normalization differences between caching and origin layers
- During bug bounty hunting on applications with aggressive caching policies
- When testing for sensitive data exposure through cache layer misconfiguration

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite, Curl, Param Miner, Varnish CLI, Web Cache Vulnerability Scanner

## Sources
- performing-web-cache-deception-attack
