# Ory Hydra

> Ory Hydra is an open-source, OpenID Certified OAuth 2.0 and OpenID Connect (OIDC) authorization server that exposes headless APIs for issuing and managing tokens used to protect APIs and applications.

## Overview
In API security discourse, “Hydra” typically denotes Ory Hydra, not the unrelated THC Hydra password brute‑forcer. Ory Hydra implements the authorization server role for OAuth 2.0 and the OpenID Provider (OP) role for OIDC. It emphasizes standards conformance, scalability, and API‑first operation, delegating end‑user interactions to external systems. Rather than providing identity management or UI, Hydra integrates with an external identity provider or a custom login/consent application to perform authentication and consent, while it focuses on token issuance, discovery, and key management required to secure APIs and applications.

## What It Is
- A standards‑compliant OAuth 2.0/OIDC authorization server and OpenID Provider that can be self‑hosted or consumed as a managed service.
- An OpenID Foundation Certified implementation used to issue access tokens, refresh tokens, and ID tokens to clients accessing protected resources.
- A component of the Ory ecosystem; it integrates with (but does not require) Ory Kratos for identity and Ory Keto for fine‑grained authorization.

## How It Works
Hydra exposes two distinct API surfaces. The Public API handles authorization, token issuance, discovery, logout, and revocation. The Admin API governs client lifecycle, token introspection, cryptographic key management, and callbacks that accept or deny login/consent challenges. End‑user authentication and consent are externalized: a separate login/consent application authenticates users against an identity store (such as an IdP or Ory Kratos) and then signals Hydra via the Admin API with the subject and approved scopes/claims. Hydra signs tokens and publishes public keys through standard OIDC discovery and JWKS endpoints, enabling resource servers to validate JWTs locally. Depending on deployment choices, resource servers can also query token state via introspection. Hydra supports dynamic client registration, OIDC discovery metadata publication, and JSON Web Key generation and rotation through administrative endpoints.

## Core Concepts
- OAuth 2.0 Authorization Server and OIDC Provider roles
- Login/Consent application (externalizes user auth and consent)
- Public vs. Admin API separation
- Token issuance and validation (JWT/JWKS, discovery, introspection)
- Dynamic client registration and discovery
- Standards compliance and OpenID Certification

## Typical Workflow
- A client initiates an OAuth 2.0/OIDC authorization flow using Hydra’s public endpoints.
- Hydra delegates authentication and consent to an external login/consent application.
- The login/consent application authenticates the user against an IdP and returns accept/deny via Hydra’s admin callbacks with subject and approved scopes/claims.
- Hydra issues tokens at the token endpoint; clients present access tokens to protected APIs.
- Resource servers validate tokens using JWKS for JWTs or via token introspection depending on deployment mode.
- Administrators manage clients, keys, and related policies through the Admin API or CLI.

## Use Cases
- Provide a standards‑compliant authorization server for protecting REST/GraphQL APIs and microservices.
- Model and test OAuth 2.0/OIDC flows during API security design reviews and threat modeling.
- Validate token handling in downstream services (e.g., ID token claims, audience/scope enforcement).
- Integrate with existing identity stores by delegating authentication to a custom login/consent app or IdP.
- Support conformance‑oriented deployments that require discovery, JWKS, introspection, and revocation.

## Limitations
- Not an identity provider or user management system; registration, password resets, and MFA are handled by the external login/consent app or IdP.
- Requires strict segregation of Public and Admin APIs; exposing admin endpoints publicly is unsafe.
- Capabilities vary by configuration: in stateless JWT modes, operations such as introspection, revocation, or userinfo may not be available.
- Security depends on correct client metadata, redirect URIs, scopes, and key rotation; misconfiguration can undermine a compliant deployment.
- Focuses on the authorization server role; fine‑grained authorization (ABAC/RBAC/relationships) is typically enforced by resource servers or separate systems (e.g., Ory Keto).

## Related Tools
- Ory Kratos: Complementary identity provider/user management used as the login/consent backend.
- Ory Keto: Complementary authorization service for fine‑grained permissions beyond token issuance.
- Keycloak: Alternative self‑hosted IdP/OP that combines identity management and OIDC/OAuth2 server features.
- Auth0 / Okta: Commercial IdP/OP platforms that provide OAuth2/OIDC and user management.
- OpenID Conformance Suite: Certification and testing harness used to validate OIDC/OAuth server behavior.
- jwt_tool, Burp Suite JWT Editor: Security analysis tools for inspecting and validating JWT behavior issued by an authorization server.

## Evidence Gaps
- The term “Hydra” is ambiguous in security contexts; sources must distinguish Ory Hydra (authorization server) from THC Hydra (password brute‑forcer).
- Exact current release version may change frequently; verify version and change notes for time‑sensitive claims in a given deployment.

## Sources
- [Ory Hydra – product/overview page](https://www.ory.com/hydra) (Ory)
- [Ory Hydra – GitHub repository (official)](https://github.com/ory/hydra) (GitHub)
- [OpenID Foundation – Certified OpenID Connect Implementations (includes Ory Hydra)](https://openid.net/developers/certified-openid-connect-implementations/) (OpenID Foundation)
- [Hydra official guide (archived) – Ory Hydra does not include user authentication; uses login/consent app](https://ory.gitbooks.io/hydra/content/2-overview/1-oauth2.html) (Ory)
- [DeepWiki mirror of Ory docs – Public/Admin APIs and JWKS endpoints](https://deepwiki.com/ory/hydra/7.1-admin-api) (DeepWiki)
- [DeepWiki mirror of Ory docs – JSON Web Key Management and JWKS](https://deepwiki.com/ory/hydra/3.4-json-web-key-management) (DeepWiki)
- [Ory Changelog – Advisory and changes affecting Hydra behavior](https://changelog.ory.com/announcements/ory-hydra-ory-keto-ory-network-v25-4-3-released) (Ory Changelog)
- [Ory blog – When to use OAuth2 (Hydra issues access/refresh/ID tokens; identity via Kratos)](https://www.ory.com/blog/when-to-use-oauth2-scaling-enterprise-authentication-and-authorization) (Ory)
- [Ory community discussion – token validation and JWKS vs introspection](https://community.ory.sh/t/how-to-validate-a-token-when-api-server-is-outside-of-internal-subnet/1236) (Ory Community)
- [Ory blog – Hydra v1 stable and certification announcement](https://www.ory.sh/blog/hydra-v1-stable-release) (Ory)
- [https://www.ory.com/hydra/](https://www.ory.com/hydra/) (ory.com)
- [https://github.com/ory/hydra/releases](https://github.com/ory/hydra/releases) (github.com)

## Confidence
high
