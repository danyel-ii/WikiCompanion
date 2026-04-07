# Sailpoint Identityiq

## Overview
Sailpoint Identityiq is a identity access management tool that appears across identity access management workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sailpoint Identityiq is best understood as a identity-access-management tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sailpoint Identityiq works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- identity governance
- lifecycle management
- JML
- access provisioning
- RBAC
- IGA
- identity access management
- SailPoint
- IdentityIQ
- access review
- entitlement certification
- access governance

## Typical Workflow
- Identity Lifecycle State Machine
- Defines all identity states and valid transitions with automated actions.
- // SailPoint IdentityIQ BeanShell - Campaign Configuration
- import sailpoint.object.*;
- import sailpoint.api.*;
- // Define campaign schedule for quarterly manager certifications
- CertificationSchedule schedule = new CertificationSchedule();
- schedule.setName("Q1-2026-Manager-Access-Review");
- schedule.setDescription("Quarterly manager certification for all active employees");
- schedule.setType(Certification.Type.Manager);

## Use Cases
- Organization lacks automated joiner-mover-leaver (JML) processes for identity management
- Access provisioning is manual and takes days, creating productivity loss and security gaps
- Former employees retain access to systems after termination (orphaned accounts)
- Role explosion has created thousands of roles with unclear ownership and overlapping entitlements
- Compliance requirements mandate documented identity lifecycle processes (SOX, HIPAA, GDPR)
- No centralized visibility into who has access to what across the enterprise
- Mining roles without business validation creates technical roles that do not align with organizational structure
- Quarterly or annual access certification campaigns are required for compliance (SOX, HIPAA, PCI-DSS)
- Organization needs automated manager-based access reviews for all direct reports
- Targeted entitlement reviews are needed for sensitive applications or high-privilege roles

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Access Certifications, Access Governance, Access Reviews, And Application Access Management, And Automated Provisioning, And Compliance Reporting, And Entitlement Management, And Extracting Audit Data

## Sources
- building-identity-governance-lifecycle-process
- performing-entitlement-review-with-sailpoint-iiq
