# Intruder

## Overview
Intruder is a penetration testing tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Intruder is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Intruder works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- web application pentest
- OWASP
- Burp Suite
- WSTG
- application security
- penetration testing

## Typical Workflow
- Configure Burp Suite proxy and spider the application by browsing every page, form, and function manually while Burp captures the sitemap
- Use Burp's Discover Content feature to find hidden directories and files not linked from the visible application
- Identify the technology stack from response headers (`X-Powered-By`, `Server`), cookies (JSESSIONID = Java, PHPSESSID = PHP, ASP.NET_SessionId = .NET), and page extensions
- Enumerate endpoints using `ffuf -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -u https://target.com/FUZZ -mc 200,301,302,403`
- Review JavaScript files for hardcoded API endpoints, secrets, and client-side routing using Burp's JS Link Finder extension or `LinkFinder.py`
- Document all entry points: URL parameters, POST bodies, HTTP headers, cookies, file uploads, and WebSocket connections
- **Credential enumeration**: Submit valid and invalid usernames to identify differences in response (timing, message, HTTP status) that reveal valid accounts
- **Brute force protection**: Attempt 10-20 rapid login attempts with invalid credentials to verify account lockout and rate limiting are enforced
- **Password policy**: Test password creation with weak passwords (123456, password, single character) to verify policy enforcement
- **Multi-factor authentication bypass**: Test for MFA bypass by directly accessing post-authentication pages, manipulating MFA tokens, or replaying successful MFA responses

## Use Cases
- Testing web applications before production deployment to identify exploitable vulnerabilities
- Conducting compliance-driven security assessments (PCI-DSS requirement 6.6, SOC 2 Type II)
- Validating remediation of previously identified web application vulnerabilities during retesting
- Assessing third-party web applications before integration into the organization's environment
- Evaluating custom-developed web applications where automated scanning alone is insufficient
- Testing only the frontend while ignoring the API layer that lacks independent authorization checks
- Missing business logic flaws by relying solely on automated scanning without manual testing

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Manual Testing Tools Including Repeater, And Payload Delivery Used Throughout Web Application Testing, And Sequencer, And Virtual Host Enumeration, Burp Suite Professional, Credential Testing, Ffuf, Nuclei

## Sources
- performing-web-application-penetration-test
