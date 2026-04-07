# OWASP Amass

> OWASP Amass is a framework for mapping internet-exposed assets and attack surfaces using OSINT and optional active reconnaissance, correlating results into a unified asset graph for analysis and tracking.

## Overview
OWASP Amass is an OWASP project for external asset discovery and attack surface mapping. It combines open-source intelligence collection with reconnaissance methods to enumerate internet-facing artifacts—such as domains, subdomains, IP addresses, netblocks, and autonomous systems—and to model the relationships among them. The system is widely used to build an organization’s external footprint and to support subsequent security assessment and monitoring activities.

## What It Is
Amass is a modular discovery framework that aggregates heterogeneous data sources—commercial and community—alongside optional active DNS techniques to produce a consolidated view of an organization’s external presence. It emphasizes subdomain and DNS-centric enumeration while enriching results with infrastructure context (e.g., netblocks and ASNs). The framework includes components for scoping (domains, IP ranges, ASNs), discovery, correlation, persistence, visualization, and longitudinal tracking so that findings can be analyzed as a coherent asset graph and compared across assessments.

## How It Works
Operation is governed by YAML-based configuration that defines targets, operational boundaries, DNS resolvers, and credentials for external intelligence sources. During discovery, Amass queries configured repositories and services—such as certificate transparency logs, WHOIS, passive DNS, and search and security APIs—and can optionally apply active techniques like DNS probing within the declared scope. Collected artifacts are resolved and correlated into a unified model that links names, DNS records, IP addresses, netblocks, and ASNs. Results are persisted to a local store or to external graph/relational backends, enabling dashboards, relationship exploration, and change tracking between runs.

## Core Concepts
- Open-source intelligence (OSINT) collection for external attack surface mapping. ([owasp.org](https://owasp.org/www-project-amass/?utm_source=openai))
- DNS and subdomain enumeration (passive and optional active). ([github.com](https://github.com/owasp-amass/amass?utm_source=openai))
- Correlation of multi-source data into a unified asset view/graph. ([owasp-amass.github.io](https://owasp-amass.github.io/docs/configuration/?utm_source=openai))
- Certificate Transparency, WHOIS, and passive DNS as discovery inputs. ([owasp-amass.github.io](https://owasp-amass.github.io/docs/configuration/data_sources/?utm_source=openai))
- Change tracking across runs to monitor asset drift. ([github.com](https://github.com/OWASP/Amass/wiki/User-Guide?utm_source=openai))

## Typical Workflow
- Define scope (domains, ASNs, IP ranges) and operational boundaries in the YAML configuration. ([owasp-amass.github.io](https://owasp-amass.github.io/docs/configuration/?utm_source=openai))
- Configure and authorize external data sources to improve coverage. ([owasp-amass.github.io](https://owasp-amass.github.io/docs/configuration/data_sources/?utm_source=openai))
- Run discovery to aggregate passive intelligence and, if permitted, apply active techniques to expand findings. ([github.com](https://github.com/owasp-amass/amass?utm_source=openai))
- Resolve and correlate discovered names to infrastructure (IPs, netblocks, ASNs) and persist results. ([github.com](https://github.com/owasp-amass/amass?utm_source=openai))
- Use visualization/tracking to explore relationships and monitor changes over time or between assessments. ([github.com](https://github.com/OWASP/Amass/wiki/User-Guide?utm_source=openai))

## Use Cases
- Initial external reconnaissance and asset inventory ahead of security testing or monitoring. ([owasp.org](https://owasp.org/www-project-amass/?utm_source=openai))
- Continuous external attack surface management (EASM)-style monitoring and change tracking. ([github.com](https://github.com/OWASP/Amass/wiki/User-Guide?utm_source=openai))
- Scoping and prioritizing subsequent testing (e.g., selecting hosts/services for deeper analysis). ([github.com](https://github.com/owasp-amass/amass?utm_source=openai))
- Supporting API security discovery by identifying API-bearing hosts/subdomains that feed downstream API-specific analysis. (Inference based on Amass’s subdomain and asset discovery role.) ([github.com](https://github.com/owasp-amass/amass?utm_source=openai))

## Limitations
- Coverage depends on the breadth/quality of configured data sources and available API keys; results may vary without proper integrations. ([owasp-amass.github.io](https://owasp-amass.github.io/docs/configuration/data_sources/?utm_source=openai))
- Optional active techniques can increase noise and must respect legal and policy boundaries for the assessed scope. ([owasp.org](https://owasp.org/www-project-amass/?utm_source=openai))
- Findings can include false positives or shared/cloud-hosted assets that need human verification and context prior to action. (Inference from the nature of OSINT-based discovery.)
- Amass focuses on discovery/mapping rather than vulnerability testing; it is typically paired with other assessment tools for validation. (Inference from official descriptions emphasizing asset discovery and mapping.) ([github.com](https://github.com/owasp-amass/amass?utm_source=openai))
- Not API-specific: it surfaces hosts and infrastructure; dedicated API discovery/inspection tools are required to enumerate endpoints, versions, and semantics. (Inference.)

## Related Tools
- ProjectDiscovery Subfinder: Alternative/complementary passive subdomain discovery; often used alongside Amass to broaden coverage before consolidation.
- Nuclei: Downstream templated vulnerability and misconfiguration scanning against assets discovered by Amass.
- Shodan: Internet-wide search engine used after discovery to enrich asset context; also a data source category Amass can leverage via APIs.
- Censys: Internet-wide scanning/search platform for enrichment and verification post-discovery.
- httpx / dnsx (ProjectDiscovery): Lightweight probing and DNS utilities commonly applied to Amass outputs for validation and service inventory.
- Maltego / Graph tools: Visualization/analysis tools that can import Amass data for relationship mapping and pivoting. ([github.com](https://github.com/OWASP/Amass/wiki/User-Guide?utm_source=openai))

## Evidence Gaps
- Public documentation is high level about internal engine details; architecture specifics are limited in official docs.
- Official materials emphasize external asset discovery generally; there is little first-party guidance specific to API endpoint enumeration beyond host discovery.

## Sources
- [OWASP Amass | OWASP Foundation](https://owasp.org/www-project-amass/) (OWASP)
- [GitHub - owasp-amass/amass: In-depth attack surface mapping and asset discovery](https://github.com/owasp-amass/amass) (GitHub / OWASP Amass Project)
- [Configuration - OWASP Amass Project](https://owasp-amass.github.io/docs/configuration/) (OWASP Amass Documentation)
- [Data Sources - OWASP Amass Project](https://owasp-amass.github.io/docs/configuration/data_sources/) (OWASP Amass Documentation)
- [Dashboards - OWASP Amass Project](https://owasp-amass.github.io/docs/dashboards/dashboards/) (OWASP Amass Documentation)
- [User Guide · owasp-amass/amass Wiki](https://github.com/OWASP/Amass/wiki/User-Guide) (GitHub / OWASP Amass Wiki)
- [https://tanosmaalouf.com/how-to/amass](https://tanosmaalouf.com/how-to/amass) (tanosmaalouf.com)
- [https://nest.owasp.org/organizations/owasp-amass](https://nest.owasp.org/organizations/owasp-amass) (nest.owasp.org)
- [https://nest.owasp.dev/projects/amass](https://nest.owasp.dev/projects/amass) (nest.owasp.dev)
- [https://en.wikipedia.org/wiki/OWASP](https://en.wikipedia.org/wiki/OWASP) (en.wikipedia.org)
- [https://www.threatngsecurity.com/glossary/amass](https://www.threatngsecurity.com/glossary/amass) (threatngsecurity.com)
- [https://pt.wikipedia.org/wiki/OWASP](https://pt.wikipedia.org/wiki/OWASP) (pt.wikipedia.org)

## Confidence
high
