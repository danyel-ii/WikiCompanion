# Grype

## Overview
Grype is a dependency analysis tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Grype is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Grype works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- SBOM
- CycloneDX
- SPDX
- NVD
- CVE
- supply chain
- dependency analysis
- syft
- grype
- supply chain security
- vulnerability scanning
- container security

## Typical Workflow
- syft alpine:latest -o cyclonedx-json > sbom-cyclonedx.json
- syft dir:/path/to/project -o spdx-json > sbom-spdx.json
- syft docker:my-app-container -o cyclonedx-json > sbom.json
- Syft supports over 30 package ecosystems including npm, PyPI, Maven, Go modules, apt, apk, and RPM. The generated SBOM includes package names, versions, licenses, CPE identifiers, and PURL (Package URL) references.
- **CycloneDX JSON Structure:**
- Set up a GitHub Actions workflow that builds a Docker image and scans it with Trivy before pushing to a container registry.
- name: Container Security Scan
- 'docker-compose*.yml'
- Run comprehensive vulnerability scans against container images before and after pushing to the registry.
- trivy image --severity HIGH,CRITICAL myapp:latest

## Use Cases
- A new regulatory requirement (EO 14028, EU CRA) mandates SBOM analysis for software deliveries
- Security team needs to assess third-party risk by scanning vendor-provided SBOMs
- CI/CD pipeline requires automated vulnerability checks against generated SBOMs
- Incident response needs to determine if a newly disclosed CVE affects deployed software
- Procurement team requires supply chain risk assessment for a software acquisition
- Vendor SBOMs may be incomplete, missing shaded/bundled JAR files that embed log4j
- SPDX and CycloneDX version differences may affect parser compatibility
- NVD API rate limits can slow analysis when scanning hundreds of components without an API key
- When conducting security assessments that involve scanning container images with grype
- When following incident response procedures for related security events

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Filesystems, Syft, Trivy, And Attesting Container Images With Key Based Or Keyless Workflows, And IaC, And Kubernetes Resources, And Lifecycle Policies, And Policy Enforcement

## Sources
- analyzing-sbom-for-supply-chain-vulnerabilities
- scanning-container-images-with-grype
- scanning-containers-with-trivy-in-cicd
- securing-container-registry-images
