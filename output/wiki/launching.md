# Launching

## Overview
Launching is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Launching is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Launching works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- AWS Nitro Enclaves
- confidential computing
- attestation
- KMS
- enclave isolation
- vsock
- PCR
- cloud security

## Typical Workflow
- sudo amazon-linux-extras install aws-nitro-enclaves-cli
- sudo yum install aws-nitro-enclaves-cli-devel -y
- sudo systemctl enable --now nitro-enclaves-allocator.service
- sudo systemctl enable --now docker
- sudo usermod -aG ne ec2-user
- sudo usermod -aG docker ec2-user

## Use Cases
- Processing sensitive data (PII, PHI, financial records, cryptographic secrets) that must be isolated from EC2 instance operators and administrators
- Building confidential computing pipelines where even root-level access on the parent instance cannot read enclave memory or state
- Implementing cryptographic attestation workflows that tie KMS decryption rights to a specific, verified enclave image hash
- Deploying multi-party computation environments where two or more enclaves authenticate each other via attestation before exchanging data
- Hardening existing workloads that currently decrypt secrets on the parent instance by migrating decryption into an enclave boundary
- Running the enclave in debug mode in production, which allows console access and breaks the confidentiality guarantee that regulators require
- Setting the KMS key policy to use only the IAM role without attestation conditions, which allows the parent instance to decrypt directly without the enclave
- Failing to reserve sufficient memory in allocator.yaml, causing the enclave to fail at launch with an opaque "resource not available" error

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Reading Enclave Console Output, AWS KMS, AWS Nitro Enclaves Sdk C, CloudTrail, Enabling Auditing Of Enclave Originated Cryptographic Operations, Encrypting Responses To The Enclave's Ephemeral Public Key, Kmstool Enclave Cli, Nitro Cli

## Sources
- implementing-aws-nitro-enclave-security
