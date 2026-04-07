# Exec

Exec shows up in the upstream cybersecurity skills collection as a practical way to make sense of signals, artifacts, or system state without turning the workflow into guesswork. In this atlas, it is best understood as a learning instrument: something that helps you see a slice of the environment more clearly.

## What it is

Detects and prevents code injection attacks targeting serverless functions (AWS Lambda, Azure Functions, Google Cloud Functions) through event source poisoning, malicious layer injection, runtime command execution, and IAM privilege escalation via function modification. The analyst combines static analysis of function code, CloudTrail event correlation, runtime behavior monitoring, and IAM policy auditing to identify injection vectors across the expanded serverless attack surface including API Gateway, S3, SQS, DynamoDB Streams, and CloudWatch event triggers. Activates for requests involving Lambda security assessment, serverless injection detection, function event poisoning analysis, or serverless privilege escalation investigation. Auditing Lambda/Cloud Functions for code injection vulnerabilities where unsanitized event data flows into dangerous runtime functions (eval, exec, child_process.exec, os.system) Investigating incidents where an attacker modified function code or layers to establish persistence or exfiltrate data from the serverless environment Across the source material, it most often appears in cloud-security. The recurring ideas around it include CloudTrail, event-source-poisoning, IAM-escalation, Lambda-injection.

## How it fits into a workflow

Exec usually sits in the middle of a workflow rather than at the very start or very end. People reach for it once they already have a question, an artifact, or a suspicious pattern, and they want a more structured view of what is happening. The tool tends to matter because it gives shape to noisy inputs and turns them into outputs that other parts of the investigation can use.

## Inputs and outputs that matter

The source skills treat Exec less like magic and more like a translator. Inputs might be logs, binaries, packets, memory, cloud events, or configuration data depending on the scenario. Outputs tend to be findings that can be compared, shared, or escalated: parsed artifacts, visual clues, extracted metadata, or a cleaner path toward the next question.

## Limits and common mistakes

A recurring mistake is to confuse tool output with final truth. Exec is useful because it sharpens interpretation, but it still depends on context, data quality, and the analyst's framing. Another mistake is to treat it as a complete workflow by itself when the surrounding evidence and follow-up analysis usually matter just as much.

## Where to go next

Exec fits best as part of a broader learning journey. Once the mental model is clear, the related skills in this atlas show how practitioners position it inside real investigations and reviews. Representative source skills include Detecting Serverless Function Injection, which is a good reminder that the tool is often more versatile than any single scenario suggests.
