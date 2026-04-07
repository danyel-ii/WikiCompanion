# Autopsy

## Overview
Autopsy is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Autopsy is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Autopsy works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- autopsy
- disk analysis
- sleuth kit
- file recovery
- artifact analysis
- digital forensics
- prefetch
- windows artifacts
- execution history
- timeline analysis
- evidence collection

## Typical Workflow
- sudo apt-get install autopsy sleuthkit
- unzip autopsy-4.21.0.zip -d /opt/autopsy
- /opt/autopsy/bin/autopsy --nosplash
- sudo apt-get install sleuthkit
- ls -la /cases/case-2024-001/prefetch/ | wc -l
- ls -la /cases/case-2024-001/prefetch/ | head -30
- CHROME_WIN="/mnt/evidence/Users/suspect/AppData/Local/Google/Chrome/User Data/Default"
- FIREFOX_WIN="/mnt/evidence/Users/suspect/AppData/Roaming/Mozilla/Firefox/Profiles/*.default-release"
- Photograph the system, noting serial numbers, labels, and cable connections
- Document the evidence source: device type, make, model, serial number, capacity

## Use Cases
- When you have a forensic disk image and need structured analysis of its contents
- During investigations requiring file recovery, keyword searching, and timeline analysis
- When non-technical stakeholders need visual reports from forensic evidence
- For examining file system metadata, deleted files, and embedded artifacts
- When building a comprehensive case from multiple disk images
- When determining which programs were executed on a Windows system and when
- During malware investigations to confirm execution of suspicious binaries
- For establishing a timeline of application usage during an incident
- When correlating program execution with other forensic artifacts
- To identify anti-forensic tools or unauthorized software that was run

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- KAPE, Plaso, FTK Imager, MFTECmd, AFF, And Raw Formats With Built In Hash Verification, BrowsingHistoryView, ChromeCacheView

## Sources
- analyzing-disk-image-with-autopsy
- analyzing-prefetch-files-for-execution-history
- analyzing-windows-lnk-files-for-artifacts
- extracting-browser-history-artifacts
- performing-disk-forensics-investigation
- performing-endpoint-forensics-investigation
