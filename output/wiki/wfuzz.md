# Wfuzz

> Wfuzz is a Python-based web fuzzer that injects payloads into HTTP requests to discover endpoints, parameters, and behaviors, and to triage responses using flexible filters and output formats.

## Overview
Wfuzz is a general-purpose web and API fuzzer that operates by substituting FUZZ tokens embedded in any portion of an HTTP request with values drawn from configurable payload generators. It is used in security assessments to enumerate endpoints and parameters and to examine application behavior under varying inputs. The tool provides a request generation and response triage framework rather than a full vulnerability scanner, relying on analyst-selected wordlists and filters to surface potentially interesting responses. The project has a long-running maintenance history with active releases on GitHub and documentation on Read the Docs.

## What It Is
Wfuzz is a command-line and Python library tool for HTTP fuzzing based on a token-replacement model (FUZZ/FUZnZ). It supports injection across URL paths and queries, headers, cookies, bodies (including form and JSON content), and HTTP methods. A plugin system supplies payload generators, encoders/decoders, printers, and filters. Users can route traffic through proxies and use HTTP authentication. A filter language enables inclusion or exclusion of responses by status codes, size, words, lines, headers, and regular expressions. Results can be rendered via multiple output formats or consumed programmatically through the library API.

## How It Works
Wfuzz iterates over payload values wherever FUZZ (or additional positional markers) appear in a request template, issuing corresponding HTTP requests. Multiple payload streams can be combined to fuzz several positions concurrently. Payload generators include wordlists, lists, and ranges; optional encoders and decoders (such as URL encoding, base64, or hashing) transform values prior to injection. Responses are triaged using a filter expression language that can act before or after execution to match on attributes like status code, response length, word and line counts, header presence, or regular expression matches. Execution controls cover concurrency and pacing, recursion for discovered paths, proxy chaining over HTTP or SOCKS, and Basic/Digest/NTLM authentication. The Python library mirrors the CLI concepts to enable integration into custom tooling and pipelines.

## Core Concepts
- FUZZ token and multi-position fuzzing
- Payload plugins and iterators (files, lists, ranges)
- Encoders/decoders to transform payloads
- Filter language for triage and pre/post filtering
- Printers for output formatting and exports
- Recursion for directory/path discovery
- Proxying and authentication support
- Python library API for integration

## Typical Workflow
- Define a target request and injection points by placing FUZZ markers in the appropriate request components.
- Select payloads/wordlists and any encoders/decoders needed to match API formats (e.g., URL-encoding, base64).
- Configure filters to reduce noise (e.g., hide common 404s, focus on specific statuses or length deltas).
- Tune execution (threads, delays, proxies, auth) to respect target stability and rate limits.
- Run fuzzing, review triaged results, and refine payloads/filters iteratively.
- Optionally recurse into discovered paths or export structured results for further analysis in other tools.

## Use Cases
- API endpoint and resource discovery by fuzzing paths and versions across gateways or microservices
- Parameter discovery and behavior analysis for REST/JSON APIs, including hidden or undocumented inputs
- Validation of input handling and content negotiation by fuzzing headers (e.g., Content-Type, Accept) and cookies
- Authentication and authorization surface probing (e.g., header/cookie permutations, verb tampering) within permitted tests
- Baseline and differential response analysis to flag anomalies that merit manual verification
- Evaluating rate limiting and throttling behavior under controlled concurrency and pacing
- Testing for HTTP parameter pollution indicators or inconsistent parameter parsing across components
- WAF/gateway behavior exploration via header variations and encodings (within authorized scopes)

## Limitations
- Not a vulnerability scanner; it does not confirm exploitability or risk without analyst interpretation.
- Effectiveness depends on payload quality and filters; poor wordlists or triage can yield noise or false negatives.
- May trigger rate limiting, WAFs, or account lockouts; requires careful pacing and authorization.
- Lacks stateful, model-based, or coverage-guided fuzzing typical of specialized API fuzzers; complex workflows (chained requests, CSRF/anti-automation) require external orchestration.
- Performance is adequate but generally slower than some compiled fuzzers; heavy runs can be resource-intensive.
- Documentation versions lag behind the newest releases; some features/flags may differ across 2.x vs 3.x lines.

## Related Tools
- ffuf: Go-based fast web fuzzer with similar token model; often chosen for speed and directory/parameter discovery.
- Burp Suite (Intruder/Turbo Intruder): Commercial proxy suite with request fuzzing and high-throughput attack modules; complementary for interactive testing and complex session handling.
- OWASP ZAP (Fuzzer): Open-source proxy with built-in fuzzer; overlaps in request fuzzing and triage features.
- Arjun: Parameter discovery tool; complements Wfuzz for finding hidden GET/POST/JSON parameters.
- Param Miner (Burp extension): Automates parameter discovery/mining; complementary to payload-driven fuzzing.
- Gobuster/Dirb/Dirbuster: Focused directory and DNS brute-forcers; overlap on endpoint enumeration but narrower scope.
- Schemathesis: Property-based testing of APIs from OpenAPI/Swagger; more model-aware than generic fuzzers like Wfuzz.
- RESTler: Stateful, specification-based API fuzzer; contrasts with Wfuzz’s black-box token-replacement approach.

## Evidence Gaps
- Official documentation on Read the Docs primarily covers 2.1.x/2.4-era features, while GitHub shows 3.0.x releases; a consolidated 3.x feature reference is limited.
- Direct, official statements about API-specific capabilities (e.g., JSON schema-aware fuzzing or multi-step state handling) are not present; usage for APIs is inferred from general HTTP fuzzing capability.
- Public performance benchmarks versus other fuzzers (e.g., ffuf) are scarce in authoritative sources.

## Sources
- [Wfuzz: The Web fuzzer — official documentation (concepts, payloads, filters, printers, auth, proxies)](https://wfuzz.readthedocs.io/) (Read the Docs / Wfuzz project)
- [Basic Usage, Authentication, Proxies, Recursion — Wfuzz 2.1.4 docs](https://wfuzz.readthedocs.io/en/latest/user/basicusage.html) (Wfuzz project)
- [Advanced Usage and Filter Grammar — Wfuzz 2.1.4 docs](https://wfuzz.readthedocs.io/en/stable/user/advanced.html) (Wfuzz project)
- [Wfuzz GitHub releases (latest maintained versions incl. 3.0.x)](https://github.com/xmendez/wfuzz/releases) (GitHub)
- [Kali Linux tools: Wfuzz (options overview incl. payloads, encoders, prefilter)](https://www.kali.org/tools/wfuzz/) (Kali Linux / Offensive Security)
- [Wfuzz Python library guide](https://wfuzz.readthedocs.io/en/latest/library/guide.html) (Wfuzz project)
- [Debian package tracker: wfuzz (packaging/maintenance indicator)](https://tracker.debian.org/wfuzz) (Debian)
- [TechTarget overview: How to use Wfuzz to find web application vulnerabilities](https://www.techtarget.com/searchsecurity/feature/How-to-use-Wfuzz-to-find-web-application-vulnerabilities) (TechTarget)
- [https://en.wikipedia.org/wiki/Fuzzing](https://en.wikipedia.org/wiki/Fuzzing) (en.wikipedia.org)
- [https://www.cnn.gr/ellada/story/480411/synagermos-gia-tin-eksafanisi-15xronis-apo-tous-ampelokipous](https://www.cnn.gr/ellada/story/480411/synagermos-gia-tin-eksafanisi-15xronis-apo-tous-ampelokipous) (cnn.gr)
- [https://arxiv.org/abs/2512.15554](https://arxiv.org/abs/2512.15554) (arxiv.org)
- [https://www.reddit.com/r/Pentesting/comments/1pzgldi/free_burp_extension_for_api_pentesting_automates/](https://www.reddit.com/r/Pentesting/comments/1pzgldi/free_burp_extension_for_api_pentesting_automates/) (reddit.com)

## Confidence
high
