# Tines

Tines shows up in the upstream cybersecurity skills collection as a practical way to make sense of signals, artifacts, or system state without turning the workflow into guesswork. In this atlas, it is best understood as a learning instrument: something that helps you see a slice of the environment more clearly.

## What it is

Automates the enrichment of raw indicators of compromise with multi-source threat intelligence context using SOAR platforms, Python pipelines, or TIP playbooks to reduce analyst triage time and standardize enrichment outputs. Use when building automated enrichment workflows integrated with SIEM alerts, email submission pipelines, or bulk IOC processing from threat feeds. Activates for requests involving SOAR enrichment, Cortex XSOAR, Splunk SOAR, TheHive, Python enrichment pipelines, or automated IOC processing. Building a SOAR playbook that automatically enriches SIEM alerts with threat intelligence context before routing to analysts Creating a Python pipeline for bulk IOC enrichment from phishing email submissions Across the source material, it most often appears in incident-response, soc-operations, threat-intelligence. The recurring ideas around it include alert-fatigue, automation, Cortex-XSOAR, CTI.

## How it fits into a workflow

Tines usually sits in the middle of a workflow rather than at the very start or very end. People reach for it once they already have a question, an artifact, or a suspicious pattern, and they want a more structured view of what is happening. The tool tends to matter because it gives shape to noisy inputs and turns them into outputs that other parts of the investigation can use.

## Inputs and outputs that matter

The source skills treat Tines less like magic and more like a translator. Inputs might be logs, binaries, packets, memory, cloud events, or configuration data depending on the scenario. Outputs tend to be findings that can be compared, shared, or escalated: parsed artifacts, visual clues, extracted metadata, or a cleaner path toward the next question.

## Limits and common mistakes

A recurring mistake is to confuse tool output with final truth. Tines is useful because it sharpens interpretation, but it still depends on context, data quality, and the analyst's framing. Another mistake is to treat it as a complete workflow by itself when the surrounding evidence and follow-up analysis usually matter just as much.

## Where to go next

Tines fits best as part of a broader learning journey. Once the mental model is clear, the related skills in this atlas show how practitioners position it inside real investigations and reviews. Representative source skills include Automating IOC Enrichment, Building Incident Response Playbooks, Implementing Alert Fatigue Reduction, which is a good reminder that the tool is often more versatile than any single scenario suggests.
