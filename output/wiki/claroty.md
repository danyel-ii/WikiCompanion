# Claroty

## Overview
Claroty is a network visibility tool that appears across ot ics security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Claroty is best understood as a ot-ics-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Claroty works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- ot security
- ics
- asset discovery
- claroty
- xdome
- scada
- network visibility
- iec62443
- ot ics security

## Typical Workflow
- Deploy Claroty sensors on SPAN ports to passively observe all OT network traffic without impacting operations.
- Automates the configuration of passive monitoring sensors and generates
- asset inventory reports from Claroty xDome API.
- from datetime import datetime
- from typing import Optional

## Use Cases
- When gaining initial visibility into an OT environment with unknown or poorly documented assets
- When preparing for an IEC 62443 risk assessment requiring a complete asset inventory
- When onboarding Claroty xDome into a brownfield industrial environment
- When validating existing asset inventory against actual network communications
- When identifying shadow OT devices or unauthorized connections in the control network

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- performing-ics-asset-discovery-with-claroty
