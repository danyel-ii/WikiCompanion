# Rpki

## Overview
Rpki is a network security tool that appears across network security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Rpki is best understood as a network-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Rpki works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- bgp
- rpki
- route origin validation
- rov
- roa
- route hijacking
- internet routing
- bgp security
- prefix hijack
- network security

## Typical Workflow
- **ARIN (North America):**
- 1. Log into ARIN Online portal
- 2. Navigate to Routing Security > Route Origin Authorizations
- Prefix: 198.51.100.0/24
- Max Length: /24 (set equal to prefix length to prevent sub-prefix hijacking)
- **RIPE NCC (Europe):**
- 1. Log into RIPE NCC LIR Portal
- 2. Navigate to Certification (RPKI) > ROAs
- 3. Create ROA with prefix, origin AS, and max prefix length

## Use Cases
- When deploying or configuring implementing bgp security with rpki capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- implementing-bgp-security-with-rpki
