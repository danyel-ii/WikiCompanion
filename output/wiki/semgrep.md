# Semgrep

## Overview
Semgrep is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Semgrep is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Semgrep works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- serverless security
- Lambda injection
- event source poisoning
- OWASP serverless
- IAM escalation
- CloudTrail
- cloud security
- devsecops
- cicd
- sast
- codeql
- semgrep

## Typical Workflow
- aws lambda list-functions --query 'Functions[*].[FunctionName,Runtime,Role,Handler,Layers]' --output table
- aws apigateway get-rest-apis --query 'items[*].[id,name]' --output table
- For each API, enumerate resources and methods to identify which Lambda functions receive user-controlled HTTP input.
- Create a CodeQL workflow that runs on pull requests and on a weekly schedule to catch vulnerabilities in existing code.
- name: "CodeQL Analysis"
- branches: [main, develop]
- cron: '30 2 * * 1'  # Weekly Monday 2:30 AM
- docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest
- -H "Authorization: <API_KEY>"
- Response includes the `hash` identifier used for subsequent API calls. MobSF automatically decompiles the APK using JADX, extracts the AndroidManifest.xml, and indexes all resources.

## Use Cases
- Auditing Lambda/Cloud Functions for code injection vulnerabilities where unsanitized event data flows into dangerous runtime functions (eval, exec, child_process.exec, os.system)
- Investigating incidents where an attacker modified function code or layers to establish persistence or exfiltrate data from the serverless environment
- Detecting privilege escalation paths where an adversary with lambda:UpdateFunctionCode and iam:PassRole can assume higher-privilege execution roles
- Analyzing event source poisoning attacks where malicious payloads are injected through S3 object uploads, SQS messages, DynamoDB stream records, or API Gateway requests that trigger function execution
- Building detection rules for SOC teams monitoring serverless workloads for unauthorized function modifications, layer additions, and suspicious invocation patterns
- Only checking the function code and missing malicious layers that persist even after the function code is reverted
- Failing to check if the attacker created new IAM users, access keys, or roles during the window the credentials were valid
- When development teams need automated code-level vulnerability detection on every pull request
- When security teams require consistent SAST enforcement across all repositories in an organization
- When migrating from manual or periodic security reviews to continuous security testing

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Dependency Review In GitHub, And Function URL Authorization Types, And Go Lambda Runtimes, And Insecure Configurations, And Missing Encryption, And Pickle Deserialization, And Suspicious Command Patterns, Android Lint

## Sources
- detecting-serverless-function-injection
- integrating-sast-into-github-actions-pipeline
- performing-android-app-static-analysis-with-mobsf
- securing-serverless-functions
