# Threats

Threats shows up in the upstream cybersecurity skills collection as a practical way to make sense of signals, artifacts, or system state without turning the workflow into guesswork. In this atlas, it is best understood as a learning instrument: something that helps you see a slice of the environment more clearly.

## What it is

Queries Azure Monitor activity logs and sign-in logs via azure-monitor-query to detect suspicious administrative operations, impossible travel, privilege escalation, and resource modifications. Builds KQL queries for threat hunting in Azure environments. Use when investigating suspicious Azure tenant activity or building cloud SIEM detections. When investigating security incidents that require analyzing azure activity logs for threats When building detection rules or threat hunting queries for this domain Across the source material, it most often appears in security-operations, threat-intelligence. The recurring ideas around it include **API-Based Monitoring**: Commercial dark web monitoring APIs (Flare, DarkOwl, Intel 471), **Automated Crawling**: Tor-based web crawlers scanning hidden services, **Manual HUMINT**: Analyst-driven research on specific forums and marketplaces, **Marketplaces**: Dark web markets selling stolen data, RaaS, exploit kits, and access.

## How it fits into a workflow

Threats usually sits in the middle of a workflow rather than at the very start or very end. People reach for it once they already have a question, an artifact, or a suspicious pattern, and they want a more structured view of what is happening. The tool tends to matter because it gives shape to noisy inputs and turns them into outputs that other parts of the investigation can use.

## Inputs and outputs that matter

The source skills treat Threats less like magic and more like a translator. Inputs might be logs, binaries, packets, memory, cloud events, or configuration data depending on the scenario. Outputs tend to be findings that can be compared, shared, or escalated: parsed artifacts, visual clues, extracted metadata, or a cleaner path toward the next question.

## Limits and common mistakes

A recurring mistake is to confuse tool output with final truth. Threats is useful because it sharpens interpretation, but it still depends on context, data quality, and the analyst's framing. Another mistake is to treat it as a complete workflow by itself when the surrounding evidence and follow-up analysis usually matter just as much.

## Where to go next

Threats fits best as part of a broader learning journey. Once the mental model is clear, the related skills in this atlas show how practitioners position it inside real investigations and reviews. Representative source skills include Analyzing Azure Activity Logs for Threats, Performing Dark Web Monitoring for Threats, which is a good reminder that the tool is often more versatile than any single scenario suggests.
