# Restic

## Overview
Restic is a incident response tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Restic is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Restic works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- restic
- backup
- immutable
- ransomware
- s3
- object lock
- worm
- recovery
- ransomware defense
- incident response
- disaster recovery
- rto

## Typical Workflow
- Enable S3 Object Lock in Compliance mode on the backup bucket to prevent any principal (including root) from deleting or modifying objects during the retention period. Set retention to match your backup window requirements (typically 30-90 days).
- Schedule backup operations with post-backup integrity verification using `restic check --read-data` which downloads and verifies every data blob against its stored checksum. Log results and alert on any integrity failures.
- Periodically restore random files from backup snapshots to a temporary location and compare checksums against the original to validate end-to-end backup integrity. Document restore times for RTO planning.
- | Tier | System Type | RTO Target | RPO Target | Example |
- |------|------------|------------|------------|---------|
- | Tier 1 | Mission-critical | < 1 hour | < 15 min | Active Directory, core database |
- | Tier 2 | Business-critical | < 4 hours | < 1 hour | ERP, email, CRM |
- | Tier 3 | Business-operational | < 24 hours | < 4 hours | File shares, internal apps |
- | Tier 4 | Non-critical | < 72 hours | < 24 hours | Dev/test, analytics |
- ip route show | grep -v "192.168.100.0/24"  # recovery VLAN only

## Use Cases
- Establishing ransomware-resistant backup infrastructure with cryptographic integrity verification
- Implementing 3-2-1-1-0 backup strategy where the extra 1 is an immutable copy
- Automating backup verification workflows that test restore capability on a schedule
- Protecting backup repositories from deletion or modification by compromised admin accounts
- Meeting compliance requirements for data retention with tamper-proof storage
- Validating that ransomware recovery plans actually work under realistic conditions
- Measuring RTO (Recovery Time Objective) and RPO (Recovery Point Objective) against business requirements
- Testing backup restore operations to confirm data integrity and completeness after simulated encryption
- Conducting tabletop exercises or live recovery drills for ransomware scenarios
- Auditing disaster recovery readiness as part of compliance or cyber insurance requirements

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AWS S3 Object Lock, AWS Backup, Azure Backup, Azure Immutable Blob, BorgBackup, Commvault, Cross Platform Backup Tool With Built In Encryption And Deduplication, MinIO

## Sources
- implementing-immutable-backup-with-restic
- testing-ransomware-recovery-procedures
- validating-backup-integrity-for-recovery
