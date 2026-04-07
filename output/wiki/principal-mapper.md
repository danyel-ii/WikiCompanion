# Principal Mapper

## Overview
Principal Mapper is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Principal Mapper is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Principal Mapper works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- cloud security
- aws
- privilege escalation
- iam
- pacu
- offensive security
- penetration testing
- iam exploitation

## Typical Workflow
- Establish the baseline permissions of the test principal before attempting escalation.
- aws sts get-caller-identity
- aws iam list-user-policies --user-name test-user
- aws iam list-attached-user-policies --user-name test-user
- aws iam list-groups-for-user --user-name test-user
- Set up a Pacu session with the test credentials and define the engagement scope.
- Pacu > set_keys --key-alias pentest-target

## Use Cases
- When conducting authorized penetration testing of AWS IAM configurations
- When validating that IAM policies follow the principle of least privilege
- When assessing the blast radius of a compromised AWS credential
- When building security reviews for IAM role and policy changes in CI/CD pipelines
- When evaluating cross-account trust relationships for privilege escalation risks
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
- CloudFox, Pacu, And Data Exfiltration, AWS Access Analyzer, AWS CloudTrail, Escalation, IAM Policy Simulator, Persistence

## Sources
- performing-aws-privilege-escalation-assessment
- performing-cloud-penetration-testing-with-pacu
