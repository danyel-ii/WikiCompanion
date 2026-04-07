# Ai

## Overview
Ai is a fraud detection tool that appears across phishing defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Ai is best understood as a phishing-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Ai works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- bec
- ai
- nlp
- machine learning
- email security
- behavioral analytics
- impersonation
- fraud detection
- phishing defense

## Typical Workflow
- Select API-based solution (Abnormal Security, Tessian, Ironscales) or enhance existing SEG
- Connect to Microsoft Graph API or Google Workspace API
- Allow 48-hour baseline learning period on historical email data
- Configure integration to scan inbound, outbound, and internal email
- Verify API permissions for message access and remediation
- AI learns normal communication patterns: who emails whom, frequency, tone
- Establish writing style profiles for each user (vocabulary, sentence structure)
- Map typical request types per role (finance processes payments, HR handles PII)
- Baseline email metadata: typical sending times, devices, locations
- Flag deviations from established baselines as anomalous

## Use Cases
- When investigating security incidents that require detecting business email compromise with ai
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- detecting-business-email-compromise-with-ai
