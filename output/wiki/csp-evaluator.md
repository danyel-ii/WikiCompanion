# Csp Evaluator

## Overview
Csp Evaluator is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Csp Evaluator is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Csp Evaluator works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- csp bypass
- content security policy
- xss
- script injection
- nonce bypass
- jsonp
- policy misconfiguration
- web application security
- penetration testing
- security headers
- csp
- hsts

## Typical Workflow
- Retrieve and catalog all security-related response headers.
- PAGES=("/" "/login" "/api/health" "/admin" "/account/settings" "/static/app.js")
- Set up the proxy and crawl the application to discover all input vectors.
- 1. Proxy > Options > Proxy Listeners: 127.0.0.1:8080
- 2. Target > Scope: Add target domain (e.g., *.target.example.com)
- 3. Dashboard > New Scan > Crawl only > Select target URL
- 4. Enable "Passive scanning" in Dashboard settings
- Install Burp CA: http://burpsuite → CA Certificate
- Import certificate into browser trust store
- Configure proxy: 127.0.0.1:8080

## Use Cases
- When XSS is found but execution is blocked by Content Security Policy
- During web application security assessments to evaluate CSP effectiveness
- When testing the robustness of CSP against known bypass techniques
- During bug bounty hunting where CSP prevents direct XSS exploitation
- When auditing CSP header configuration for security weaknesses
- During authorized web application security assessments as a standard configuration review
- When evaluating browser-level protections against XSS, clickjacking, and data leakage
- For compliance assessments requiring security header implementation (PCI DSS, SOC 2)
- When performing initial reconnaissance to identify easy-win security improvements
- During CI/CD pipeline security gate checks for new deployments

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite Professional, DOM Invader, Burp Suite, Csp Bypass, CSP Scanner, Dalfox, Hackvertor, Hardenize

## Sources
- performing-content-security-policy-bypass
- performing-security-headers-audit
- testing-for-xss-vulnerabilities-with-burpsuite
