# Cloud Asset Inventory

## Overview
Cloud Asset Inventory is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Cloud Asset Inventory is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Cloud Asset Inventory works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- gcp
- iam
- permissions audit
- service accounts
- policy analyzer
- forseti
- security command center
- iam audit
- cis benchmark

## Typical Workflow
- List all IAM bindings at organization, folder, and project levels to understand the full access landscape.
- --format=json > org-iam-policy.json
- Enable SCC and set up Cloud Asset Inventory for comprehensive resource visibility.
- --format="table(name, assetType, location, project)"

## Use Cases
- When performing security assessments of GCP organization or project IAM configurations
- When identifying service accounts with excessive permissions or unused access
- When compliance requirements mandate review of access controls and role assignments
- When investigating potential lateral movement through IAM misconfigurations
- When reducing the blast radius of compromised credentials by scoping down permissions
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
- Gcloud CLI, ScoutSuite, And Compliance Scoring, And Networking, And Role Bindings, Compute, Forseti Security, IAM Recommender

## Sources
- auditing-gcp-iam-permissions
- performing-gcp-security-assessment-with-forseti
