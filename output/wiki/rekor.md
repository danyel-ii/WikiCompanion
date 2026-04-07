# Rekor

## Overview
Rekor is a devsecops tool that appears across devsecops workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Rekor is best understood as a devsecops tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Rekor works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- devsecops
- cicd
- code signing
- supply chain
- sigstore
- secure sdlc
- cosign
- rekor
- fulcio
- software signing
- keyless signing
- OIDC

## Typical Workflow
- gpg --full-generate-key --batch <<EOF
- Subkey-Curve: ed25519
- Name-Real: CI Build System
- Name-Email: ci-signing@company.com
- **Install from binary release**: Download the appropriate binary from the Cosign GitHub releases page and verify its checksum. On Linux: `curl -LO https://github.com/sigstore/cosign/releases/latest/download/cosign-linux-amd64 && chmod +x cosign-linux-amd64 && sudo mv cosign-linux-amd64 /usr/local/bin/cosign`
- **Verify installation**: Run `cosign version` to confirm the version and check connectivity to Sigstore services with `cosign initialize` which fetches the TUF root of trust
- **Configure custom infrastructure** (optional): If running a private Sigstore stack, set `--fulcio-url`, `--rekor-url`, and `--oidc-issuer` flags or use environment variables `COSIGN_REKOR_URL` and `COSIGN_FULCIO_URL`
- **Sign a container image**: Run `cosign sign <IMAGE_DIGEST>` which triggers an OIDC authentication flow. Cosign generates an ephemeral key pair, obtains a short-lived certificate from Fulcio binding the public key to the OIDC identity, signs the image digest, and records the signing event in Rekor. The private key is destroyed immediately after signing.
- **Sign a blob (file)**: Run `cosign sign-blob <file> --bundle artifact.sigstore.json` to sign arbitrary files. The bundle contains the signature, certificate, timestamp, and Rekor inclusion proof.

## Use Cases
- When establishing artifact integrity verification to prevent supply chain tampering
- When compliance requires cryptographic proof that build artifacts are authentic and unmodified
- When distributing software to customers who need to verify publisher identity
- When implementing zero-trust deployment pipelines that reject unsigned artifacts
- When meeting SLSA Level 2+ requirements for provenance and integrity
- Signing container images and software artifacts without managing long-lived cryptographic keys
- Establishing verifiable provenance for build outputs in CI/CD pipelines using OIDC identity binding
- Querying the Rekor transparency log to audit when and by whom an artifact was signed
- Verifying that container images pulled from registries were signed by authorized identities and issuers
- Integrating Sigstore verification into Kubernetes admission controllers to enforce signed-image policies

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Fulcio, And Attaching Attestations Using Sigstore Keyless Signing Or Traditional Key Based Signing, And Verifying Entries In The Rekor Transparency Log, Artifact Hash, Cosign, GPG, Notation, Or Public Key

## Sources
- implementing-code-signing-for-artifacts
- implementing-sigstore-for-software-signing
