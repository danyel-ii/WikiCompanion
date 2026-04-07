# Falco

## Overview
Falco is a forensics tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Falco is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Falco works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- docker
- container forensics
- container security
- image analysis
- runtime investigation
- digital forensics
- cryptomining detection
- cloud abuse
- resource hijacking
- guardduty crypto
- cost anomaly

## Typical Workflow
- docker ps -a --no-trunc > /cases/case-2024-001/docker/container_list.txt
- CONTAINER_ID="abc123def456"
- docker save forensic-evidence:case-2024-001 > /cases/case-2024-001/docker/container_image.tar
- Deploy detection across four signal categories: cost anomalies, compute utilization, network traffic, and runtime processes.
- Apply Pod Security Admission labels at the namespace level to enforce the Restricted profile in production namespaces. Pod Security Policies were removed in Kubernetes v1.25 and replaced with Pod Security Admission.
- pod-security.kubernetes.io/enforce: restricted
- pod-security.kubernetes.io/enforce-version: latest
- pod-security.kubernetes.io/audit: restricted
- pod-security.kubernetes.io/warn: restricted

## Use Cases
- When investigating a compromised Docker container or container host
- For analyzing malicious Docker images pulled from registries
- During incident response involving containerized application breaches
- When examining container escape attempts or privilege escalation
- For auditing container configurations and identifying misconfigurations
- When cloud billing alerts indicate unexpected compute cost spikes
- When GuardDuty generates CryptoCurrency or Impact finding types
- When investigating compromised IAM credentials that may be used to launch mining instances
- When monitoring container workloads for unauthorized process execution
- When establishing proactive detection controls against resource hijacking attacks

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Trivy, Amazon Detective, Amazon GuardDuty, And Generation Of Resources Based On Security Policies, And Kubernetes Resources With SBOM Generation, And Runtime Process Monitoring, AWS Cost Anomaly Detection, Calico

## Sources
- analyzing-docker-container-forensics
- detecting-cryptomining-in-cloud
- performing-cloud-native-forensics-with-falco
- securing-kubernetes-on-cloud
