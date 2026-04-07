# Kyverno

## Overview
Kyverno is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Kyverno is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Kyverno works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- devsecops
- cicd
- opa
- gatekeeper
- policy as code
- kubernetes
- secure sdlc
- kubernetes security
- eks
- aks
- gke
- pod security standards

## Typical Workflow
- helm repo add gatekeeper https://open-policy-agent.github.io/gatekeeper/charts
- --set audit.writeToRAMDisk=true
- apiVersion: templates.gatekeeper.sh/v1
- Apply Pod Security Admission labels at the namespace level to enforce the Restricted profile in production namespaces. Pod Security Policies were removed in Kubernetes v1.25 and replaced with Pod Security Admission.
- pod-security.kubernetes.io/enforce: restricted
- pod-security.kubernetes.io/enforce-version: latest
- pod-security.kubernetes.io/audit: restricted
- pod-security.kubernetes.io/warn: restricted

## Use Cases
- When enforcing organizational security policies across Kubernetes clusters programmatically
- When requiring admission control that blocks non-compliant resources from being created
- When implementing policy governance that can be version-controlled, tested, and audited
- When standardizing security rules across multiple clusters and environments
- When needing a flexible policy engine that extends beyond Kubernetes to APIs and CI/CD
- When deploying new managed Kubernetes clusters in production with security requirements
- When hardening existing EKS, AKS, or GKE clusters after a security audit or pentest finding
- When implementing workload identity to eliminate static cloud credentials in pods
- When enforcing pod security policies across namespaces to prevent container escapes
- When integrating runtime security monitoring for detecting container-level threats

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Distribution, And Generation Of Resources Based On Security Policies, And Kubernetes Resources With SBOM Generation, Calico, Conftest, Falco, File Systems, Gatekeeper

## Sources
- implementing-policy-as-code-with-open-policy-agent
- securing-kubernetes-on-cloud
