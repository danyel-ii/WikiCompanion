# AWS Config

## Overview
AWS Config is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
AWS Config is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
AWS Config works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- serverless security
- Lambda injection
- event source poisoning
- OWASP serverless
- IAM escalation
- CloudTrail
- cloud security
- aws
- config rules
- compliance
- automation
- remediation

## Typical Workflow
- aws lambda list-functions --query 'Functions[*].[FunctionName,Runtime,Role,Handler,Layers]' --output table
- aws apigateway get-rest-apis --query 'items[*].[id,name]' --output table
- For each API, enumerate resources and methods to identify which Lambda functions receive user-controlled HTTP input.
- Set up the Config recorder and delivery channel in each target account.
- aws iam create-service-linked-role --aws-service-name config.amazonaws.com
- --recording-group allSupported=true,includeGlobalResourceTypes=true
- Enable Security Hub in the management account and select compliance standards to evaluate.
- --control-finding-generator SECURITY_CONTROL
- Activate Security Hub in the delegated administrator account and enable security standards. AWS Security Hub CSPM supports CIS AWS Foundations Benchmark v5.0, AWS Foundational Security Best Practices, PCI DSS v3.2.1, and NIST SP 800-53.
- --standards-subscription-requests '[

## Use Cases
- Auditing Lambda/Cloud Functions for code injection vulnerabilities where unsanitized event data flows into dangerous runtime functions (eval, exec, child_process.exec, os.system)
- Investigating incidents where an attacker modified function code or layers to establish persistence or exfiltrate data from the serverless environment
- Detecting privilege escalation paths where an adversary with lambda:UpdateFunctionCode and iam:PassRole can assume higher-privilege execution roles
- Analyzing event source poisoning attacks where malicious payloads are injected through S3 object uploads, SQS messages, DynamoDB stream records, or API Gateway requests that trigger function execution
- Building detection rules for SOC teams monitoring serverless workloads for unauthorized function modifications, layer additions, and suspicious invocation patterns
- Only checking the function code and missing malicious layers that persist even after the function code is reverted
- Failing to check if the attacker created new IAM users, access keys, or roles during the window the credentials were valid
- When establishing continuous compliance monitoring for AWS resources against regulatory standards
- When implementing automated detection and remediation of configuration drift
- When building a compliance dashboard across multiple AWS accounts using AWS Organizations

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Prowler, Amazon EventBridge, AWS Security Hub, Access Metrics, Amazon Macie, And Function URL Authorization Types, And Go Lambda Runtimes, And HIPAA Compliance

## Sources
- detecting-serverless-function-injection
- implementing-aws-config-rules-for-compliance
- implementing-aws-security-hub
- implementing-aws-security-hub-compliance
- remediating-s3-bucket-misconfiguration
- securing-aws-iam-permissions
