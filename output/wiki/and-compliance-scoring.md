# And Compliance Scoring

## Overview
And Compliance Scoring is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Compliance Scoring is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Compliance Scoring works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- gcp
- forseti
- security command center
- iam audit
- cis benchmark

## Typical Workflow
- Enable SCC and set up Cloud Asset Inventory for comprehensive resource visibility.
- --format="table(name, assetType, location, project)"

## Use Cases
- When conducting periodic security assessments of GCP organizations and projects
- When onboarding new GCP projects and establishing security baselines
- When compliance mandates CIS GCP Foundations Benchmark evaluation
- When auditing IAM bindings, firewall rules, and storage ACLs across multiple GCP projects
- When building continuous security monitoring for GCP infrastructure

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Networking, Cloud Asset Inventory, Compute, Forseti Security, Gcloud CLI, ScoutSuite, Security Command Center, Storage

## Sources
- performing-gcp-security-assessment-with-forseti
