# Mftecmd

## Overview
Mftecmd is a file system forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Mftecmd is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Mftecmd works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- mft
- ntfs
- deleted files
- file recovery
- mftecmd
- usn journal
- logfile
- mft slack space
- file system forensics
- dfir
- digital forensics
- forensics

## Typical Workflow
- mmls /cases/case-2024-001/images/evidence.dd
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 0 > /cases/case-2024-001/ntfs/MFT
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 62-128 > /cases/case-2024-001/ntfs/UsnJrnl_J
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 2 > /cases/case-2024-001/ntfs/LogFile
- blkls -s -o 2048 /cases/case-2024-001/images/evidence.dd > /cases/case-2024-001/ntfs/slack_space.raw
- Photograph the system, noting serial numbers, labels, and cable connections
- Document the evidence source: device type, make, model, serial number, capacity
- Complete chain of custody form with date, time, handler name, and reason for acquisition
- Use a hardware write blocker when connecting the evidence drive to the forensic workstation
- ━━━━━━━━━━━━━━━━━━━━━━━

## Use Cases
- When investigating security incidents that require analyzing mft for deleted file recovery
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques
- When searching for hidden or residual data in file system slack space
- For analyzing NTFS Master File Table (MFT) entries for deleted file metadata
- When reconstructing file operations from the USN Change Journal
- For detecting Alternate Data Streams (ADS) used to hide data or malware
- During deep forensic analysis requiring examination beyond standard file recovery
- A security incident requires forensic analysis of a system's persistent storage

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Autopsy, FTK Imager, KAPE, Plaso, AFF, AnalyzeMFT, And Raw Formats With Built In Hash Verification, Bulk_extractor

## Sources
- analyzing-mft-for-deleted-file-recovery
- analyzing-slack-space-and-file-system-artifacts
- performing-disk-forensics-investigation
- performing-endpoint-forensics-investigation
