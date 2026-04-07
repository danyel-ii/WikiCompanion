# Filesystems

## Overview
Filesystems is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Filesystems is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Filesystems works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- devsecops
- cicd
- trivy
- container security
- vulnerability scanning
- secure sdlc
- cloud security
- containers
- registry
- image scanning
- cosign
- supply chain

## Typical Workflow
- Set up a GitHub Actions workflow that builds a Docker image and scans it with Trivy before pushing to a container registry.
- name: Container Security Scan
- 'docker-compose*.yml'
- Run comprehensive vulnerability scans against container images before and after pushing to the registry.
- trivy image --severity HIGH,CRITICAL myapp:latest
- trivy image --severity HIGH,CRITICAL 123456789012.dkr.ecr.us-east-1.amazonaws.com/myapp:latest
- trivy image --format json --output trivy-results.json myapp:latest
- trivy image --scanners vuln,misconfig,secret myapp:latest
- trivy image --format spdx-json --output sbom.json myapp:latest

## Use Cases
- When building Docker container images in CI/CD and needing automated vulnerability scanning before registry push
- When establishing quality gates that prevent images with critical or high CVEs from reaching production
- When compliance requirements mandate vulnerability scanning of all container images before deployment
- When scanning IaC files (Dockerfiles, Kubernetes manifests) alongside container image scanning
- When needing a single tool to scan OS packages, language-specific dependencies, and misconfigurations
- When establishing security controls for container image registries (ECR, ACR, GCR, Docker Hub)
- When building CI/CD pipelines that enforce vulnerability scanning before image promotion
- When implementing image signing and verification to prevent supply chain attacks
- When auditing existing registries for vulnerable, unscanned, or unsigned images
- When compliance requires software bill of materials (SBOM) for deployed container images

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Grype, Trivy, And Attesting Container Images With Key Based Or Keyless Workflows, And IaC, And Kubernetes Resources, And Lifecycle Policies, AWS ECR, Cosign

## Sources
- scanning-containers-with-trivy-in-cicd
- securing-container-registry-images
