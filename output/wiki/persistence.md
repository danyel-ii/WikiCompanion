# Persistence

## Overview
Persistence is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Persistence is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Persistence works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- aws
- pacu
- penetration testing
- offensive security
- iam exploitation

## Typical Workflow
- Set up a Pacu session with the test credentials and define the engagement scope.
- Pacu > set_keys --key-alias pentest-target

## Use Cases
- When conducting authorized penetration testing of AWS environments
- When validating the effectiveness of IAM policies, SCPs, and permission boundaries
- When assessing the blast radius of a compromised set of AWS credentials
- When testing detection capabilities of GuardDuty, Security Hub, and custom alerting
- When building red team exercises against AWS cloud infrastructure

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Data Exfiltration, AWS CloudTrail, CloudFox, Escalation, Pacu, Principal Mapper, ScoutSuite

## Sources
- performing-cloud-penetration-testing-with-pacu
