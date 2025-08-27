---
outline: deep
---

## Table of Contents
1. [General Coding Guidelines](#general-coding-guidelines)
2. [Coding Standards & Tools](#coding-standards-&-tools)
3. [Code Style & Formatting](#code-style-&-formatting)  
4. [Linting](#linting)  
5. [Continuous Integration](#continuous-integration)

## General Coding Guidelines

- Follow clean code principles (small functions, meaningful variable names).

- Document public functions and components with docstrings/JSDoc.

- Avoid duplicating code (DRY) — prefer utility functions.

- Always write/update unit tests for new features or fixes.

## Coding Standards & Tools

To maintain consistency, readability, and quality across the Independa/EverThrive codebase, all contributors must follow the standards below.

## Code Style & Formatting

- All code must be auto-formatted before commit.

- Use the configured formatter for your language/framework:

- JavaScript → Prettier

- CSS/SCSS → Prettier + Stylelint

## Linting

- Linters must pass with no errors before code can be merged.

- Configurations are defined in the repo (.eslintrc.js).

Tools:

- JavaScript: ESLint
 with Airbnb rules

- CSS/SCSS: Stylelint

Run manually:

- npm run lint       # JS/TS/CSS lint check

## Continuous Integration

- CI pipeline will run lint/format checks on all pull requests.

- Pull requests will not be merged if:

- Lint errors exist

- Code is not formatted properly

- Tests fail

<!-- ## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata). -->