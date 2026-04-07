# Scripting Tests

## Overview
Scripting Tests is a penetration testing tool that appears across penetration testing workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Scripting Tests is best understood as a penetration-testing tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Scripting Tests works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- API security
- OWASP API Top10
- REST
- GraphQL
- authorization testing
- penetration testing

## Typical Workflow
- **Import API documentation**: Load OpenAPI/Swagger specs into Postman or Burp Suite to catalog all endpoints, methods, parameters, and authentication requirements
- **Reverse-engineer undocumented APIs**: Proxy the mobile app or web frontend through Burp Suite and exercise all features to capture API calls. Export the Burp sitemap as the baseline endpoint inventory.
- **Endpoint enumeration**: Fuzz for hidden API versions (`/api/v1/`, `/api/v2/`, `/api/internal/`), debug endpoints (`/api/debug`, `/api/health`, `/api/metrics`), and administrative endpoints
- **Document authentication mechanisms**: Identify if the API uses API keys, OAuth 2.0 Bearer tokens, JWT, session cookies, or mutual TLS
- Algorithm confusion: Change `alg` to `none` and remove the signature

## Use Cases
- Testing API endpoints for authorization flaws, injection vulnerabilities, and business logic bypasses
- Assessing the security of microservices architecture where APIs are the primary communication method
- Validating that API gateway protections (rate limiting, authentication, input validation) are properly enforced
- Testing third-party API integrations for data exposure and insecure configurations
- Evaluating GraphQL APIs for introspection disclosure, query complexity attacks, and authorization bypasses
- Testing only the endpoints documented in Swagger and missing undocumented or deprecated API versions
- Ignoring response body analysis for excessive data exposure when the UI only shows a subset of returned fields

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Analyzing, And Comparing Responses Across Authentication Contexts, And Replaying API Requests With Extensions Like Autorize For Automated Authorization Testing, And Tampering With JWT Tokens To Test Authentication Bypasses, Burp Suite Professional, GraphQL Voyager, Jwt_tool, Jwt.io

## Sources
- conducting-api-security-testing
