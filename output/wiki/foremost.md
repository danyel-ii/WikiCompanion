# Foremost

## Overview
Foremost is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Foremost is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Foremost works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- file carving
- foremost
- data recovery
- evidence recovery
- unallocated space
- digital forensics
- file recovery
- photorec

## Typical Workflow
- sudo apt-get install foremost
- cat /etc/foremost.conf
- sudo apt-get install testdisk
- sudo yum install testdisk
- brew install testdisk

## Use Cases
- When recovering files from unallocated disk space or corrupted file systems
- For extracting evidence from formatted or wiped storage media
- When file system metadata is unavailable but raw data sectors contain evidence
- During investigations requiring recovery of specific file types from raw images
- As a complement to file system-based recovery for maximum evidence extraction
- When recovering deleted files from a forensic disk image or storage device
- When the file system is corrupted, formatted, or overwritten
- During investigations requiring recovery of documents, images, videos, or databases
- When file system metadata is unavailable but raw data sectors remain intact
- For recovering files from memory cards, USB drives, and hard drives

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Hashdeep, PhotoRec, Scalpel, Blkls, Bulk_extractor, Exiftool, ExifTool, File

## Sources
- performing-file-carving-with-foremost
- recovering-deleted-files-with-photorec
