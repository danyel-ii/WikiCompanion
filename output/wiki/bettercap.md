# Bettercap

> An extensible, cross‑platform network attack and reconnaissance framework for 802.11 Wi‑Fi, Ethernet/IPv4/IPv6, BLE, HID, and CAN‑bus, featuring MITM components, sniffing, spoofing, and scriptable automation via caplets.

## Overview
Bettercap is a general‑purpose, interactive offensive‑security framework for local network and wireless assessment. It consolidates reconnaissance and active manipulation across Ethernet/IP and multiple radio technologies, exposing modules for Wi‑Fi scanning and interference, LAN man‑in‑the‑middle (MITM) via spoofing, packet sniffing and application‑layer interception, as well as discovery and interaction with BLE, HID, and CAN‑bus environments. Operation is orchestrated from an interactive console or automated through caplets and a REST/web interface. Its design makes it a common choice for red‑team exercises, wireless security testing, and controlled laboratory research; it is not intended for bandwidth management or traffic shaping.

## What It Is
Bettercap is a Go‑based, portable framework that aggregates passive discovery and active attack primitives under a modular architecture. Modules cover Wi‑Fi (reconnaissance, deauthentication, handshake/PMKID capture, rogue beacon injection), Ethernet/IP MITM (ARP, DNS, NDP, DHCPv6 spoofing), packet capture and filtering, HTTP/HTTPS proxying, and peripheral/radio domains such as BLE, HID, and CAN. A script system (“caplets”) enables multi‑stage compositions of these capabilities, and a REST/web UI provides external control and telemetry. The tool’s scope spans reconnaissance, credential exposure on insecure protocols, and adversary emulation on local networks within authorized testing boundaries.

## How It Works
At a systems level, Bettercap binds to a chosen network interface and loads protocol‑specific modules that operate at link, network, and application layers. On Wi‑Fi, compatible NICs are placed in monitor mode to channel‑hop, enumerate access points and clients, perform targeted deauthentication, capture WPA/WPA2/WPA3 handshakes and PMKIDs, and inject management beacons to simulate rogue access points. On wired and IPv6‑enabled networks, spoofing modules (ARP, DNS, NDP, DHCPv6) establish traffic redirection for MITM observation or manipulation. A sniffer provides packet capture with filtering and limited fuzzing, while HTTP/HTTPS proxies expose hooks for traffic inspection or modification, constrained by modern protections such as HSTS and HTTPS‑first policies. Caplets coordinate sequencing and state across modules and proxies, and the REST API/web UI expose events, metrics, and control surfaces for integration and monitoring.

## Core Concepts
- Modular MITM framework (ARP/DNS/NDP/DHCPv6 spoofing)
- Wi‑Fi reconnaissance and attack primitives (scan, deauth, PMKID, handshake capture, rogue beacons)
- Sniffing and fuzzing (BPF/regex filters)
- Scriptable automation with caplets
- Application‑layer proxies (HTTP/HTTPS) with pluggable scripts
- Limitations imposed by modern defenses (e.g., HSTS; WPA3/PMF management‑frame protection)
- Cross‑medium coverage (Ethernet/IP, 802.11, BLE, HID, CAN‑bus)

## Typical Workflow
- Define lawful assessment scope and obtain authorization for active testing.
- Select interface(s); for Wi‑Fi, ensure monitor and injection capabilities are supported by the NIC/driver.
- Use recon modules to enumerate the environment (APs/clients, IP hosts, BLE devices).
- Optionally initiate controlled MITM (ARP/DNS/NDP spoofing) or Wi‑Fi actions (targeted deauth, channel announcements, rogue beaconing) to observe defensive controls and user experience.
- Capture and analyze traffic and events via net.sniff and proxies; persist artifacts (pcap, logs, handshakes/PMKIDs).
- Automate multi‑stage scenarios with caplets and monitor/steer via the REST API or web UI.
- Report only aggregated, approved findings; preserve chain‑of‑custody for captured evidence.

## Use Cases
- Wireless security assessment of WPA2/WPA3 deployments, including validation of Protected Management Frames (PMF) resilience and WIDS/WIPS coverage
- Red‑team or adversary emulation of local‑network MITM to test detection/response (ARP/DNS spoofing, credential harvesting on insecure services)
- Rogue AP/beacon and deauthentication simulations to validate enterprise wireless policy enforcement and user awareness
- Controlled lab research on HTTPS interception behaviors and modern browser protections (HSTS) without targeting production users
- Inventory and monitoring of local subnets and BLE surroundings during onsite security evaluations
- Integration into automated testbeds via REST/web UI and caplets for repeatable scenarios

## Limitations
- Not a QoS or traffic‑shaping tool; bandwidth throttling is outside its primary feature set.
- Active operations (spoofing, deauth, rogue beacons) are intrusive, often illegal without authorization, and easily trigger WIDS/WIPS and endpoint/network alerts.
- Modern browsers and sites with HTTPS‑Only policies and HSTS (including preload lists) prevent downgrade/sslstrip‑style interception in most real‑world scenarios.
- WPA3 and WPA2 deployments with Protected Management Frames (PMF/802.11w) substantially mitigate deauthentication and related management‑frame attacks, limiting Evil Twin efficacy.
- Wi‑Fi features require compatible hardware/drivers supporting monitor mode and packet injection; platform support varies.
- Network segmentation, certificate pinning, and encrypted application protocols limit credential harvesting via passive sniffing.
- Running as root/admin and manipulating network stacks may impact system/network stability in production environments.

## Related Tools
- Aircrack‑ng suite: Adjacent Wi‑Fi assessment toolkit (handshake capture, cracking, deauth); often compared or combined with Bettercap for wireless testing.
- Ettercap: Legacy MITM/sniffing tool for Ethernet/IP; shares spoofing/sniffing goals but lacks Bettercap’s broader radio support and caplets.
- Responder/mitm6: Targeted LLMNR/NetBIOS/NBNS/IPv6 spoofing on LANs; complements Bettercap’s general MITM modules.
- WiFiphisher: Specialized Evil Twin and phishing framework; overlaps with Bettercap’s rogue AP/beacon capabilities.
- Scapy: Packet crafting framework used for custom network tests; complements Bettercap’s ready‑to‑use modules.
- Pwnagotchi: Uses Bettercap for automated Wi‑Fi (handshake/PMKID) collection in research/education contexts.

## Evidence Gaps
- Local evidence characterized Bettercap as a “traffic shaping”/QoS tool; authoritative sources do not describe bandwidth throttling or QoS control as native capabilities. If such functionality exists, it is not prominent in official docs.
- Some third‑party blogs discuss HTTPS downgrade and hstshijack usage, but effectiveness is highly variable and constrained by HSTS/HTTPS‑First; official documentation does not guarantee success against modern browsers.
- Exact support nuances for WPA3 features evolve with releases; environment‑specific behavior (e.g., PMKID/handshake capture against certain AP chipsets) may require up‑to‑date release notes beyond general docs.

## Sources
- [GitHub - bettercap/bettercap (project overview and features)](https://github.com/bettercap/bettercap) (GitHub)
- [WiFi module documentation (scan, deauth, PMKID, rogue AP/beacons)](https://www.bettercap.org/modules/wifi/) (bettercap.org)
- [Installation (stable and from source)](https://www.bettercap.org/project/installation/) (bettercap.org)
- [net.sniff module (sniffer/fuzzer)](https://www.bettercap.org/modules/ethernet/netsniff/) (bettercap.org)
- [net.probe module (active probing)](https://www.bettercap.org/modules/ethernet/netprobe) (bettercap.org)
- [Caplets module (scriptable automation)](https://www.bettercap.org/modules/core/caplets/) (bettercap.org)
- [Strict-Transport-Security header (HSTS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) (MDN Web Docs)
- [Cisco: Configure 802.11w/PMF and WPA3 security enhancements](https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/17-16/config-guide/b_wl_17_16_cg/m_wpa3_security_enhancements.html) (Cisco)
- [NSA WPA3 guidance (management‑frame protection context)](https://www.nsa.gov/portals/75/documents/what-we-do/cybersecurity/professional-resources/ctr-cybersecurity-technical-report-wpa3.pdf?v=1) (National Security Agency)
- [https://www.bettercap.org/index.html](https://www.bettercap.org/index.html) (bettercap.org)
- [https://www.reddit.com/r/AskNetsec/comments/1chua84](https://www.reddit.com/r/AskNetsec/comments/1chua84) (reddit.com)
- [https://www.reddit.com/r/HowToHack/comments/1chu8r0](https://www.reddit.com/r/HowToHack/comments/1chu8r0) (reddit.com)

## Confidence
high
