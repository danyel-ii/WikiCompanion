# Urlscan

## Overview
Urlscan is a phishing defense tool that appears across phishing defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Urlscan is best understood as a phishing-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Urlscan works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- Newly registered domains (< 30 days)
- Free hosting services (Wix, GitHub Pages, Firebase)
- URL shorteners hiding final destination
- Excessive subdomain depth (login.microsoft.com.evil.com)
- Brand name in subdomain or path, not domain
- Non-standard ports
- Data URIs or base64-encoded content
- JavaScript-heavy pages with minimal HTML

## Typical Workflow
- Web: Navigate to https://urlscan.io and submit the suspicious URL
- API: POST https://urlscan.io/api/v1/scan/
- Header: API-Key: your-api-key
- Review screenshot for brand impersonation
- Check redirects and final destination URL
- Examine DOM for credential input forms
- Review network requests for data exfiltration endpoints
- Check SSL certificate validity and issuer
- Domains and IPs contacted
- URLs in redirect chain

## Use Cases
- When investigating security incidents that require analyzing malicious url with urlscan
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- analyzing-malicious-url-with-urlscan
