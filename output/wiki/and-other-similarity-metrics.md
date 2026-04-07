# And Other Similarity Metrics

## Overview
And Other Similarity Metrics is a supply chain security tool that appears across supply chain security workflows in this knowledge base. It is referenced as part of higher-level security analysis, investigation, monitoring, or validation activity rather than as an end in itself.

## What It Is
And Other Similarity Metrics is best understood as a supply-chain-security tool in this knowledge base. Its role is conceptual and system-facing rather than procedural: it gives analysts or defenders a structured way to examine evidence, model system behavior, or reason about security state.

## How It Works
And Other Similarity Metrics works by turning technical inputs into more interpretable outputs at the system level. Across the source skills, it appears as part of larger analysis, investigation, monitoring, or validation loops rather than as a standalone end state.

## Core Concepts
- typosquatting
- npm
- pypi
- supply chain
- package security
- Levenshtein
- dependency confusion
- malicious packages
- supply chain security

## Typical Workflow
- **Extract project dependencies**: Parse `requirements.txt`, `Pipfile.lock`, `package.json`, or `package-lock.json` to extract all direct and transitive dependency names
- **Include popular packages**: Supplement with high-value targets from the top 1000 PyPI downloads (available from `https://hugovk.github.io/top-pypi-packages/`) or top npm packages by download count
- **Add organization packages**: Include any packages published by your organization that attackers might target with typosquats to intercept internal installations
- **Normalize names**: PyPI treats hyphens, underscores, and periods as equivalent (PEP 503 normalization: `re.sub(r"[-_.]+", "-", name).lower()`). npm package names are case-sensitive but scoped packages use `@scope/name` format. Normalize before comparison.
- **Character omission**: Remove each character one at a time (`requests` -> `rquests`, `requets`, `reqests`)
- **Character transposition**: Swap adjacent characters (`requests` -> `erquests`, `rqeuests`, `reques ts`)
- **Character substitution**: Replace characters with keyboard-adjacent keys using a QWERTY distance map (`requests` -> `rrquests`, `requesta`)
- **Character insertion**: Insert common characters at each position (`requests` -> `rrequests`, `reqquests`)
- **Common prefix/suffix attacks**: Prepend or append common strings (`python-requests`, `requests-python`, `requests2`, `requests-lib`)

## Use Cases
- Auditing project dependencies to identify packages whose names are suspiciously similar to popular libraries
- Proactively scanning package registries for newly published packages that may be typosquats of your organization's packages
- Investigating a suspected supply chain compromise where a developer installed a misspelled package name
- Building automated monitoring that alerts when new packages appear with names close to critical dependencies
- Assessing the risk profile of unfamiliar packages before adding them to a project's dependency tree
- Setting the Levenshtein distance threshold too low (only 1) and missing typosquats at distance 2 that use double substitutions
- Relying solely on name similarity without checking metadata signals, leading to high false positive rates on legitimately similar package names

## Limitations
- Output still depends on context, data quality, and surrounding analysis.
- The tool should be interpreted as part of a broader workflow, not as a complete answer by itself.
- Capabilities and visibility vary depending on environment, integrations, and available inputs.

## Related Tools
- And Distribution Info, And Project URLs, Author, Creation Timestamps, Damerau Levenshtein, Enabling Download Count Comparison Between Suspected Typosquats And Their Targets, Jaro Winkler, Npm Download Counts API

## Sources
- detecting-typosquatting-packages-in-npm-pypi
