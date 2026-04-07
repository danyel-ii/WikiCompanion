# Email Security

## Overview
Email Security is a **ascii qr codes**: qr rendered as text characters instead of images, bypassing image analysis (12% of attacks in jan 2026) tool that appears across phishing defense workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Email Security is best understood as a phishing-defense tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Email Security works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- **Split QR Codes**: QR code divided into two separate images that look benign individually (Gabagool PhaaS kit)
- **Nested QR Codes**: QR code within a QR code, with first scan leading to intermediate page
- **ASCII QR Codes**: QR rendered as text characters instead of images, bypassing image analysis (12% of attacks in Jan 2026)
- **Styled/Artistic QR Codes**: Custom-designed QR codes with logos that evade pattern matching
- **PDF Attachment QR**: QR code embedded in PDF attachment rather than email body
- Pattern-based detection faces trade-off: aggressive tuning causes false positives, cautious tuning causes misses
- Average similarity score of 0.209 between quishing and legitimate QR emails
- QR codes in image attachments require OCR and deep image processing

## Typical Workflow
- Configure email gateway to scan embedded images for QR codes
- Enable OCR processing on image attachments (PNG, JPG, GIF, BMP)
- Deploy multimodal AI that combines image processing, OCR, and NLP analysis
- Configure PDF scanning to detect QR codes within attachments
- Set up detection for ASCII/text-based QR code rendering
- Extract URLs from detected QR codes and submit to URL reputation services
- Apply same URL scanning policies to QR-extracted URLs as text-based URLs
- Enable real-time sandbox analysis for QR-decoded destination pages
- Configure time-of-click protection for QR-extracted URLs where possible
- Block known phishing domains extracted from QR codes

## Use Cases
- When investigating security incidents that require detecting qr code phishing with email security
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- None listed yet

## Sources
- detecting-qr-code-phishing-with-email-security
