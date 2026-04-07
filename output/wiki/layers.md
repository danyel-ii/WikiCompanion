# Layers

## Overview
Layers is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Layers is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Layers works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- serverless
- lambda
- azure functions
- cloud functions
- security review

## Typical Workflow
- List all functions across cloud providers with their runtime, memory, timeout, and network settings.

## Use Cases
- When auditing serverless applications before production deployment
- When investigating potential data exposure through function environment variables or logs
- When assessing the blast radius of a compromised serverless function execution role
- When compliance reviews require documentation of serverless security controls
- When building secure-by-default templates for serverless deployments

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Resource Policies, And Runtime Versions, AWS Lambda, Bandit, Checkov, OWASP Serverless Top 10, Prowler, Public Access

## Sources
- performing-serverless-function-security-review
