# Plaso

## Overview
Plaso is a forensics tool that appears across digital forensics workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Plaso is best understood as a digital-forensics tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Plaso works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- forensics
- linux forensics
- system artifacts
- log analysis
- persistence detection
- incident investigation
- digital forensics
- prefetch
- windows artifacts
- execution history
- timeline analysis
- evidence collection

## Typical Workflow
- ls -la /cases/case-2024-001/prefetch/ | wc -l
- ls -la /cases/case-2024-001/prefetch/ | head -30
- mmls /cases/case-2024-001/images/evidence.dd
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 0 > /cases/case-2024-001/ntfs/MFT
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 62-128 > /cases/case-2024-001/ntfs/UsnJrnl_J
- icat -o 2048 /cases/case-2024-001/images/evidence.dd 2 > /cases/case-2024-001/ntfs/LogFile
- blkls -s -o 2048 /cases/case-2024-001/images/evidence.dd > /cases/case-2024-001/ntfs/slack_space.raw
- 1. System memory (RAM) - Most volatile
- 2. Network connections and routing tables
- 3. Running processes and open files

## Use Cases
- When investigating a compromised Linux server or workstation
- For identifying persistence mechanisms (cron, systemd, SSH keys)
- When tracing user activity through shell history and authentication logs
- During incident response to determine the scope of a Linux-based breach
- For detecting rootkits, backdoors, and unauthorized modifications
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
- KAPE, Autopsy, Velociraptor, FTK Imager, MFTECmd, AIDE, AnalyzeMFT, Auditd

## Sources
- analyzing-linux-system-artifacts
- analyzing-prefetch-files-for-execution-history
- analyzing-slack-space-and-file-system-artifacts
- analyzing-usb-device-connection-history
- analyzing-windows-lnk-files-for-artifacts
- performing-endpoint-forensics-investigation
