# Hashcat

> A high-performance, cross‑platform password recovery tool that supports hundreds of hash and key‑derivation formats, multiple attack modes, and GPU/accelerator backends for offline credential security testing.

## Overview
Hashcat is an open‑source password recovery and auditing utility used to evaluate the strength of stored credentials and related secrets across diverse systems and protocols. It operates on offline cryptographic material—password hashes, password‑derived keys, and certain protocol artifacts—rather than live authentication endpoints. The project supports CPUs and hardware accelerators via CUDA, OpenCL, HIP, and Metal backends, and implements several complementary attack modes (dictionary/straight, combinator, mask/brute‑force, and hybrids). Its hash‑mode catalog spans common and specialized algorithms, including NTLM, bcrypt, PBKDF2, WPA/WPA2 PMKID/EAPOL, and HMAC‑signed JSON Web Tokens (JWT). Hashcat is widely used in security testing, incident response, and digital forensics to validate password policies, identify weak secrets, and benchmark defensive configurations. It is released under the MIT license and actively maintained in a public repository.

## What It Is
Hashcat is a command‑line framework for offline password and secret auditing. It focuses on recovering plaintexts from captured hashes, password‑derived encryption keys, and selected protocol artifacts such as WPA/WPA2 handshakes and PMKIDs, as well as attempting to recover secrets used in HMAC‑signed JWTs. It is not an exploitation or online attack framework and does not target live, rate‑limited authentication services. In API‑security contexts, its scope includes evaluation of HMAC‑based JWT secret strength and assessment of password‑derived credentials used by backend systems.

## How It Works
Hashcat normalizes inputs to a specific hash‑mode format and selects optimized compute kernels for the chosen algorithm. It then generates candidate passwords/secrets using configurable strategies—dictionary (straight) attacks with rule‑based mutations, combinator attacks that join words, mask/brute‑force patterns, and hybrid methods that mix wordlists and masks. External generators such as maskprocessor, statsprocessor, and princeprocessor can feed additional candidate streams. Workloads execute on CPU or accelerator backends (CUDA, OpenCL, HIP, Metal), enabling large‑scale parallel testing of candidates against target hashes. For Wi‑Fi auditing, WPA/WPA2 handshakes and PMKIDs are converted to the unified 22000/22001 text formats to improve efficiency and reuse of PBKDF2 computations. For JWT auditing, hash‑mode 16500 targets HMAC‑signed tokens by attempting to recover the shared secret; JWTs signed with public‑key algorithms are out of scope for secret recovery. Results are persisted in a potfile, with per‑hash status and performance metrics available for downstream analysis and reporting, including structured status/benchmark outputs.

## Core Concepts
- Offline password/secret auditing
- GPU and hardware‑accelerated cracking backends (CUDA/OpenCL/HIP/Metal)
- Attack modes: straight (dictionary), combinator, mask/brute‑force, hybrids
- Rule‑based wordlist mutation
- Hash‑mode catalog (over 300 algorithms) including NTLM, bcrypt, WPA PMKID/EAPOL, JWT (HMAC)
- Unified WPA hash‑mode 22000/22001 workflow
- Potfile for recovered credentials
- Distributed/at‑scale workflows (supported via community tools)

## Typical Workflow
- Establish authorization and scope for credential/secret assessment, ensuring only in‑scope material is processed.
- Collect or extract hashes and artifacts, and normalize them to supported formats (e.g., convert WPA captures to 22000 text and assemble hashes with required salts/parameters).
- Select the appropriate hash‑mode and design an attack strategy that combines wordlists, rules, masks, or hybrids informed by contextual password policies.
- Execute attacks on suitable hardware backends, monitor progress and correctness via performance and health metrics, and iterate strategies based on interim results.
- Record outcomes (cracked and uncracked), analyze patterns to inform policy and training, and coordinate remediation for weak credentials or secrets.

## Use Cases
- Enterprise credential audits to validate password policy effectiveness and detect weak or reused passwords.
- Incident response triage on leaked hash dumps to assess exposure and prioritize resets.
- Wireless security assessments of WPA/WPA2‑PSK deployments using PMKID/EAPOL artifacts, with outcomes informing segmentation and PSK strength decisions.
- API‑security assessments of HMAC‑signed JWTs to evaluate secret key strength and identify weak/shared secrets that enable offline forgery.
- Validation of hardening initiatives (e.g., adoption of stronger KDFs or increased iteration counts) by measuring practical cracking resistance.
- Hardware and algorithm benchmarking to set realistic organizational password requirements.

## Limitations
- Operates only on offline material; it does not test live, rate‑limited endpoints.
- Effectiveness is bounded by cryptographic design and cost parameters; slow KDFs (e.g., bcrypt, scrypt, Argon2 with high cost) and high‑entropy passwords may remain infeasible to crack.
- JWT applicability is limited to HMAC‑based tokens (HS*); RSA/ECDSA‑signed tokens (RS*/ES*) do not expose a recoverable secret.
- Wi‑Fi success depends on capture quality and the use of unified 22000/22001 formats, which supersede legacy .cap/.hccapx workflows in current versions.
- Performance depends on correct GPU/accelerator drivers and supported hardware; driver mismatches are a common failure mode.
- Use is constrained by legal and ethical requirements and must be limited to authorized testing and analysis.

## Related Tools
- John the Ripper: Alternative offline password cracker; complements hashcat and supports some differing formats.
- hcxdumptool / hcxtools: Preferred modern tools to capture and convert WPA/WPA2 artifacts into hash‑mode 22000/22001 for use with Hashcat.
- maskprocessor, statsprocessor, princeprocessor: Candidate generators used alongside Hashcat to produce structured guesses for mask, Markov, or PRINCE‑based attacks.
- hashcat-utils: Supplemental utilities maintained by the project to assist with advanced cracking workflows.
- Hashtopolis: Community orchestration platform for distributing Hashcat jobs across multiple systems.

## Evidence Gaps
- Official documentation lists JWT hash‑mode 16500 but does not explicitly consolidate, in a single statement, that it targets only HMAC‑signed JWTs; this limitation is inferred from JWT standards and the mode’s design.
- Integration patterns for broader API‑security workflows beyond JWT secret auditing are primarily community practice rather than vendor‑provided guidance.

## Sources
- [hashcat/hashcat – GitHub repository (README: description, platforms, license, attack modes, algorithms)](https://github.com/hashcat/hashcat) (GitHub)
- [Hashcat wiki – Project overview, attack modes, options, and hash-mode listings (incl. 16500 JWT)](https://hashcat.net/wiki/doku.php?id=hashcat) (hashcat.net)
- [Hashcat wiki – Cracking WPA/WPA2 with hashcat (unified 22000/22001 formats and deprecation of legacy formats)](https://hashcat.net/wiki/doku.php?id=cracking_wpawpa2) (hashcat.net)
- [Kali Linux Tools: hashcat (summary of capabilities and attack modes)](https://www.kali.org/tools/hashcat/) (Offensive Security)
- [JWT (JSON Web Token) – overview of HMAC vs. RSA/ECDSA signing (standards context)](https://en.wikipedia.org/wiki/JSON_Web_Token) (Wikipedia)
- [Hashcat v4.1.0 forum notes – Added hash-mode 16500 (JWT)](https://hashcat.net/forum/thread-7317.html) (hashcat.net)
- [Hashcat FAQ – Driver correctness and troubleshooting (wrongdriver)](https://hashcat.net/faq/wrongdriver) (hashcat.net)
- [Hashcat wiki – Start page (core attack modes; related utilities such as maskprocessor/statsprocessor/princeprocessor)](https://hashcat.net/wiki/) (hashcat.net)
- [ZerBea/hcxdumptool – modern Wi‑Fi capture tooling referenced by Hashcat docs](https://github.com/ZerBea/hcxdumptool) (GitHub)
- [John the Ripper – official project site (related/alternative tool)](https://openwall.com/john/) (Openwall Project)
- [https://www.hashcat.io/](https://www.hashcat.io/) (hashcat.io)
- [https://www.yonlabs.com/2020/10/hashcat-to-crack-jwt/index.html](https://www.yonlabs.com/2020/10/hashcat-to-crack-jwt/index.html) (yonlabs.com)

## Confidence
high
