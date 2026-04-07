# Wireshark

> Wireshark is an open-source network protocol analyzer for capturing and interactively analyzing packet data from live interfaces or capture files, with a companion CLI (TShark) and a capture utility (dumpcap).

## Overview
Wireshark is used for network troubleshooting, protocol development, education, and digital forensics. It provides deep protocol dissection with powerful display filtering and supports numerous capture file formats. Live capture is delegated to the separate dumpcap program and platform capture libraries (libpcap on UNIX-like systems and Npcap on Windows), enabling the main analyzer to operate with normal user privileges. Much of the same analysis capability is available in a terminal interface through TShark. Wireshark’s default capture format is pcapng, though it can read and write pcap and many other formats. When supplied with appropriate keys or secrets, it supports limited decryption workflows (for example, TLS using (Pre)-Master Secret logs).

## What It Is
Wireshark is a GUI-centric protocol analyzer comprising hundreds of dissectors for both common and specialized protocols. It functions within a toolchain where dumpcap performs privileged packet capture, while Wireshark and TShark perform decoding, filtering, and analysis. It operates on live traffic or stored captures and integrates a display filter language tied to protocol fields for targeted investigation and reporting.

## How It Works
- Packet acquisition: Wireshark relies on dumpcap, which uses libpcap on UNIX-like systems and Npcap on Windows to access network interfaces. Captured data are typically written in pcapng, preserving rich capture metadata.
- Dissection and querying: A large library of protocol dissectors parses frames into hierarchical fields. The display filter language references these fields to enable precise queries, selective views, and focused statistics.
- Extensibility: Wireshark supports Lua-based dissectors and plugins, allowing developers to add protocols or analysis taps and to tailor decoding behavior.
- Optional decryption: When provided with suitable secrets, such as TLS (Pre)-Master Secret logs, Wireshark can decrypt and dissect encrypted sessions to aid troubleshooting, within the limits of the underlying cryptographic exchange.

## Core Concepts
- Packet capture vs. protocol dissection
- Capture filters (libpcap syntax) vs. display filters (wireshark-filter syntax)
- pcapng vs. pcap file formats and capture metadata
- Protocol fields and dissector-driven analysis
- Decryption keys and session secrets for analysis of encrypted protocols
- Privilege separation via dumpcap and capture libraries
- Reassembly (stream/flow) and conversation analysis

## Typical Workflow
- Acquire data: run a time-bounded capture with dumpcap/Wireshark or import existing pcap/pcapng files.
- Scope with display filters to isolate relevant hosts, protocols, or conversations.
- Drill into protocol dissection to validate handshakes, headers, and payload semantics.
- Use statistics (e.g., protocol hierarchy, conversations) to identify anomalies, beacons, or outliers.
- If applicable, supply decryption material (e.g., TLS key log) to inspect encrypted exchanges.
- Export artifacts (objects, flows) or save filtered captures to support incident timelines or detections.
- Document findings using profiles, color rules, and saved filters for repeatability.

## Use Cases
- Network forensics on incident-related packet captures (e.g., tracing exfiltration flows)
- Protocol validation and troubleshooting (e.g., HTTP, DNS, TLS handshakes)
- Malware/C2 traffic analysis from sandbox or endpoint-collected pcaps
- Development and verification of network-based detections or IDS signatures
- Operational troubleshooting of performance issues (e.g., TCP retransmissions, latency)
- Reverse engineering and custom protocol analysis with Lua dissectors
- Quality assurance for networked applications and device interoperability

## Limitations
- Capturing may require elevated privileges or driver support; architectural separation (dumpcap) mitigates but does not remove platform constraints.
- High-throughput links can overwhelm host capture buffers, leading to packet loss; Wireshark is not optimized for long-term, line-rate monitoring.
- Encrypted traffic remains opaque without appropriate keys or session secrets; some key types (e.g., ephemeral ECDHE without key logs) prevent decryption.
- Resource intensive on large captures; indexing, reassembly, and GUI rendering can be memory/CPU heavy.
- Not an IDS/IPS: Wireshark provides analysis, not continuous detection or prevention.
- Process attribution to packets is generally unavailable; mapping packets to originating processes is outside libpcap/Npcap scope.
- Handling sensitive packet data raises privacy, legal, and data-handling concerns in production environments.

## Related Tools
- dumpcap: Wireshark’s capture utility; performs privileged packet capture and writes pcapng/pcap for later analysis.
- TShark: Terminal-based Wireshark for headless or scripted analysis; shares dissectors and filters.
- libpcap: Cross-platform capture library used by Wireshark/TShark on UNIX-like systems.
- Npcap: Windows capture/injection library used by Wireshark for packet I/O.
- tcpdump: CLI packet capture/inspection tool; produces pcaps that Wireshark can analyze.
- Zeek: Network security monitor producing higher-level logs complementary to packet analysis.
- NetworkMiner: Forensic artifact extractor from pcaps; complements Wireshark’s decoding with object reconstruction.
- Suricata/Snort: IDS/IPS engines for real-time detection; their alerts can guide targeted Wireshark analysis.
- Termshark: Alternative TUI built on TShark for terminal packet browsing.

## Evidence Gaps
- Exact counts of supported protocols and formats vary by version; authoritative, up-to-date totals are not centrally enumerated in one canonical source.
- Specific performance ceilings (e.g., maximum sustainable capture rates on commodity hardware) are environment-dependent and not formally specified by the project.

## Sources
- [Wireshark • Go Deep (project home)](https://www.wireshark.org/) (Wireshark Foundation)
- [Wireshark • About (features and supported formats)](https://www.wireshark.org/about) (Wireshark Foundation)
- [Wireshark User’s Guide (HTML)](https://www.wireshark.org/docs/wsug_html/) (Wireshark Foundation)
- [tshark(1) manual page](https://www.wireshark.org/docs/man-pages/tshark.html) (Wireshark Foundation)
- [dumpcap(1) manual page](https://www.wireshark.org/docs/man-pages/dumpcap.html) (Wireshark Foundation)
- [Display Filter Reference (Index)](https://www.wireshark.org/docs/dfref/default) (Wireshark Foundation)
- [wireshark-filter(4) manual page](https://www.wireshark.org/docs/man-pages/wireshark-filter) (Wireshark Foundation)
- [libpcap - Wireshark Wiki (capture library usage)](https://wiki.wireshark.org/libpcap) (Wireshark Foundation)
- [Development/PcapNg - Wireshark Wiki](https://wiki.wireshark.org/Development/PcapNg) (Wireshark Foundation)
- [Wireshark Developer’s Guide (capture architecture, Lua support)](https://www.wireshark.org/docs/wsdg_html/) (Wireshark Foundation)
- [Wireshark User’s Guide (PDF, pcapng default; TLS key log tooling references)](https://www.wireshark.org/download/docs/Wireshark%20User%27s%20Guide.pdf) (Wireshark Foundation)
- [Npcap: Windows Packet Capture Library & Driver](https://npcap.com/) (Nmap Project)

## Confidence
high
