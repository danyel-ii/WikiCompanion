# The Sleuth Kit

## Overview
The Sleuth Kit is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
The Sleuth Kit is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
The Sleuth Kit works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- autopsy
- disk analysis
- sleuth kit
- file recovery
- artifact analysis
- digital forensics
- slack space
- ntfs
- mft
- usn journal
- alternate data streams

## Typical Workflow
- sudo apt-get install autopsy sleuthkit
- unzip autopsy-4.21.0.zip -d /opt/autopsy
- /opt/autopsy/bin/autopsy --nosplash
- sudo apt-get install sleuthkit
- mmls /cases/case-2024-001/images/evidence.dd
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 0 > /cases/case-2024-001/ntfs/MFT
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 62-128 > /cases/case-2024-001/ntfs/UsnJrnl_J
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 2 > /cases/case-2024-001/ntfs/LogFile
- blkls -s -o 2048 /cases/case-2024-001/images/evidence.dd > /cases/case-2024-001/ntfs/slack_space.raw

## Use Cases
- When you have a forensic disk image and need structured analysis of its contents
- During investigations requiring file recovery, keyword searching, and timeline analysis
- When non-technical stakeholders need visual reports from forensic evidence
- For examining file system metadata, deleted files, and embedded artifacts
- When building a comprehensive case from multiple disk images
- When searching for hidden or residual data in file system slack space
- For analyzing NTFS Master File Table (MFT) entries for deleted file metadata
- When reconstructing file operations from the USN Change Journal
- For detecting Alternate Data Streams (ADS) used to hide data or malware
- During deep forensic analysis requiring examination beyond standard file recovery

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- AnalyzeMFT, Autopsy, Bulk_extractor, Fls, Icat, Mactime, MFTECmd, MFTExplorer

## Sources
- analyzing-disk-image-with-autopsy
- analyzing-slack-space-and-file-system-artifacts
