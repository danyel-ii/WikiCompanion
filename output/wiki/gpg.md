# Gpg

## Overview
Gpg is a devsecops tool that appears across devsecops workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Gpg is best understood as a devsecops tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Gpg works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- devsecops
- cicd
- code signing
- supply chain
- sigstore
- secure sdlc

## Typical Workflow
- gpg --full-generate-key --batch <<EOF
- Subkey-Curve: ed25519
- Name-Real: CI Build System
- Name-Email: ci-signing@company.com

## Use Cases
- When establishing artifact integrity verification to prevent supply chain tampering
- When compliance requires cryptographic proof that build artifacts are authentic and unmodified
- When distributing software to customers who need to verify publisher identity
- When implementing zero-trust deployment pipelines that reject unsigned artifacts
- When meeting SLSA Level 2+ requirements for provenance and integrity

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Fulcio, Notation, Rekor, Sigstore

## Sources
- implementing-code-signing-for-artifacts
