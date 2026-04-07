# Browser Devtools

## Overview
Browser Devtools is a web application security tool that appears across web application security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Browser Devtools is best understood as a web-application-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Browser Devtools works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- penetration testing
- oauth
- oidc
- authentication
- web security
- authorization
- web application security
- websocket
- owasp
- real time
- burpsuite
- clickjacking

## Typical Workflow
- Identify the OAuth grant type, endpoints, and configuration.
- Identify WebSocket connections in the application.
- /chat /notifications /live /stream /realtime /api/ws; do
- Examine response headers for anti-clickjacking defenses.
- Browse the application and identify all POST/PUT/DELETE requests that modify server-side state.
- Check all API endpoints for CORS response headers.

## Use Cases
- During authorized penetration tests when the application uses OAuth 2.0 or OpenID Connect for authentication
- When assessing "Sign in with Google/Facebook/GitHub" social login implementations
- For testing single sign-on (SSO) flows between applications
- When evaluating API authorization using OAuth bearer tokens
- During security assessments of applications acting as OAuth providers or consumers
- During authorized penetration tests when the application uses WebSocket connections for real-time features
- When assessing chat applications, live notifications, trading platforms, or collaborative editing tools
- For testing WebSocket API endpoints for authentication and authorization flaws
- When evaluating real-time data streams for injection vulnerabilities
- During security assessments of applications using Socket.IO, SignalR, or native WebSocket APIs

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Burp Suite Professional, OWASP ZAP, Clickjack Tester, Cors Scanner, CORScanner, CSRFTester, Jwt.io, Oauth Tools.com

## Sources
- exploiting-oauth-misconfiguration
- exploiting-websocket-vulnerabilities
- performing-clickjacking-attack-test
- performing-csrf-attack-simulation
- testing-cors-misconfiguration
