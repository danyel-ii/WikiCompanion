# Param Miner

## Overview
Param Miner is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Param Miner is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Param Miner works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- mass assignment
- api security
- privilege escalation
- rest api
- autobinding
- parameter injection
- owasp api
- web application security
- http parameter pollution
- hpp
- waf bypass
- input validation

## Typical Workflow
- arjun -u http://target.com/api/users/me -m JSON -H "Authorization: Bearer USER_TOKEN"
- for ext in css js png jpg gif svg ico woff woff2 pdf; do
- Determine what caching infrastructure is in use and how the cache key is constructed.
- BASE_URL = "https://target-api.example.com/api/v1"
- writable_endpoints = [

## Use Cases
- When testing REST APIs that accept JSON input for creating or updating resources
- During API security assessments of applications using ORM frameworks (Rails, Django, Laravel, Spring)
- When testing user registration, profile update, or account management endpoints
- During bug bounty hunting on applications with CRUD API operations
- When evaluating role-based access control implementation in API-driven applications
- When testing web applications for input validation bypass vulnerabilities
- During WAF evasion testing to split attack payloads across duplicate parameters
- When assessing how different technology stacks handle duplicate HTTP parameters
- During API security testing to identify parameter precedence issues
- When testing OAuth or payment processing flows for parameter manipulation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite, Arjun, OWASP ZAP, Burp Suite Professional, Curl, Ffuf, Postman, Web Cache Vulnerability Scanner

## Sources
- exploiting-mass-assignment-in-rest-apis
- performing-http-parameter-pollution-attack
- performing-web-cache-deception-attack
- performing-web-cache-poisoning-attack
- testing-api-for-mass-assignment-vulnerability
- testing-for-host-header-injection
