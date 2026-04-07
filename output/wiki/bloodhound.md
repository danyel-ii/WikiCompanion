# BloodHound (Community Edition)

> BloodHound is an open‑source tool from SpecterOps that applies graph theory to identity and access relationships to uncover attack paths (privilege escalation and lateral movement) across Microsoft Active Directory, Azure AD, and other platforms via an extension model.

## Overview
BloodHound (Community Edition) is an identity attack path discovery and analysis platform used by red and blue teams to map feasible privilege escalation and lateral movement across enterprise identity systems. It is not a containment or EDR product; rather, it models identities, permissions, and sessions as a graph to expose abusable relationships and shortest paths to high‑value targets. Community Edition presents a web interface backed by a Go REST API, uses PostgreSQL for application metadata, and stores the identity graph in Neo4j. Data is gathered by official collectors—SharpHound for on‑premises Active Directory and AzureHound for Azure AD/Entra ID—and ingested for graph analytics. Support for platforms beyond Microsoft ecosystems is expanding via an extension model that shares lineage with the commercial BloodHound Enterprise.

## What It Is
An open‑source identity graph analytics system that represents users, computers, groups, GPOs, service principals, and related permissions and sessions as nodes and edges. It enables pathfinding and query‑driven analysis to reveal shortest or otherwise tractable routes from ordinary principals to tier‑0 assets (for example, Domain Admin) and highlights misconfigurations and abusable rights. The tool is used both to validate offensive feasibility and to guide defensive hardening and risk reduction.

## How It Works
- Data collection: SharpHound enumerates on‑premises Active Directory through LDAP, SMB, and Win32 interfaces to capture directory objects, ACLs, group nesting, trusts, sessions, and related relationships. AzureHound enumerates Azure AD/Entra ID via cloud APIs. Collectors produce JSON/ZIP artifacts for ingestion. Extensions built on OpenGraph broaden coverage to additional identity platforms.
- Storage and processing: Community Edition runs as a containerized web application. A Go‑based REST API coordinates ingestion and queries. Application metadata is stored in PostgreSQL. The identity graph—nodes and edges representing objects, permissions, sessions, and trust relationships—is persisted in Neo4j.
- Analysis and visualization: The browser UI and API support exploration of the graph, execution of saved queries and pathfinding, and visualization of attack paths and risky configurations. Results surface abusable permissions (for example, write privileges on key objects), lateral movement enabled by sessions or membership, and other relationships relevant to escalation.

## Core Concepts
- Identity attack paths and graph theory (shortest/quietest paths to privilege)
- Active Directory object/ACL modeling (e.g., DCSync rights, Kerberoastable SPNs, local admin edges)
- Session- and membership‑derived lateral movement
- Collector–backend compatibility (collector versions aligned with CE)
- Extensibility via OpenGraph and integrations
- Use for both offensive assessment and defensive risk reduction

## Typical Workflow
- Define scope and collect directory and cloud identity data with the official collectors to capture objects, ACLs, sessions, trusts, and related relationships as export artifacts.
- Ingest the collected datasets through the Community Edition interface or API to populate the identity graph.
- Explore the graph with built‑in searches and pathfinding to trace routes from standard users to tier‑0 assets and other high‑value targets.
- Prioritize findings by examining abusable permissions, misconfigurations, and sessions that enable lateral movement.
- Plan and track remediation of identity risks (for example, ACL hardening and group hygiene) and re‑collect to assess change over time.

## Use Cases
- Threat hunting and incident investigation to understand feasible lateral movement from compromised principals
- Red team and penetration testing to map escalation routes and validate attack feasibility
- Blue team hardening to prioritize and track remediation of identity attack paths (tactically with Community Edition or programmatically with BloodHound Enterprise)
- Exposure reviews during organizational changes such as mergers or domain consolidations
- Cross‑platform identity risk analysis via OpenGraph extensions beyond AD/Azure

## Limitations
- Not a containment, EDR, or network isolation tool; it does not directly block or revoke access.
- Quality of insights depends on completeness and recency of collection; stale or partial datasets degrade accuracy.
- Large environments can produce dense graphs and high resource utilization; visualization at scale may be challenging.
- Collector–backend version mismatches can lead to ingestion or schema issues; versions should be aligned.
- Focuses on identity relationships and does not replace log‑centric detection, endpoint telemetry, or forensics tooling.

## Related Tools
- SharpHound: Official AD data collector feeding BloodHound CE.
- AzureHound: Official Azure/Entra ID data collector feeding BloodHound CE.
- BloodHound Enterprise (BHE): Commercial product for continuous attack path management using similar models and shared codebase with CE.
- Microsoft Defender for Identity: Defensive sensor detecting identity threats in AD; complementary to graph‑based path analysis.
- PingCastle: AD risk assessment tool; complementary for hygiene scoring vs. path‑centric analysis.
- Neo4j: Graph database used by BloodHound to store and query identity graphs.
- Splunk / SIEM: Log analytics platforms that complement BloodHound’s structural analysis with activity telemetry.

## Evidence Gaps
- Community Edition versions change frequently; this dossier references release notes noting v7.2.0 on March 25, 2025. Verify the latest version before deployment.
- Coverage for non‑Microsoft platforms via OpenGraph and product updates is evolving; confirm specific platform support and data models before operational use.

## Sources
- [BloodHound Community Edition documentation (Quickstart, API/ingest)](https://bloodhound.specterops.io/get-started/quickstart/community-edition-quickstart) (SpecterOps)
- [BloodHound CE custom installation (architecture, Neo4j/PostgreSQL, env)](https://bloodhound.specterops.io/get-started/custom-installation) (SpecterOps)
- [BloodHound Community Edition product page (purpose, positioning, OpenGraph)](https://specterops.io/bloodhound-community-edition/) (SpecterOps)
- [BloodHound CE: A New Era (architecture shift, containers, shared code/docs)](https://specterops.io/blog/2023/08/08/bloodhound-community-edition-a-new-era/) (SpecterOps)
- [BloodHound monorepo README (CE architecture, collectors, databases)](https://github.com/SpecterOps/BloodHound) (GitHub)
- [AzureHound (official Azure collector)](https://github.com/SpecterOps/AzureHound) (GitHub)
- [BloodHound release notes v7.2.0 (docs portal, versions)](https://bloodhound.specterops.io/resources/release-notes/v7-2-0) (SpecterOps)
- [BloodHound CLI (management utility)](https://github.com/SpecterOps/bloodhound-cli) (GitHub)
- [https://www.reddit.com/r/oscp/comments/1kfz3j8](https://www.reddit.com/r/oscp/comments/1kfz3j8) (reddit.com)
- [https://www.reddit.com/r/oscp/comments/1mk05ky/blood_hound_issue/](https://www.reddit.com/r/oscp/comments/1mk05ky/blood_hound_issue/) (reddit.com)
- [https://pypi.org/project/bloodhound-cli/1.1.0/](https://pypi.org/project/bloodhound-cli/1.1.0/) (pypi.org)
- [https://www.reddit.com/r/SecOpsDaily/comments/1rx1z1z/bloodhound_enterprise_expands_beyond_microsoft/](https://www.reddit.com/r/SecOpsDaily/comments/1rx1z1z/bloodhound_enterprise_expands_beyond_microsoft/) (reddit.com)

## Confidence
high
