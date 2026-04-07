# Aircrack-ng Suite

> A collection of command-line tools for monitoring, testing, and auditing Wi‑Fi networks, including packet capture, frame injection, and offline key recovery for WEP and WPA/WPA2‑PSK.

## Overview
Aircrack‑ng is an open‑source suite for assessing security of IEEE 802.11 networks at the MAC layer. It organizes functionality into four areas: monitoring (frame capture and export), attacking (frame replay, deauthentication, fake AP), testing (adapter/driver capability checks), and cracking (offline key recovery for WEP and WPA/WPA2‑PSK, including PMKID workflows). The toolkit is CLI‑centric and scriptable, with primary use on Linux and limited support on other platforms. Beyond offensive testing, it is used by defenders to validate wireless monitoring pipelines, tune WIDS/WIPS, and evaluate policy controls such as Protected Management Frames (PMF/802.11w).

## What It Is
A modular toolkit composed of specialized utilities that operate on 802.11 traffic and device behavior. Notable components include: airmon‑ng for managing monitor mode; airodump‑ng for discovery and capture of 802.11 frames; aireplay‑ng for frame injection and replay; aircrack‑ng for offline recovery of WEP and WPA/WPA2‑PSK keys; airdecap‑ng for decrypting captures with known keys; airbase‑ng for emulating access points or clients; and airolib‑ng for precomputing PMKs to accelerate PSK workflows. Its cracking focus is WEP and WPA/WPA2‑PSK using captured handshakes or PMKIDs, with handling for environments that implement PMF/802.11w. The project positions the suite for authorized assessment and emphasizes hardware/driver compatibility.

## How It Works
The suite interfaces with compatible wireless chipsets and drivers that support monitor mode and, for active testing, raw frame injection. In passive operation, airodump‑ng captures management and data frames to enumerate BSSIDs, SSIDs, channels, cipher suites, and associated clients, exporting results for external analysis. For active assessments, aireplay‑ng constructs and transmits crafted frames—such as replays or deauthentication—to study network and client behavior and, where permitted, to facilitate capture of authentication material. Offline key recovery uses aircrack‑ng to test candidate keys against captured WPA/WPA2 handshakes or PMKIDs and to analyze WEP IVs, verifying correctness by deriving and comparing message integrity codes or keys. Airbase‑ng can emulate AP or client roles to probe client behavior and evaluate controls against rogue infrastructure. Throughout, adapter and driver capabilities determine feasibility and reliability of capture and injection.

## Core Concepts
- 802.11 management/data/control frames and monitor mode
- Frame injection/replay for behavior and resiliency testing
- Offline verification of WEP and WPA/WPA2‑PSK credentials using EAPOL handshakes or PMKIDs
- PMF/802.11w implications for deauthentication and action frames
- Adapter/driver dependencies for capture and injection
- Scriptable CLI workflows enabling integration with other tools

## Typical Workflow
- Plan an authorized assessment scope and confirm regulatory compliance and change windows.
- Validate adapter/driver support for monitor mode and injection; baseline RF environment.
- Passively map the wireless environment (BSSIDs, channels, cipher/auth suites, clients) and export results for inventory comparison.
- Capture authentication material (e.g., EAPOL handshakes or PMKIDs) during permitted tests, minimizing disruption and documenting triggers/controls.
- Perform offline key-strength assessment against captured material to evaluate password policy effectiveness; prefer wordlists reflective of the environment and policy.
- Validate defensive controls (WIDS/WIPS alerts, PMF/802.11w behavior, rogue AP detection) and document detections/response.
- Summarize findings with emphasis on configuration hygiene, credential strength, segmentation, and user/device onboarding practices.

## Use Cases
- Auditing Wi‑Fi configurations (ciphers, AKMs, PMF, transition modes) across enterprise, guest, and IoT SSIDs
- Validating WIDS/WIPS detections for frame injection, deauth attempts, fake APs, and anomalous management frames
- Assessing credential strength and password policy for WPA/WPA2‑PSK using offline testing of authorized captures
- Building wireless asset inventories (BSSID/ESSID/channel/cipher) and spotting unmanaged/rogue infrastructure
- Testing adapter/driver capabilities for security operations labs and red/blue team readiness drills
- Supporting migration assessments to WPA3 by inventorying transition modes and PMF enforcement while using external tools for SAE-focused workflows

## Limitations
- Requires compatible wireless chipsets/drivers; many adapters do not support monitor mode or reliable injection, which constrains capabilities.
- Active techniques (e.g., deauthentication, fake AP) can be disruptive and unlawful without explicit authorization; testing windows and safety checks are essential.
- Windows support is limited; official docs note additional, user-supplied DLL requirements and lack of support, making Linux the practical platform of record.
- Cracking effectiveness is bounded by password entropy and capture quality; strong, random passphrases and enterprise EAP methods are not practically attackable via these offline PSK workflows.
- Modern protections (e.g., Protected Management Frames/802.11w) mitigate some management-frame attacks and can alter test outcomes; WPA3‑SAE further reduces viability of traditional handshake capture attacks.
- The project’s core cracking focus is WEP and WPA/WPA2‑PSK; for WPA3‑SAE and advanced hash formats, practitioners commonly integrate external tools.

## Related Tools
- hcxdumptool/hcxtools: Often used to capture/convert WPA{2,3} handshakes/PMKIDs to formats consumed by GPU crackers; complements Aircrack‑ng’s capture/cracking workflows.
- Hashcat: GPU-accelerated offline password cracker frequently used with WPA/WPA2/WPA3‑SAE material exported from Aircrack‑ng or hcxtools.
- Kismet: Passive wireless IDS/wardriving tool used for continuous RF monitoring; complements airodump‑ng for long-term discovery.
- Wireshark: Protocol analyzer used to inspect 802.11 captures collected by airodump‑ng and to validate handshake/PMKID content.
- Bettercap: Network attack/monitoring framework that includes Wi‑Fi client/AP manipulation; overlaps with some airbase‑ng/aireplay‑ng scenarios.
- Wifite: Wrapper that automates Aircrack‑ng and related tools for streamlined testing; not a replacement for controlled, scoped assessments.

## Evidence Gaps
- Official documentation highlights WPA1/2‑PSK and PMKID support but is sparse on first‑party, current details about WPA3‑SAE cracking capabilities within aircrack‑ng itself; many modern SAE workflows rely on hcxtools/hashcat. Clarify exact, current SAE support status in future updates.
- Release cadence: the website prominently lists version 1.7 (May 10, 2022) while development continues on GitHub; verify future stable releases for updated capabilities.
- Documentation pages for some subtools (e.g., airbase‑ng) are noted as under development or partially complete, limiting authoritative detail on lesser‑used flags.

## Sources
- [Aircrack-ng — Main documentation (tool list, capabilities)](https://www.aircrack-ng.org/documentation.html) (Aircrack-ng Project)
- [Aircrack-ng — Project homepage (capability areas, platforms, release note, PMKID mention)](https://www.aircrack-ng.org/index.html) (Aircrack-ng Project)
- [Aircrack-ng — Wiki main page (capabilities and downloads)](https://wiki.aircrack-ng.org/) (Aircrack-ng Project)
- [Aircrack-ng — GitHub repository (project overview, docs pointer)](https://github.com/aircrack-ng/aircrack-ng) (GitHub / Aircrack-ng Project)
- [Aircrack-ng — Airbase‑ng documentation (fake AP/client emulation; doc status)](https://www.aircrack-ng.org/doku.php?id=airbase-ng) (Aircrack-ng Project)
- [Aircrack-ng — Resources (official links, documentation hubs)](https://www.aircrack-ng.org/resources.html) (Aircrack-ng Project)
- [Protected Management Frames (IEEE 802.11w) — IEEE SA page](https://standards.ieee.org/ieee/802.11w/3736) (IEEE Standards Association)
- [Configure 802.11w (PMF) on Cisco WLC — implications for deauth/disassoc protection](https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wireless-lan-wlan/212576-configure-802-11w-management-frame-prote.html) (Cisco)
- [Wi‑Fi Alliance introduces Wi‑Fi CERTIFIED WPA3 (press announcement)](https://www.globenewswire.com/news-release/2018/06/26/1529297/0/en/Wi-Fi-Alliance-introduces-Wi-Fi-CERTIFIED-WPA3-security.html) (Wi‑Fi Alliance via GlobeNewswire)
- [https://en.wikipedia.org/wiki/Aircrack-ng](https://en.wikipedia.org/wiki/Aircrack-ng) (en.wikipedia.org)
- [https://es.wikipedia.org/wiki/Aircrack-ng](https://es.wikipedia.org/wiki/Aircrack-ng) (es.wikipedia.org)
- [https://www.cyberglossary.study/aircrack-ng](https://www.cyberglossary.study/aircrack-ng) (cyberglossary.study)

## Confidence
high
