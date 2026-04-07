# Burp Suite

> An intercepting proxy–based toolkit and dynamic scanner for discovering and analyzing web application and API security issues across desktop and enterprise (DAST) editions.

## Overview
Burp Suite is a family of web application security testing products from PortSwigger organized around an intercepting HTTP(S)/WebSocket proxy and an integrated dynamic scanner. The desktop line (Community and Professional) combines manual analysis tools—such as Proxy, Repeater, Intruder, Sequencer, Decoder, Comparer, and Logger—with crawl-and-audit capabilities. Burp Suite DAST extends these foundations to organization‑wide, automated dynamic testing with management and CI/CD integrations. Together, the editions support exploratory testing, automated vulnerability discovery, and reporting across a range of application architectures and workflows.

## What It Is
Burp Suite is a modular platform for web and API security testing. In the desktop editions, it functions as a hands‑on toolkit centered on an intercepting proxy and a browser‑assisted scanner that performs passive and active checks. In the enterprise‑oriented DAST edition, it operates as a scalable dynamic testing system. Core components include Burp Proxy for traffic interception and modification; Burp Scanner for crawl‑and‑audit analysis; and Burp Collaborator, an out‑of‑band application security testing (OAST) facility that observes DNS/HTTP callbacks to surface otherwise invisible issues. The platform is extensible via the BApp Store and public extension APIs, enabling custom checks and integrations.

## How It Works
Client traffic—typically from a browser or mobile application—is routed through Burp Proxy. To analyze encrypted flows, Burp generates and uses its own root CA certificate, enabling man‑in‑the‑middle inspection of TLS for HTTP(S) and WebSocket messages. Burp Scanner augments manual exploration with pipelines that crawl application surfaces and audit discovered endpoints. Passive checks observe normal traffic, while active checks craft and send test requests to elicit evidence of vulnerabilities; findings are consolidated in the interface and can be exported. For out‑of‑band detection, Burp Collaborator injects unique callback payloads and monitors a dedicated server for subsequent network interactions, correlating observed callbacks with originating test vectors. Edition boundaries shape capabilities: Professional exposes the full desktop toolkit and automated scanning; Community emphasizes manual tooling; DAST provides enterprise‑scale automation and management aligned with CI/CD.

## Core Concepts
- Intercepting proxy for HTTP(S)/WebSockets
- Active vs. passive scanning and browser-powered crawling
- Insertion points and audit coverage
- Out-of-band testing (OAST) with Burp Collaborator
- Scope management and project-based testing
- Integrated manual tools: Repeater, Intruder, Sequencer, Decoder, Comparer, Logger
- Extensibility via BApp Store, extensions, and custom scan checks (BChecks/Bambdas)
- Embedded browser and client-side testing helpers (e.g., DOM Invader)
- Automation and APIs (desktop/DAST)

## Typical Workflow
- Establish authorized testing scope and route client traffic through the proxy to enable observation and control of requests and responses.
- Map the application surface using intercepted traffic, target views, and crawl capabilities to build a navigable model of endpoints.
- Combine manual exploration with scanner-driven passive and active audits to expand coverage within the defined scope.
- Iteratively analyze and manipulate endpoints and parameters, assess token quality, and transform or compare data using integrated utilities.
- Extend coverage or streamline analysis with ecosystem extensions and custom checks where appropriate.
- Synthesize findings into consumable outputs and integrate results with organizational processes or pipelines for ongoing assurance.

## Use Cases
- Authorized penetration testing and security assessments of web applications and APIs
- Bug bounty and vulnerability research against permitted targets
- Dynamic application security testing (DAST) at scale with CI/CD integration
- Verification of authentication, session management, and access control behavior
- Client-side and DOM-focused testing (e.g., DOM XSS) using built-in helpers
- Mobile app traffic analysis by proxying device traffic through Burp for authorized tests
- Regression testing of known issues or classes of issues across releases
- Out-of-band detection of blind or secondary-vectored vulnerabilities via Collaborator

## Limitations
- Use is limited to explicitly authorized targets; active testing can disrupt fragile systems.
- Community Edition omits automated scanning and some features (such as the Collaborator UI) that are available in Professional; DAST targets organizational-scale automation rather than manual testing.
- Automated findings can include false positives or negatives; human validation remains necessary.
- Intercepting TLS requires installation and trust of Burp’s CA certificate; mobile apps employing certificate pinning or additional transport protections may resist interception without app-specific accommodations.
- Scan activity and resource usage must be tuned to target risk tolerance and performance; misconfiguration can generate excessive traffic.
- Coverage is sensitive to authentication state, workflow complexity, and anti-automation controls; complex single-page applications may need guided interaction.

## Related Tools
- OWASP ZAP: Open-source alternative intercepting proxy and scanner for web apps; similar core concepts (proxy, crawler, automated and passive scanning).
- mitmproxy: Open-source intercepting proxy focused on traffic inspection/manipulation; complements Burp when scripting-heavy or headless workflows are needed.
- Fiddler: Web debugging proxy commonly used for HTTP(S) troubleshooting; not a security scanner but similar proxying role.
- Postman: API client for functional testing that can complement Burp’s security-focused traffic interception and scanning.
- Nuclei: Template-based vulnerability scanner often used alongside Burp to codify checks and run them at scale.

## Evidence Gaps
- Local materials referenced mobile runtime tooling (e.g., Frida, Objection) that are not native Burp components; official documentation describes proxying and TLS interception for mobile testing but not general-purpose runtime hooking.
- Feature granularity changes across releases (tool availability and edition boundaries); users should confirm current capabilities against PortSwigger’s product comparison and desktop documentation.

## Sources
- [Burp Suite documentation (product and edition overview)](https://portswigger.net/burp/documentation) (PortSwigger)
- [Burp Suite documentation: Desktop editions (tools index and Pro-only markers)](https://portswigger.net/burp/documentation/desktop) (PortSwigger)
- [Burp Suite DAST vs. Professional (feature comparison and outputs)](https://portswigger.net/burp/dast/resources/dast-vs-professional) (PortSwigger)
- [Burp Scanner (overview of passive/active checks and coverage)](https://portswigger.net/burp/documentation/scanner) (PortSwigger)
- [Auditing with Burp Scanner (passive vs. active and JavaScript analysis)](https://portswigger.net/burp/documentation/scanner/auditing.html) (PortSwigger)
- [Managing CA certificates (TLS interception model)](https://portswigger.net/burp/documentation/desktop/tools/proxy/manage-certificates) (PortSwigger)
- [Mobile testing (proxying mobile traffic; pinning caveats)](https://portswigger.net/burp/documentation/desktop/mobile) (PortSwigger)
- [Burp Collaborator (OAST concept and workflow)](https://portswigger.net/burp/documentation/collaborator) (PortSwigger)
- [BApp Store (extensions ecosystem)](https://portswigger.net/bappstore) (PortSwigger)
- [Burp Suite (encyclopedic overview)](https://en.wikipedia.org/wiki/Burp_Suite) (Wikipedia)
- [https://github.com/PortSwigger/active-scan-plus-plus](https://github.com/PortSwigger/active-scan-plus-plus) (github.com)
- [https://portswigger.net/burp/documentation/desktop/tutorials/augmenting-manual-testing-using-burp-scanner](https://portswigger.net/burp/documentation/desktop/tutorials/augmenting-manual-testing-using-burp-scanner) (portswigger.net)

## Confidence
high
