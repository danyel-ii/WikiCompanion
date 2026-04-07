# Then Replay With Regular User Token To Test Function Level Authorization

## Overview
Then Replay With Regular User Token To Test Function Level Authorization is a api security tool that appears across api security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Then Replay With Regular User Token To Test Function Level Authorization is best understood as a api-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Then Replay With Regular User Token To Test Function Level Authorization works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- api security
- owasp
- authorization
- bfla
- privilege escalation
- access control

## Typical Workflow
- BASE_URL = "https://target-api.example.com"
- ADMIN_PATH_PATTERNS = [

## Use Cases
- Testing whether regular users can access administrative API endpoints by direct URL access
- Assessing APIs for vertical privilege escalation where users can invoke functions above their role
- Evaluating if API gateways and middleware consistently enforce function-level access controls
- Testing role-based access control (RBAC) implementation across all API endpoints and HTTP methods
- Validating that API documentation does not expose admin endpoint paths that lack authorization
- GET /api/v1/admin/users returns 200 with all user data (BFLA - read)
- PUT /api/v1/admin/users/1002/role accepts role change (BFLA - write)
- DELETE /api/v1/audit/logs returns 200 (BFLA - destructive)

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Autorize, Burp Suite Professional, Ffuf, Nuclei, OWASP ZAP

## Sources
- exploiting-broken-function-level-authorization
