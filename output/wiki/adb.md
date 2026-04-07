# Adb

## Overview
Adb is a forensics tool that appears across mobile security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Adb is best understood as a mobile-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Adb works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- mobile security
- android
- ios
- deep links
- owasp mobile
- penetration testing
- data storage
- forensics
- mobile forensics
- cellebrite
- smartphone analysis
- ios forensics

## Typical Workflow
- **Android - Extract from AndroidManifest.xml:**
- apktool d target.apk -o decompiled/
- grep -A 10 "android.intent.action.VIEW" decompiled/AndroidManifest.xml
- **iOS - Extract from Info.plist:**
- **Android storage paths:**
- /data/data/<package_name>/
- ├── shared_prefs/      # SharedPreferences XML files
- ├── databases/         # SQLite databases
- ├── files/             # General files
- ├── cache/             # Cached data

## Use Cases
- Assessing mobile app deep link handling for injection and redirect vulnerabilities
- Testing Android intent filters and iOS URL scheme handlers for unauthorized access
- Evaluating App Links (Android) and Universal Links (iOS) verification
- Testing for link hijacking via competing app registrations
- Assessing whether mobile applications store sensitive data securely on the device filesystem
- Testing for credential leakage through SharedPreferences, SQLite databases, or plists
- Evaluating keychain/keystore implementation for proper access control attributes
- Performing data-at-rest security assessment during mobile penetration tests
- When extracting evidence from smartphones or tablets during an investigation
- For recovering deleted messages, call logs, and location data from mobile devices

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Apktool, Drozer, Frida, ALEAPP, And Sending Broadcasts, Android Backup Extractor, Burp Suite, Cellebrite Physical Analyzer

## Sources
- exploiting-deeplink-vulnerabilities
- exploiting-insecure-data-storage-in-mobile
- performing-mobile-device-forensics-with-cellebrite
- testing-android-intents-for-vulnerabilities
