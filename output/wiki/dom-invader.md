# Dom Invader

## Overview
Dom Invader is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Dom Invader is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Dom Invader works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- prototype pollution
- javascript
- node js
- xss
- rce
- property injection
- dom xss
- server side pollution
- web application security
- csp bypass
- content security policy
- script injection

## Typical Workflow
- // Client-side: Test URL-based sources
- // Navigate to: http://target.com/page?__proto__[polluted]=true
- // Or use constructor: http://target.com/page?constructor[prototype][polluted]=true
- // ?__proto__[key]=value
- // ?__proto__.key=value
- // ?constructor[prototype][key]=value
- // ?constructor.prototype.key=value
- Set up the proxy and crawl the application to discover all input vectors.
- 1. Proxy > Options > Proxy Listeners: 127.0.0.1:8080
- 2. Target > Scope: Add target domain (e.g., *.target.example.com)

## Use Cases
- When testing Node.js or JavaScript-heavy web applications
- During assessment of APIs accepting deep-merged JSON objects
- When testing client-side JavaScript frameworks for DOM XSS via prototype pollution
- During code review of object merge/clone/extend operations
- When evaluating npm packages for prototype pollution gadgets
- When XSS is found but execution is blocked by Content Security Policy
- During web application security assessments to evaluate CSP effectiveness
- When testing the robustness of CSP against known bypass techniques
- During bug bounty hunting where CSP prevents direct XSS exploitation
- When auditing CSP header configuration for security weaknesses

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- CSP Evaluator, Burp Suite, Burp Suite Professional, Csp Bypass, CSP Scanner, Dalfox, ESLint Security Plugin, Hackvertor

## Sources
- exploiting-prototype-pollution-in-javascript
- performing-content-security-policy-bypass
- testing-for-xss-vulnerabilities-with-burpsuite
