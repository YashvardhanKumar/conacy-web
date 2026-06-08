# Agent Instructions & Guidelines

This document outlines strict operational rules and conventions that all AI coding assistants (agents) must follow when modifying or extending the Conacy codebase.

---

## 🧪 1. NestJS Testing Rule
* **Mandatory Tests:** Whenever you create a new NestJS file (service, controller, module, guard, middleware, resolver, strategy, etc.), you **MUST write a corresponding unit test file (`*.spec.ts`)** alongside it.
* **Offline Mocking:** All NestJS unit tests must mock database drivers (Neo4j, OGM) and external integrations (Cloudinary, JWT sign/verify, ConfigService) to prevent any real network requests or database connections during test execution. 
* **Execution:** Verify your server-side changes pass the test suite by running:
  ```bash
  cd server && bun run test
  ```

---

## 🎨 2. Client CSS & Styling Constraints
* **No Custom CSS:** In the `client` application, styling must be done **strictly using Tailwind CSS classes**. Do not add any raw/custom CSS declarations in `.css` files.
* **Tailwind Config Only:** Use the styles and utilities provided by the existing `@tailwind.config` configuration only. Do not invent custom inline styles or arbitrary CSS values.
* **DaisyUI Dominance:** All user interface components must be built utilizing classes provided by **DaisyUI** (e.g. `btn`, `card`, `alert`, `modal`, `navbar`, etc.) to maintain theme integrity and user interface consistency.

---

## 📍 3. Absolute Imports Requirement
* **No Relative Imports:** Always use absolute imports everywhere in the repository (both `client` and `server`). Do not use relative path traversal (e.g. `../` or `../../`).
* **Prefix Convention:** Always use the `@<src_subfolder>/` path prefix for absolute imports (e.g. `@components/...` or `@auth/...` or `@custom/...` or `@gql/...`). Do not include the words `client`, `server`, or `src` in the import paths; the `@` prefix maps directly to the folders residing under the respective application's `src/` directory.
