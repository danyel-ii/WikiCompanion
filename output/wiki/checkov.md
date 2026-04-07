# Checkov

## Overview
Checkov is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Checkov is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Checkov works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- terraform
- infrastructure as code
- checkov
- tfsec
- policy as code
- devsecops
- cicd
- iac security
- secure sdlc
- serverless
- lambda

## Typical Workflow
- Run Checkov for comprehensive IaC security scanning with built-in and custom policies.
- checkov -d ./terraform/ --framework terraform
- checkov -d ./terraform/ --check CKV_AWS_18,CKV_AWS_19,CKV_AWS_20,CKV_AWS_21
- checkov -d ./terraform/ --output json > checkov-results.json
- terraform init && terraform plan -out=tfplan
- terraform show -json tfplan > tfplan.json
- checkov -f tfplan.json --framework terraform_plan
- checkov -d ./terraform/ --framework terraform --output cli --output json --output-file-path ./results
- checkov -f main.tf --output json
- checkov -d ./terraform/ --check CKV_AWS_18,CKV_AWS_19,CKV_AWS_20

## Use Cases
- When integrating security scanning into CI/CD pipelines for Terraform deployments
- When reviewing Terraform plans and modules for security best practices before applying
- When building policy-as-code guardrails for cloud infrastructure provisioning
- When auditing existing Terraform state files to identify deployed misconfigurations
- When enforcing organizational security standards across multiple Terraform projects
- When provisioning cloud infrastructure with Terraform, CloudFormation, or Pulumi and needing automated security validation
- When compliance frameworks require evidence of infrastructure configuration review before deployment
- When preventing common cloud misconfigurations like public S3 buckets, open security groups, or unencrypted storage
- When establishing guardrails that block insecure infrastructure changes in pull requests
- When managing multi-cloud environments requiring consistent security policies across AWS, Azure, and GCP

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Prowler, Terrascan, Tfsec, And Dockerfile, And Resource Policies, And Runtime Versions, ARM, AWS Lambda

## Sources
- auditing-terraform-infrastructure-for-security
- implementing-infrastructure-as-code-security-scanning
- performing-serverless-function-security-review
- securing-aws-lambda-execution-roles
