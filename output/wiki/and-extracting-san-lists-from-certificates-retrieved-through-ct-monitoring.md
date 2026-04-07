# And Extracting San Lists From Certificates Retrieved Through Ct Monitoring

## Overview
And Extracting San Lists From Certificates Retrieved Through Ct Monitoring is a tls monitoring tool that appears across threat intelligence workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Extracting San Lists From Certificates Retrieved Through Ct Monitoring is best understood as a threat-intelligence tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Extracting San Lists From Certificates Retrieved Through Ct Monitoring works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- certificate transparency
- CT logs
- crt sh
- subdomain discovery
- TLS monitoring
- RFC 6962
- threat intelligence

## Typical Workflow
- **Define monitoring scope**: List all owned root domains, registered brand names, and known subsidiaries. Include wildcard patterns (`%.example.com`) for comprehensive subdomain coverage.
- **Query crt.sh for historical certificates**: Use the crt.sh JSON API to retrieve all known certificates for each domain. The API endpoint `https://crt.sh/?q=%.example.com&output=json` returns certificates matching the wildcard pattern with fields including `issuer_ca_id`, `issuer_name`, `common_name`, `name_value`, `not_before`, `not_after`, and `serial_number`.
- **Build baseline database**: Store the initial certificate set in a local SQLite database with columns for certificate ID, domain, issuer, validity dates, SANs (Subject Alternative Names), and first-seen timestamp. This baseline prevents alerting on already-known certificates.
- **Identify authorized CAs**: From the baseline, extract the set of Certificate Authorities that have legitimately issued certificates for your domains. Any future issuance from a CA not in this set triggers a high-priority alert.
- **Map subdomains**: Extract all unique subdomains from the `name_value` field across all certificates to build an initial subdomain inventory.
- **Poll crt.sh periodically**: Query the crt.sh API at regular intervals (every 15-60 minutes) for new certificates. Use the `exclude=expired` parameter to focus on currently valid certificates. Compare results against the baseline database to identify new entries.
- **Parse certificate details**: For each new certificate, extract the full SAN list, issuer chain, validity period, key type and size, CT log SCT (Signed Certificate Timestamp) details, and certificate fingerprint (SHA-256).
- **Detect precertificates**: CT logs include precertificates (poisoned certificates submitted before final issuance). Track these as early warnings since they indicate a certificate is about to be issued but may not yet be active.
- **Monitor CT log Signed Tree Heads (STH)**: For advanced monitoring, query CT log servers directly to fetch the latest STH and verify consistency proofs between consecutive tree heads. An inconsistency indicates log misbehavior (split-view attack).
- **Rate limiting awareness**: Respect crt.sh rate limits by spacing queries and caching responses. Implement exponential backoff on HTTP 429 responses. For high-volume monitoring, consider querying the crt.sh PostgreSQL interface directly at `crt.sh:5432`.

## Use Cases
- Monitoring owned domains for unauthorized or unexpected certificate issuance by unknown Certificate Authorities
- Discovering subdomains and hidden services through certificates logged in public CT logs
- Detecting phishing infrastructure that uses look-alike domain certificates (typosquatting, homograph attacks)
- Auditing Certificate Authority compliance by verifying all issued certificates appear in CT logs as required by browser policies
- Building continuous certificate monitoring into a security operations pipeline with alerting for new issuances
- Ignoring precertificates that appear in CT logs before the actual certificate is issued, losing the early warning advantage
- Failing to verify that CAA records are properly configured on all domains after an incident

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Certificate Detail Retrieval, Certspotter, crt.sh, Ct Woodpecker, Google Argon, Icarus, Identity Filtering, OpenSSL

## Sources
- auditing-tls-certificate-transparency-logs
