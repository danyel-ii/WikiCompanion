# Aff

## Overview
Aff is a disk forensics tool that appears across incident response workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Aff is best understood as a incident-response tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Aff works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- disk forensics
- forensic imaging
- evidence acquisition
- file recovery
- chain of custody
- incident response

## Typical Workflow
- Photograph the system, noting serial numbers, labels, and cable connections
- Document the evidence source: device type, make, model, serial number, capacity
- Complete chain of custody form with date, time, handler name, and reason for acquisition
- Use a hardware write blocker when connecting the evidence drive to the forensic workstation
- ━━━━━━━━━━━━━━━━━━━━━━━
- Case ID:          INC-2025-1547
- Evidence ID:      EVD-001
- Description:      Samsung 870 EVO 500GB SSD
- Serial Number:    S5XXNJ0R912345

## Use Cases
- A security incident requires forensic analysis of a system's persistent storage
- Evidence preservation is needed for potential legal proceedings or HR investigations
- Deleted files, browser history, or application artifacts must be recovered
- A timeline of user or adversary activity must be reconstructed from file system metadata
- Malware persistence mechanisms stored on disk need identification and documentation
- Failing to image the drive before the IT department reassigns the workstation
- Overlooking Volume Shadow Copies that may contain earlier versions of deleted files

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Raw Formats With Built In Hash Verification, Autopsy, Eric Zimmerman's Tools, EvtxECmd, FTK Imager, KAPE, MFTECmd, RegRipper) For Windows Artifacts

## Sources
- performing-disk-forensics-investigation
