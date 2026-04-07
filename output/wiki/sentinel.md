# Sentinel

## Overview
Sentinel is a threat detection tool that appears across cloud security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Sentinel is best understood as a cloud-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Sentinel works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- zscaler
- zpa
- ztna
- zero trust
- app connector
- access policy
- sase
- zero trust architecture
- cloud security
- credential compromise
- threat detection
- guardduty

## Typical Workflow
- App Connectors establish outbound-only tunnels to the ZPA cloud, providing access to internal applications.
- sudo yum install -y https://yum.private.zscaler.com/yum/el7/zpa-connector-latest.rpm
- echo "deb https://dist.private.zscaler.com/apt stable main" | sudo tee /etc/apt/sources.list.d/zpa.list
- sudo apt update && sudo apt install -y zpa-connector
- Monitor GuardDuty findings and CloudTrail anomalies that indicate credential abuse.
- Document hypothesis using the Threat Hunting Loop framework: hypothesis → data collection → pattern analysis → response.
- Process creation (T1059): Windows Security Event 4688 or Sysmon Event ID 1
- Network connections (T1071): Zeek conn.log, NetFlow, EDR network telemetry
- Registry modifications (T1547): Sysmon Event ID 13, Windows Security 4657
- Memory injection (T1055): EDR memory scan telemetry, Volatility output

## Use Cases
- When replacing traditional VPN concentrators with application-level zero trust access
- When providing remote users secure access to internal applications without network-level connectivity
- When implementing least-privilege access where users only see authorized applications
- When needing to make internal applications invisible to unauthorized users and the internet
- When integrating ZTNA with existing SASE architecture using Zscaler Internet Access (ZIA)
- When investigating alerts about unusual cloud API activity from unfamiliar locations
- When building detection rules for credential theft and abuse across cloud environments
- When responding to notifications from cloud providers about exposed credentials
- When monitoring for credential stuffing or brute force attacks against cloud identities
- When assessing the scope of a credential compromise after initial detection

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Elastic, QRadar, Sigma, Activity Log, And Connector Configuration, And Elastic, And GCP, And Risky User Behavior

## Sources
- configuring-zscaler-private-access-for-ztna
- detecting-compromised-cloud-credentials
- hunting-advanced-persistent-threats
- mapping-mitre-attack-techniques
- securing-azure-with-microsoft-defender
