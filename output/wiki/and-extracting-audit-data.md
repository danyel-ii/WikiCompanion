# And Extracting Audit Data

## Overview
And Extracting Audit Data is a identity access management tool that appears across identity access management workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Extracting Audit Data is best understood as a identity-access-management tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Extracting Audit Data works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- SailPoint
- IdentityIQ
- access review
- entitlement certification
- IGA
- access governance
- identity access management

## Typical Workflow
- // SailPoint IdentityIQ BeanShell - Campaign Configuration
- import sailpoint.object.*;
- import sailpoint.api.*;
- // Define campaign schedule for quarterly manager certifications
- CertificationSchedule schedule = new CertificationSchedule();
- schedule.setName("Q1-2026-Manager-Access-Review");
- schedule.setDescription("Quarterly manager certification for all active employees");
- schedule.setType(Certification.Type.Manager);
- // Configure campaign scope

## Use Cases
- Quarterly or annual access certification campaigns are required for compliance (SOX, HIPAA, PCI-DSS)
- Organization needs automated manager-based access reviews for all direct reports
- Targeted entitlement reviews are needed for sensitive applications or high-privilege roles
- Separation of Duties (SOD) violations must be identified and remediated
- Orphaned accounts and excessive entitlements need to be discovered and cleaned up
- Audit findings require evidence of periodic access review and remediation tracking
- Setting campaigns too short (under 21 days) results in rubber-stamping and low-quality reviews

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Compliance Reporting, And Generating Compliance Evidence, And Trend Analysis, IdentityIQ Compliance Manager, IdentityIQ Report Builder, Lifecycle Management, Querying Status, SailPoint IdentityIQ

## Sources
- performing-entitlement-review-with-sailpoint-iiq
