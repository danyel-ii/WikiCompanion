# Infrastructure

Infrastructure shows up in the upstream cybersecurity skills collection as a practical way to make sense of signals, artifacts, or system state without turning the workflow into guesswork. In this atlas, it is best understood as a learning instrument: something that helps you see a slice of the environment more clearly.

## What it is

Threat actor infrastructure tracking involves monitoring and mapping adversary-controlled assets including command-and-control (C2) servers, phishing domains, exploit kit hosts, bulletproof hosting, a When managing security operations that require tracking threat actor infrastructure When improving security program maturity and operational processes Across the source material, it most often appears in threat-intelligence. The recurring ideas around it include **Favicon Hash**: Hash of HTTP favicon for server identification, **HTTP Headers**: Server banners, custom headers, response patterns, **JA3S**: Passive TLS server fingerprint (hash of Server Hello), **JARM**: Active TLS server fingerprint (hash of TLS handshake responses).

## How it fits into a workflow

Infrastructure usually sits in the middle of a workflow rather than at the very start or very end. People reach for it once they already have a question, an artifact, or a suspicious pattern, and they want a more structured view of what is happening. The tool tends to matter because it gives shape to noisy inputs and turns them into outputs that other parts of the investigation can use.

## Inputs and outputs that matter

The source skills treat Infrastructure less like magic and more like a translator. Inputs might be logs, binaries, packets, memory, cloud events, or configuration data depending on the scenario. Outputs tend to be findings that can be compared, shared, or escalated: parsed artifacts, visual clues, extracted metadata, or a cleaner path toward the next question.

## Limits and common mistakes

A recurring mistake is to confuse tool output with final truth. Infrastructure is useful because it sharpens interpretation, but it still depends on context, data quality, and the analyst's framing. Another mistake is to treat it as a complete workflow by itself when the surrounding evidence and follow-up analysis usually matter just as much.

## Where to go next

Infrastructure fits best as part of a broader learning journey. Once the mental model is clear, the related skills in this atlas show how practitioners position it inside real investigations and reviews. Representative source skills include Tracking Threat Actor Infrastructure, which is a good reminder that the tool is often more versatile than any single scenario suggests.
