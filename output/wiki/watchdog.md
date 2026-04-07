# Watchdog

## Overview
Watchdog is a behavioral analysis tool that appears across ransomware defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Watchdog is best understood as a ransomware-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Watchdog works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ransomware
- detection
- canary files
- honeytokens
- deception
- file integrity
- ransomware defense
- watchdog
- early warning
- defense
- entropy
- behavioral analysis

## Typical Workflow
- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Use names that sort FIRST and LAST alphabetically in each directory
- Ransomware typically enumerates directories A-Z or Z-A
- Examples: _AAAA_budget_2024.docx, ~zzzz_report_final.xlsx
- Desktop, Documents, Downloads on each endpoint
- Department-specific shares (Finance, HR, Legal)
- Create decoy files with realistic names and content that attract ransomware scanners. Files should have names like `Passwords.xlsx`, `Financial_Report_2026.docx`, `backup_credentials.csv` and contain plausible-looking but fake data. Place them in directories ransomware typically targets first: user desktops, Documents folders, network share roots, and backup paths.
- Wire the filesystem monitor to multiple alert channels: email via SMTP, Slack webhook POST, syslog forwarding to SIEM, and local log file. Include the triggering event type, file path, timestamp, and process information (when available) in alert payloads.
- Simulate ransomware behavior by programmatically modifying, renaming, and deleting canary files to verify the detection pipeline fires correctly. Measure time-to-alert and validate alert delivery across all configured channels.
- .docx           3.5 - 6.5        7.8 - 8.0

## Use Cases
- Setting up early-warning detection for ransomware on file servers or endpoints
- Supplementing EDR/AV with a deception-based detection layer that catches unknown ransomware variants
- Creating high-fidelity ransomware alerts that have very low false-positive rates (legitimate users have no reason to touch decoy files)
- Testing ransomware response procedures by validating that canary file modifications trigger the expected alerting pipeline
- Protecting high-value file shares (finance, HR, legal) with tripwire files that indicate unauthorized encryption activity
- Deploying proactive ransomware detection on file servers, NAS devices, or endpoint systems
- Building an early-warning system that detects ransomware before it encrypts business-critical data
- Supplementing EDR solutions with lightweight canary file monitoring on systems where agents cannot be deployed
- Testing ransomware incident response procedures by simulating canary file triggers
- Monitoring shared drives, home directories, and backup volumes for unauthorized file operations

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Elastic Endpoint, Psutil, Sysmon, And DNS Tokens, And MacOS, Canarytokens, Hashlib, OSSEC

## Sources
- deploying-decoy-files-for-ransomware-detection
- deploying-ransomware-canary-files
- detecting-ransomware-encryption-behavior
