# Drozer

## Overview
Drozer is a dynamic analysis tool that appears across mobile security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Drozer is best understood as a mobile-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Drozer works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- mobile security
- android
- ios
- deep links
- owasp mobile
- penetration testing
- frida
- dynamic analysis
- intents
- ipc security

## Typical Workflow
- **Android - Extract from AndroidManifest.xml:**
- apktool d target.apk -o decompiled/
- grep -A 10 "android.intent.action.VIEW" decompiled/AndroidManifest.xml
- **iOS - Extract from Info.plist:**
- adb shell getprop ro.product.cpu.abi
- adb push frida-server-16.x.x-android-arm64 /data/local/tmp/frida-server
- adb shell chmod 755 /data/local/tmp/frida-server
- adb shell /data/local/tmp/frida-server &
- drozer console connect
- run app.package.info -a com.target.app

## Use Cases
- Assessing mobile app deep link handling for injection and redirect vulnerabilities
- Testing Android intent filters and iOS URL scheme handlers for unauthorized access
- Evaluating App Links (Android) and Universal Links (iOS) verification
- Testing for link hijacking via competing app registrations
- Static analysis results need runtime validation on an actual Android device
- The target app uses obfuscation (DexGuard, custom packers) that prevents effective static analysis
- Testing requires observing actual API calls, decrypted data, or runtime-generated values
- Assessing root detection, tamper detection, or anti-debugging implementations
- Assessing Android app exported activities, services, receivers, and content providers
- Testing for intent injection and unauthorized component invocation

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- Frida, ADB, Apktool, And Network Activity, And Sending Broadcasts, Android Studio Profiler, Burp Suite, Frida Trace

## Sources
- exploiting-deeplink-vulnerabilities
- performing-dynamic-analysis-of-android-app
- testing-android-intents-for-vulnerabilities
