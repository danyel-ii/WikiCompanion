# Lifecycle Management

## Overview
Lifecycle Management is a cloud security tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Lifecycle Management is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Lifecycle Management works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- okta
- cloud identity
- single sign on
- phishing resistant mfa
- identity lifecycle
- cloud security
- SailPoint
- IdentityIQ
- access review
- entitlement certification
- IGA
- access governance

## Typical Workflow
- Set up SAML 2.0 or OIDC federation between Okta and each cloud provider console for centralized authentication.
- 1. In Okta Admin Console: Applications > Add Application > AWS Account Federation
- Single Sign-On URL: https://signin.aws.amazon.com/saml
- Audience URI: urn:amazon:webservices
- 3. Download Okta metadata XML
- 4. In AWS IAM: Create Identity Provider (SAML) with Okta metadata
- // SailPoint IdentityIQ BeanShell - Campaign Configuration
- import sailpoint.object.*;
- import sailpoint.api.*;
- // Define campaign schedule for quarterly manager certifications

## Use Cases
- When centralizing authentication across AWS, Azure, and GCP console access through a single identity provider
- When implementing phishing-resistant MFA to replace SMS or TOTP-based authentication
- When automating user provisioning and deprovisioning across cloud platforms and SaaS applications
- When enforcing adaptive access policies based on device compliance, user risk, and network context
- When auditing identity-related security controls for SOC 2 or zero trust compliance
- Quarterly or annual access certification campaigns are required for compliance (SOX, HIPAA, PCI-DSS)
- Organization needs automated manager-based access reviews for all direct reports
- Targeted entitlement reviews are needed for sensitive applications or high-privilege roles
- Separation of Duties (SOD) violations must be identified and remediated
- Orphaned accounts and excessive entitlements need to be discovered and cleaned up

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Adaptive Access Policies, And Compliance Reporting, And Extracting Audit Data, And Generating Compliance Evidence, And Trend Analysis, AWS IAM Identity Center, Azure AD External Identities, IdentityIQ Compliance Manager

## Sources
- managing-cloud-identity-with-okta
- performing-entitlement-review-with-sailpoint-iiq
