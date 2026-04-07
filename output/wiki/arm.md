# Arm

## Overview
Arm is a malware analysis tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Arm is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Arm works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- malware
- Linux
- ELF
- reverse engineering
- server malware
- malware analysis
- cloud security
- terraform
- infrastructure as code
- checkov
- tfsec
- policy as code

## Typical Workflow
- readelf -h suspect_binary
- readelf -S suspect_binary
- readelf -l suspect_binary
- Run Checkov for comprehensive IaC security scanning with built-in and custom policies.
- checkov -d ./terraform/ --framework terraform
- checkov -d ./terraform/ --check CKV_AWS_18,CKV_AWS_19,CKV_AWS_20,CKV_AWS_21
- checkov -d ./terraform/ --output json > checkov-results.json
- terraform init && terraform plan -out=tfplan
- terraform show -json tfplan > tfplan.json
- checkov -f tfplan.json --framework terraform_plan

## Use Cases
- A Linux server or container has been compromised and suspicious ELF binaries are found
- Analyzing Linux botnets (Mirai, Gafgyt, XorDDoS), cryptominers, or ransomware
- Investigating malware targeting cloud infrastructure, Docker containers, or Kubernetes pods
- Reverse engineering Linux rootkits and kernel modules
- Analyzing cross-platform malware compiled for Linux x86_64, ARM, or MIPS architectures
- Running ldd on malware outside a sandbox (ldd can execute code in the binary)
- Missing companion scripts (.sh files) that may handle persistence and cleanup
- When integrating security scanning into CI/CD pipelines for Terraform deployments
- When reviewing Terraform plans and modules for security best practices before applying
- When building policy-as-code guardrails for cloud infrastructure provisioning

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Dockerfile, And Other Linux Architectures, And Process Operations, And Stepping Through Linux Binary Execution, Bridgecrew, Checkov, CloudFormation, Examining Memory

## Sources
- analyzing-linux-elf-malware
- auditing-terraform-infrastructure-for-security
