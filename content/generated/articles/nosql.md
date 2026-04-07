# NoSQL

NoSQL shows up in the upstream cybersecurity skills collection as a practical way to make sense of signals, artifacts, or system state without turning the workflow into guesswork. In this atlas, it is best understood as a learning instrument: something that helps you see a slice of the environment more clearly.

## What it is

Tests APIs for injection vulnerabilities including SQL injection, NoSQL injection, OS command injection, LDAP injection, and Server-Side Request Forgery (SSRF) through API parameters, headers, and request bodies. The tester crafts malicious payloads targeting different backend technologies and injection contexts to extract data, execute commands, or access internal services. Maps to OWASP API8:2023 Security Misconfiguration and API7:2023 SSRF. Activates for requests involving API injection testing, SQLi in APIs, NoSQL injection, SSRF testing, or API input validation assessment. Testing API endpoints that accept user input for database queries, system commands, or external requests Assessing APIs that interact with SQL databases, NoSQL stores (MongoDB, Redis), LDAP directories, or external URLs Across the source material, it most often appears in api-security. The recurring ideas around it include api-security, command-injection, injection, nosql.

## How it fits into a workflow

NoSQL usually sits in the middle of a workflow rather than at the very start or very end. People reach for it once they already have a question, an artifact, or a suspicious pattern, and they want a more structured view of what is happening. The tool tends to matter because it gives shape to noisy inputs and turns them into outputs that other parts of the investigation can use.

## Inputs and outputs that matter

The source skills treat NoSQL less like magic and more like a translator. Inputs might be logs, binaries, packets, memory, cloud events, or configuration data depending on the scenario. Outputs tend to be findings that can be compared, shared, or escalated: parsed artifacts, visual clues, extracted metadata, or a cleaner path toward the next question.

## Limits and common mistakes

A recurring mistake is to confuse tool output with final truth. NoSQL is useful because it sharpens interpretation, but it still depends on context, data quality, and the analyst's framing. Another mistake is to treat it as a complete workflow by itself when the surrounding evidence and follow-up analysis usually matter just as much.

## Where to go next

NoSQL fits best as part of a broader learning journey. Once the mental model is clear, the related skills in this atlas show how practitioners position it inside real investigations and reviews. Representative source skills include Exploiting API Injection Vulnerabilities, which is a good reminder that the tool is often more versatile than any single scenario suggests.
