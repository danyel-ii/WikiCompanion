# Parameter Fuzzing

## Overview
Parameter Fuzzing is a api security tool that appears across api security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Parameter Fuzzing is best understood as a api-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Parameter Fuzzing works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- api security
- owasp
- rate limiting
- throttling
- brute force
- dos prevention
- web application pentest
- Burp Suite
- WSTG
- application security
- penetration testing

## Typical Workflow
- BASE_URL = "https://target-api.example.com/api/v1"
- Configure Burp Suite proxy and spider the application by browsing every page, form, and function manually while Burp captures the sitemap
- Use Burp's Discover Content feature to find hidden directories and files not linked from the visible application
- Identify the technology stack from response headers (`X-Powered-By`, `Server`), cookies (JSESSIONID = Java, PHPSESSID = PHP, ASP.NET_SessionId = .NET), and page extensions
- Enumerate endpoints using `ffuf -w /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -u https://target.com/FUZZ -mc 200,301,302,403`
- Review JavaScript files for hardcoded API endpoints, secrets, and client-side routing using Burp's JS Link Finder extension or `LinkFinder.py`
- Document all entry points: URL parameters, POST bodies, HTTP headers, cookies, file uploads, and WebSocket connections
- **Credential enumeration**: Submit valid and invalid usernames to identify differences in response (timing, message, HTTP status) that reveal valid accounts
- **Brute force protection**: Attempt 10-20 rapid login attempts with invalid credentials to verify account lockout and rate limiting are enforced
- **Password policy**: Test password creation with weak passwords (123456, password, single character) to verify policy enforcement

## Use Cases
- Testing whether API rate limiting can be circumvented to enable brute force attacks on authentication endpoints
- Assessing the effectiveness of API throttling controls against credential stuffing or account enumeration
- Evaluating if rate limits are enforced consistently across all API versions, methods, and encoding formats
- Testing if API gateway rate limiting can be bypassed through header manipulation or IP rotation
- Validating that rate limits protect against resource exhaustion and denial-of-service conditions
- Sending too many requests too fast and causing actual denial of service to the test environment
- Assuming the rate limit applies globally when it may be per-endpoint or per-method only
- Testing web applications before production deployment to identify exploitable vulnerabilities
- Conducting compliance-driven security assessments (PCI-DSS requirement 6.6, SOC 2 Type II)
- Validating remediation of previously identified web application vulnerabilities during retesting

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Ffuf, And Manual Testing Tools Including Repeater, And Payload Delivery Used Throughout Web Application Testing, And Rate Limit Evasion Techniques, And Sequencer, And Virtual Host Enumeration, Burp Suite Professional, Burp Suite Turbo Intruder

## Sources
- performing-api-rate-limiting-bypass
- performing-web-application-penetration-test
