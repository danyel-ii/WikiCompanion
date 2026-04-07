# Jadx

## Overview
Jadx is a static analysis tool that appears across malware analysis workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Jadx is best understood as a malware-analysis tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Jadx works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- mobile pentest
- OWASP MASTG
- Android security
- iOS security
- mobile application security
- penetration testing
- mobile security
- android
- mobsf
- static analysis
- owasp mobile
- malware

## Typical Workflow
- **Android Static Analysis:**
- Decompile the APK: `jadx -d output/ target.apk` to obtain Java/Kotlin source code
- Review `AndroidManifest.xml` for exported components (activities, services, receivers, content providers), permissions, and debuggable flag
- Check for WebView vulnerabilities: `setJavaScriptEnabled(true)`, `addJavascriptInterface()`, and loading untrusted content
- Run MobSF automated scan: `python manage.py runserver` and upload the APK for automated static analysis
- **iOS Static Analysis:**
- Extract the IPA and locate the Mach-O binary
- Use `otool -L <binary>` to list linked frameworks and identify third-party libraries
- Analyze with Ghidra or Hopper for hardcoded URLs, API endpoints, and embedded credentials
- docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest

## Use Cases
- Testing mobile applications before release to identify security vulnerabilities and data protection issues
- Conducting compliance assessments against OWASP MASVS (Mobile Application Security Verification Standard) levels L1 and L2
- Evaluating the security of mobile banking, healthcare, or government applications handling sensitive data
- Testing mobile apps that interact with backend APIs to assess the end-to-end security of the mobile ecosystem
- Assessing mobile application resistance to reverse engineering, tampering, and runtime manipulation
- Testing only on an emulator and missing hardware-specific security features (Android Keystore hardware backing, iOS Secure Enclave)
- Ignoring the backend API security because it was "tested separately" when the mobile app may call API endpoints differently than the web app
- Conducting security assessment of Android APK or AAB files before production release
- Integrating automated mobile security scanning into CI/CD pipelines
- Performing initial triage of Android applications during penetration testing engagements

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- MobSF, Apktool, Frida, And Code Analysis, And Manipulating Application Behavior At Runtime, Androguard, Android Lint, Burp Suite Professional

## Sources
- conducting-mobile-app-penetration-test
- performing-android-app-static-analysis-with-mobsf
- reverse-engineering-android-malware-with-jadx
