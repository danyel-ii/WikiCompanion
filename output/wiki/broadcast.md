# Broadcast

## Overview
Broadcast is a api security tool that appears across api security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Broadcast is best understood as a api-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Broadcast works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- api security
- websocket
- cswsh
- real time
- injection
- authentication

## Typical Workflow
- WS_URL = "wss://target-api.example.com/ws"
- AUTH_TOKEN = "Bearer <token>"

## Use Cases
- Assessing real-time communication APIs that use WebSocket (ws://) or Secure WebSocket (wss://) protocols
- Testing for Cross-Site WebSocket Hijacking (CSWSH) where an attacker's page connects to a legitimate WebSocket server
- Evaluating authentication and authorization enforcement on WebSocket connections and messages
- Testing input validation on WebSocket message payloads for injection vulnerabilities
- Assessing WebSocket implementations for denial-of-service through message flooding or oversized frames
- Only testing the initial handshake authentication without verifying ongoing message authorization
- Missing injection vulnerabilities because payloads are in JSON WebSocket frames instead of HTTP parameters

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Allows Message Modification And Replay, And Breakpoint Capabilities, And Scripting Capabilities, Autobahn TestSuite, Burp Suite Professional, Interception, OWASP ZAP, Websocat

## Sources
- testing-websocket-api-security
