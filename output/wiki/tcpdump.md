# tcpdump

> A command-line packet capture and analyzer that uses libpcap to sniff, filter, display, and save network traffic in pcap/pcapng formats for security investigation and troubleshooting.

## Overview
tcpdump is a long-standing, cross-platform packet analyzer for Unix-like systems and environments that provide the pcap API. It captures packets through libpcap (or Npcap on Windows), applies Berkeley Packet Filter (BPF) expressions, decodes numerous protocols, and outputs human-readable summaries or writes capture files for offline analysis. It is widely used in security and network operations for incident response, intrusion analysis, policy validation, and diagnostics. tcpdump is free software under a BSD-style license and is commonly bundled with operating systems and security distributions.

## What It Is
tcpdump is a command-line packet capture tool that reads from live network interfaces or existing capture files and can write raw packet data to disk. It is built atop libpcap (or Npcap on Windows), which supplies a portable capture API and BPF-based filtering. Captures are stored in pcap or, when supported by the linked libpcap, pcapng formats, enabling interoperability with analyzers such as Wireshark.

## How It Works
- Packet acquisition: tcpdump opens a network interface via libpcap and receives frames from the operating system’s capture mechanism, optionally enabling promiscuous mode to increase visibility on shared media or mirrored ports.
- Filtering: User-provided expressions are compiled into BPF bytecode and executed, typically in kernel space, to discard non-matching traffic before it reaches user space, reducing overhead and loss.
- Dissection and output: tcpdump parses common link-layer and upper-layer protocols to produce concise textual summaries. It can also bypass decoding and write raw packets directly to capture files for later analysis.
- Capture file handling: The tool reads and writes pcap and, depending on libpcap support, pcapng. These formats preserve packet data and timestamps for cross-tool workflows.
- Privilege model: Because opening capture devices often requires elevated privileges, tcpdump may start with higher rights and then drop privileges after initializing capture to reduce risk in long-running sessions.

## Core Concepts
- libpcap/Npcap as the capture API and portability layer
- Berkeley Packet Filter (BPF) expression syntax and kernel/user-space execution
- pcap and pcapng capture file formats and interoperability with Wireshark
- Promiscuous mode and its effect on visibility on switched networks
- Snapshot length (snaplen) and buffering impacting loss and performance
- Timestamp types/precision recorded in captures
- Privilege management and post-initialization privilege drop

## Typical Workflow
- Formulate a focused BPF capture filter to constrain traffic volume at the source.
- Start a live capture on relevant interfaces, selecting snapshot length and buffers to balance fidelity and performance.
- Enable rolling capture files and rotation for sustained monitoring to bound storage consumption when needed.
- Export packets to pcap/pcapng for deeper offline analysis in complementary tools.
- Assess capture statistics (received/filtered/dropped) to evaluate fidelity and refine filters or buffers.
- Drop privileges after capture initialization to harden long-running operations when supported.

## Use Cases
- Incident response and threat hunting by capturing indicators of compromise or command-and-control traffic at chokepoints.
- Validation of firewall/IDS/IPS policies by confirming permitted or blocked traffic on specific interfaces or spans.
- Malware and sandbox analysis to observe network behaviors and protocol usage.
- Network troubleshooting for latency, retransmissions, DNS issues, and MTU or fragmentation anomalies.
- Baseline creation and anomaly detection support by exporting curated captures to SIEM or NDR pipelines.

## Limitations
- Encrypted traffic (TLS, SSH, IPsec, DoH/DoT) limits payload visibility; metadata may still be useful.
- High-throughput links can incur packet loss without careful filtering, buffering, and storage planning.
- NIC/OS offloading features (GRO/LRO/TSO) can alter capture semantics, presenting coalesced segments or checksum anomalies; disabling offloads may be required for wire-accurate analysis.
- Captures typically require elevated privileges; incorrect privilege-dropping configurations may prevent file output or rotation.
- Capture visibility depends on topology (e.g., switched networks, SPAN/TAP availability) and may miss traffic not seen on the chosen interface.
- Time synchronization and timestamp precision affect correlation across sensors and logs.
- Legal and privacy considerations may restrict packet capture and retention in some jurisdictions or environments.

## Related Tools
- Wireshark: GUI analyzer using libpcap/Npcap; reads and writes pcap/pcapng and complements tcpdump for deep inspection.
- TShark: Wireshark’s command-line analyzer; often used with tcpdump for automated or headless decoding.
- dumpcap: Wireshark’s capture engine optimized for high-performance capture into files.
- tcptrace: Post-processing utility for tcpdump/Wireshark capture files to summarize TCP connections and performance metrics.
- editcap/mergecap: Utilities for trimming, filtering, and merging pcap/pcapng files in analysis pipelines.
- ngrep: Payload-oriented pattern matching against packets; complements BPF’s header-focused filtering.
- WinDump: Windows port of tcpdump that uses WinPcap/Npcap for capture.
- libpcap/Npcap: Underlying capture libraries providing the pcap API on which tcpdump relies.
- netsniff-ng: Alternative Linux toolkit for capture, replay, and analysis with different performance trade-offs.

## Evidence Gaps
- Direct access to tcpdump.org manpages and official release notes was blocked via this interface; option semantics and features were corroborated using reputable mirrors, and availability may vary by OS or tcpdump/libpcap version.
- The exact current stable version as of April 7, 2026 is based on secondary sources rather than the official site; confirm against tcpdump.org for authoritative release information.

## Sources
- [tcpdump(8) — Linux manual page](https://man7.org/linux/man-pages/man8/tcpdump.8.html) (man7.org)
- [pcap-filter(7) — Packet filter syntax](https://man7.org/linux/man-pages/man7/pcap-filter.7.html) (man7.org)
- [pcap-savefile(5) — pcap file format](https://man7.org/linux/man-pages/man5/pcap-savefile.5.html) (man7.org)
- [Debian tcpdump(8) man page (privilege drop behavior)](https://manpages.debian.org/unstable/tcpdump/tcpdump.8.en.html) (Debian Project)
- [Wireshark Developer/User Docs: Capture files (pcap/pcapng)](https://www.wireshark.org/docs/wsdg_html_chunked/ChWorksCaptureFiles.html) (Wireshark Foundation)
- [PcapNG File Format overview](https://pcapng.com/) (PcapNG (IETF draft community site))
- [libpcap — the tcpdump group (project repository)](https://github.com/the-tcpdump-group/libpcap) (GitHub)
- [Npcap: Windows Packet Capture Library & Driver](https://npcap.com/) (Nmap Project)
- [Pcap (overview of formats and interoperability)](https://en.wikipedia.org/wiki/Pcap) (Wikipedia)
- [tcpdump (overview, history)](https://en.wikipedia.org/wiki/Tcpdump) (Wikipedia)
- [FreeBSD tcpdump(1) manual (mirror)](https://man.freebsd.org/tcpdump) (FreeBSD Project)
- [tcptrace — Official Homepage](https://www.tcptrace.org/) (tcptrace.org)

## Confidence
high
