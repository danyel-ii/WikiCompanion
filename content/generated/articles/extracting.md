# Extracting

Extracting shows up in the upstream cybersecurity skills collection as a practical way to make sense of signals, artifacts, or system state without turning the workflow into guesswork. In this atlas, it is best understood as a learning instrument: something that helps you see a slice of the environment more clearly.

## What it is

Analyzes firmware images for embedded malware, backdoors, and unauthorized modifications targeting routers, IoT devices, UEFI/BIOS, and embedded systems. Covers firmware extraction, filesystem analysis, binary reverse engineering, and bootkit detection. Activates for requests involving firmware security analysis, IoT malware investigation, UEFI rootkit detection, or embedded device compromise assessment. A compromised IoT device or router needs firmware analysis to identify implanted backdoors Investigating UEFI/BIOS rootkits that persist across OS reinstallations Across the source material, it most often appears in malware-analysis, ot-ics-security. The recurring ideas around it include embedded-security, firmware, firmware-analysis, ics.

## How it fits into a workflow

Extracting usually sits in the middle of a workflow rather than at the very start or very end. People reach for it once they already have a question, an artifact, or a suspicious pattern, and they want a more structured view of what is happening. The tool tends to matter because it gives shape to noisy inputs and turns them into outputs that other parts of the investigation can use.

## Inputs and outputs that matter

The source skills treat Extracting less like magic and more like a translator. Inputs might be logs, binaries, packets, memory, cloud events, or configuration data depending on the scenario. Outputs tend to be findings that can be compared, shared, or escalated: parsed artifacts, visual clues, extracted metadata, or a cleaner path toward the next question.

## Limits and common mistakes

A recurring mistake is to confuse tool output with final truth. Extracting is useful because it sharpens interpretation, but it still depends on context, data quality, and the analyst's framing. Another mistake is to treat it as a complete workflow by itself when the surrounding evidence and follow-up analysis usually matter just as much.

## Where to go next

Extracting fits best as part of a broader learning journey. Once the mental model is clear, the related skills in this atlas show how practitioners position it inside real investigations and reviews. Representative source skills include Performing Firmware Malware Analysis, Performing PLC Firmware Security Analysis, which is a good reminder that the tool is often more versatile than any single scenario suggests.
