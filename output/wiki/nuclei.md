# Nuclei

## Overview
Nuclei is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Nuclei is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Nuclei works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- API security
- OWASP API Top10
- REST
- GraphQL
- authorization testing
- penetration testing
- owasp
- authorization
- bfla
- privilege escalation
- access control
- broken link hijacking

## Typical Workflow
- **Import API documentation**: Load OpenAPI/Swagger specs into Postman or Burp Suite to catalog all endpoints, methods, parameters, and authentication requirements
- **Reverse-engineer undocumented APIs**: Proxy the mobile app or web frontend through Burp Suite and exercise all features to capture API calls. Export the Burp sitemap as the baseline endpoint inventory.
- **Endpoint enumeration**: Fuzz for hidden API versions (`/api/v1/`, `/api/v2/`, `/api/internal/`), debug endpoints (`/api/debug`, `/api/health`, `/api/metrics`), and administrative endpoints
- **Document authentication mechanisms**: Identify if the API uses API keys, OAuth 2.0 Bearer tokens, JWT, session cookies, or mutual TLS
- Algorithm confusion: Change `alg` to `none` and remove the signature
- BASE_URL = "https://target-api.example.com"
- ADMIN_PATH_PATTERNS = [
- --exclude-internal --filter-level 3 -o broken_links.txt
- // Client-side: Test URL-based sources
- // Navigate to: http://target.com/page?__proto__[polluted]=true

## Use Cases
- Testing API endpoints for authorization flaws, injection vulnerabilities, and business logic bypasses
- Assessing the security of microservices architecture where APIs are the primary communication method
- Validating that API gateway protections (rate limiting, authentication, input validation) are properly enforced
- Testing third-party API integrations for data exposure and insecure configurations
- Evaluating GraphQL APIs for introspection disclosure, query complexity attacks, and authorization bypasses
- Testing only the endpoints documented in Swagger and missing undocumented or deprecated API versions
- Ignoring response body analysis for excessive data exposure when the UI only shows a subset of returned fields
- Testing whether regular users can access administrative API endpoints by direct URL access
- Assessing APIs for vertical privilege escalation where users can invoke functions above their role
- Evaluating if API gateways and middleware consistently enforce function-level access controls

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite, Ffuf, OWASP ZAP, Burp Suite Professional, Zaproxy, Amass, Jwt_tool, Postman

## Sources
- conducting-api-security-testing
- exploiting-broken-function-level-authorization
- exploiting-broken-link-hijacking
- exploiting-nosql-injection-vulnerabilities
- exploiting-prototype-pollution-in-javascript
- exploiting-race-condition-vulnerabilities
- integrating-dast-with-owasp-zap-in-pipeline
- performing-api-inventory-and-discovery
- performing-subdomain-enumeration-with-subfinder
- performing-web-application-penetration-test
- testing-api-authentication-weaknesses
- testing-for-email-header-injection
- testing-for-host-header-injection
- testing-for-open-redirect-vulnerabilities
