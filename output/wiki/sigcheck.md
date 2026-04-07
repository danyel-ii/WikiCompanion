# Sigcheck

## Overview
Sigcheck is a firmware security tool that appears across firmware security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sigcheck is best understood as a firmware-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sigcheck works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- UEFI
- bootkit
- firmware
- Secure Boot
- chipsec
- ESP
- persistence
- firmware security
- threat hunting
- mitre attack
- dll sideloading
- defense evasion

## Typical Workflow
- flashrom -p internal -r firmware_dump.rom
- 1. **Identify Sideloading Targets**: Research known vulnerable applications that load DLLs without full path qualification (LOLBAS, DLL-sideload databases).
- 2. **Monitor DLL Load Events**: Query Sysmon Event ID 7 for DLL loads where the DLL path differs from the application's expected directory.
- 3. **Check DLL Signatures**: Flag unsigned or untrusted DLLs loaded by signed executables.
- 4. **Detect Path Anomalies**: Identify legitimate executables running from unusual locations (Temp, AppData, Public) that may be decoy wrappers.
- 5. **Hash Verification**: Compare loaded DLL hashes against known-good versions and threat intel feeds.
- 6. **Correlate with Process Behavior**: Check if the host process exhibits unusual behavior (network connections, child processes) after loading the suspicious DLL.
- 7. **Document and Remediate**: Report sideloading instances, quarantine malicious DLLs, and update detection rules.

## Use Cases
- A compromised system re-establishes C2 communication after OS reinstallation or disk replacement
- Secure Boot has been tampered with, disabled, or shows unexpected Machine Owner Key (MOK) enrollment
- Firmware integrity verification fails against vendor-provided baselines
- Memory forensics reveals rootkit components loading during early boot phase
- Investigating advanced persistent threat (APT) campaigns known to deploy UEFI implants
- Auditing firmware security posture for enterprise endpoint hardening
- Running analysis from the compromised OS (rootkit components hide from live analysis)
- Only checking the ESP without examining SPI flash firmware (misses firmware-level implants like LoJax, MoonBounce)
- When investigating potential DLL hijacking in enterprise environments
- After EDR alerts on unsigned DLLs loaded by signed applications

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Comparing Module GUIDs, And Secure Boot Configuration Auditing, Chipsec, CrowdStrike Falcon, DLL Export Viewer, Extracting DXE Drivers, Flashrom, Microsoft Defender For Endpoint

## Sources
- analyzing-uefi-bootkit-persistence
- detecting-dll-sideloading-attacks
