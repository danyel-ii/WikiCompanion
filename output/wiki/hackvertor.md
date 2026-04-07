# Hackvertor

## Overview
Hackvertor is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Hackvertor is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Hackvertor works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- penetration testing
- ssti
- template injection
- rce
- web security
- owasp
- web application security
- xss
- burpsuite
- cross site scripting

## Typical Workflow
- Find parameters where user input is processed by a template engine.
- '<%= 7*7 %>'        # ERB (Ruby), EJS (Node.js)
- Set up the proxy and crawl the application to discover all input vectors.
- 1. Proxy > Options > Proxy Listeners: 127.0.0.1:8080
- 2. Target > Scope: Add target domain (e.g., *.target.example.com)
- 3. Dashboard > New Scan > Crawl only > Select target URL
- 4. Enable "Passive scanning" in Dashboard settings
- Install Burp CA: http://burpsuite → CA Certificate
- Import certificate into browser trust store
- Configure proxy: 127.0.0.1:8080

## Use Cases
- During authorized penetration tests when user input is rendered through a server-side template engine
- When testing error pages, email templates, PDF generators, or report builders that include user-supplied data
- For assessing applications that allow users to customize templates or notification messages
- When identifying potential SSTI in parameters that reflect arithmetic results (e.g., {{7*7}} returns 49)
- During security assessments of CMS platforms, marketing tools, or any application with templating functionality
- During authorized web application penetration testing to find reflected, stored, and DOM-based XSS
- When validating XSS findings reported by automated vulnerability scanners
- For testing the effectiveness of Content Security Policy (CSP) and XSS filters
- When assessing client-side security of single-page applications (SPAs)
- During bug bounty programs targeting XSS vulnerabilities

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite Professional, CSP Evaluator, Dalfox, DOM Invader, OWASP ZAP, PayloadsAllTheThings, SSTImap, Tplmap

## Sources
- exploiting-template-injection-vulnerabilities
- testing-for-xss-vulnerabilities-with-burpsuite
