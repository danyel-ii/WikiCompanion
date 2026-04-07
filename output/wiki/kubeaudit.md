# Kubeaudit

## Overview
Kubeaudit is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Kubeaudit is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Kubeaudit works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- kubernetes
- rbac
- access control
- eks
- gke
- aks

## Typical Workflow
- Identify roles with wildcard permissions, secret access, pod exec, or escalation capabilities.
- data = json.load(sys.stdin)
- name = role['metadata']['name']
- verbs = rule.get('verbs', [])
- resources = rule.get('resources', [])

## Use Cases
- When performing security assessments of Kubernetes clusters (EKS, GKE, AKS, or self-managed)
- When validating that RBAC policies enforce least privilege for users and service accounts
- When investigating potential lateral movement or privilege escalation within a Kubernetes cluster
- When compliance audits require documentation of access controls and permissions
- When onboarding new teams to a shared cluster and defining appropriate RBAC policies

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Policy Generation, Bindings, Kubectl, KubiScan, Rakkess, Rbac Tool, Service Accounts), Visualization

## Sources
- auditing-kubernetes-cluster-rbac
