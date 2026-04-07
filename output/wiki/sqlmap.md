# sqlmap

> sqlmap is an automated framework for detecting and exploiting SQL injection vulnerabilities in web applications and services, with extensive DBMS fingerprinting, data enumeration, and post-exploitation capabilities.

## Overview
sqlmap is an open-source project maintained on GitHub (sqlmapproject/sqlmap) and released under GPLv2. Implemented in Python and running cross‑platform, it focuses on web-exposed SQL injection assessment and automation. The project documents broad support for relational and SQL‑compatible database management systems (DBMSs), five primary SQL injection techniques, DBMS and operating system fingerprinting, session handling, proxy support, and optional integration with Metasploit for specific takeover features.

## What It Is
sqlmap is a specialized security testing tool for SQL injection (SQLi). It automates the process of probing HTTP‑accessible inputs—such as query parameters, request bodies, and headers—to determine whether untrusted data is interpreted as SQL by a back‑end DBMS. Upon confirming injection, sqlmap can fingerprint the DBMS, infer privileges, and enumerate or extract data, with optional post‑exploitation actions where DBMS features and privileges permit. Its scope is confined to SQL/relational injection; it is not intended for NoSQL injection, SSRF, or other injection classes.

## How It Works
sqlmap ingests a single URL, raw HTTP requests, proxy capture logs, or lists of targets, and tests multiple request components (e.g., GET, POST, Cookie, User‑Agent, Referer) for injection points. Its detection and exploitation engine implements boolean‑based blind, time‑based blind, error‑based, UNION‑based, and stacked‑query techniques, selecting and optimizing methods adaptively based on observed application behavior. After identifying a viable vector, it fingerprints the back‑end DBMS and version, infers the current user or role, and can enumerate users, schemas, tables, columns, and data where privileges allow; it also supports executing custom SQL statements through identified injection points. For DBMSs that expose file system or command execution interfaces and when authorized privileges exist, sqlmap offers post‑exploitation actions, with some advanced takeover paths optionally leveraging Metasploit. Reliability features include tamper scripts for payload mutation to work around basic WAF or filtering, authenticated session handling, proxy support, and session/cookie management. In certain scenarios, it can operate with direct DBMS credentials to perform selected actions without traversing a web injection path.

## Core Concepts
- SQL injection (OWASP Top 10: Injection)
- Five SQLi techniques: boolean‑based blind, time‑based blind, error‑based, UNION‑based, stacked queries
- DBMS fingerprinting and privilege inference
- Data/schema enumeration and selective extraction
- Post‑exploitation via DBMS features (file access, OS command execution)
- Tamper scripts for payload mutation and basic WAF/filter evasion
- Session, authentication, and proxy integration
- Optional integration with Metasploit for advanced takeover paths

## Typical Workflow
- Ingest one or more target requests (URL or full HTTP message) and define scope.
- Probe candidate input vectors across query parameters, body fields, and headers for SQLi indicators.
- Fingerprint the DBMS and determine feasible techniques based on application responses and timing.
- If authorized, enumerate schema objects and retrieve constrained data for validation and impact assessment.
- Optionally perform DBMS‑dependent post‑exploitation actions when privileges and rules of engagement allow.
- Store findings and session artifacts for reproducibility, triage, and remediation coordination.

## Use Cases
- Authorized penetration testing of web applications and APIs to validate SQLi exposure and impact
- Security verification during pre‑production testing or regression testing of input validation and parameterization controls
- Reproducing and triaging bug bounty or vulnerability scanner reports related to SQLi
- Red‑team exercises simulating database‑level compromise through an application layer (with proper approvals)
- Training and demonstrations of SQLi classes and mitigations in controlled environments

## Limitations
- Scope limited to SQL/relational injection; it is not intended for NoSQL, LDAP, template, command injection, or SSRF testing
- Effectiveness may be reduced by strong parameterization/ORM patterns, query whitelisting, strict input validation, or read‑only DB roles
- High latency, rate limits, or aggressive WAF/IPS rules can increase noise or timeouts, and some defenses may still block automated probing
- Time‑based inference can be slow and susceptible to network jitter; results require careful validation
- Requires legal authorization; misuse can violate policy or law
- Complex stateful workflows (CSRF tokens, multi‑step transactions, heavy client‑side logic) may require additional setup or may not be fully automatable

## Related Tools
- Burp Suite: Upstream proxy/log source; sqlmap can parse Burp logs and operate through proxies for testing.
- OWASP ZAP: Alternative intercepting proxy often used alongside sqlmap during web testing.
- sqlninja: Related SQLi tool with a focus on Microsoft SQL Server; complementary/alternative for certain environments.
- jSQL Injection: GUI‑oriented SQLi testing tool; alternative interface and workflows.
- BBQSQL: Focused framework for blind SQL injection attacks; complementary for niche scenarios.
- Havij: Legacy SQLi automation tool; historically comparable but not actively recommended.

## Evidence Gaps
- Local evidence mentioned NoSQL and SSRF; official sqlmap documentation confines the tool to SQL/relational injection. No authoritative sources indicate native NoSQL or SSRF testing.
- The supported‑DBMS list in the project wiki is extensive and periodically updated; specific coverage may evolve. When exact DBMS support matters, verify against the current wiki revision for that date.

## Sources
- [sqlmap Wiki — Features](https://github.com/sqlmapproject/sqlmap/wiki/features) (sqlmapproject / GitHub)
- [sqlmap Wiki — Techniques (SQLi types supported)](https://github.com/sqlmapproject/sqlmap/wiki/Techniques) (sqlmapproject / GitHub)
- [sqlmap Wiki — Usage (options, tamper scripts, sessions, proxies)](https://github.com/sqlmapproject/sqlmap/wiki/Usage) (sqlmapproject / GitHub)
- [sqlmap Wiki — Dependencies (language, integrations)](https://github.com/sqlmapproject/sqlmap/wiki/Dependencies) (sqlmapproject / GitHub)
- [OWASP Top 10:2021 — A03: Injection](https://owasp.org/Top10/2021/A03_2021-Injection/) (OWASP Foundation)
- [sqlmap project site (redirect/legacy)](https://sqlmap.sourceforge.net/) (SourceForge (redirects to official site))
- [sqlmap (PyPI package index entry)](https://pypi.org/project/sqlmap/) (Python Packaging Index (PyPI))
- [https://owasp.org/Top10/2021/es/A03_2021-Injection/](https://owasp.org/Top10/2021/es/A03_2021-Injection/) (owasp.org)
- [https://owasp.org/Top10/2021/ar/A03_2021-Injection/](https://owasp.org/Top10/2021/ar/A03_2021-Injection/) (owasp.org)
- [https://blog.glen-thomas.com/security/2025/03/04/owasp-top-10-2021-03.html](https://blog.glen-thomas.com/security/2025/03/04/owasp-top-10-2021-03.html) (blog.glen-thomas.com)
- [https://www.isgroup.biz/en/owasp/top-ten-2021-a3-injection.html](https://www.isgroup.biz/en/owasp/top-ten-2021-a3-injection.html) (isgroup.biz)
- [https://en.wikipedia.org/wiki/Sqlmap](https://en.wikipedia.org/wiki/Sqlmap) (en.wikipedia.org)

## Confidence
high
