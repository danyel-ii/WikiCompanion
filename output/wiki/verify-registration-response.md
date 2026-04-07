# Verify Registration Response

## Overview
Verify Registration Response is a identity and access management tool that appears across identity and access management workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
Verify Registration Response is best understood as a identity-and-access-management tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
Verify Registration Response works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- FIDO2
- WebAuthn
- hardware security key
- YubiKey
- passkeys
- passwordless authentication
- CTAP2
- identity and access management

## Typical Workflow
- **Define RP identity**: Create a `PublicKeyCredentialRpEntity` with the relying party name (display name shown to users) and RP ID (the effective domain of the application). The RP ID must be a registrable domain suffix of the origin -- for example, `example.com` is valid for `https://auth.example.com` but `other.com` is not.
- `none`: No attestation requested (simplest, recommended for most deployments)
- `indirect`: Attestation may be provided but CA may anonymize it
- `direct`: Full attestation chain from the authenticator's manufacturer
- `enterprise`: Device-identifying attestation for managed environments
- **Session management**: Configure server-side sessions to store WebAuthn state between the begin and complete phases of registration/authentication ceremonies. Use secure, httponly cookies with SameSite=Strict.
- **Credential storage**: Design the database schema to store credential records: `credential_id` (binary), `public_key` (COSE key), `sign_count` (uint32 for clone detection), `user_id`, `created_at`, `last_used`, `display_name`, and `transports` (USB, NFC, BLE, internal).
- **Begin registration**: Call `server.register_begin()` with the user entity (`PublicKeyCredentialUserEntity` containing user ID, username, and display name), the list of existing credentials for the user (to prevent duplicate registration), and options for `user_verification` and `authenticator_attachment`.

## Use Cases
- Deploying phishing-resistant multi-factor authentication (MFA) using FIDO2 hardware security keys for high-value accounts (administrators, developers, privileged users)
- Building a WebAuthn relying party server that supports both roaming authenticators (USB/NFC security keys) and platform authenticators (Windows Hello, Touch ID, Android biometrics)
- Migrating an existing password-based authentication system to support passkeys (discoverable credentials) as a primary or secondary authentication factor
- Enrolling YubiKey devices for an organization's workforce, including PIN setup, credential registration, and backup key provisioning
- Implementing passwordless authentication flows that comply with NIST SP 800-63B AAL3 (authenticator assurance level 3) requirements
- Setting user_verification: discouraged which allows anyone who physically possesses the key to authenticate without a PIN
- Forgetting to validate the sign counter, missing cloned key attacks

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Nano Form Factors, And OTP; Available In USB A, And Verify_authentication_response Functions, And Viewing Registered Accounts, Demo.yubico.com, Generate_authentication_options, NFC, OpenPGP

## Sources
- implementing-hardware-security-key-authentication
