# App Guidelines

This file defines the default implementation rules for work inside `fit-life-app/app` and related frontend slices.

## Core Rules

- Use only necessary React Native components. Prefer the simplest component that solves the task.
- Use `FlatList` or other virtualized list components for render-heavy lists. Do not map large arrays directly inside `ScrollView`.
- Do not build oversized screen components. Split UI into smaller, focused pieces when a file starts handling too many responsibilities.
- Keep components readable and single-purpose. If logic, layout, and data handling are all growing together, extract the right part into a separate slice or component.
- Avoid excessive `useEffect` usage. Prefer derived state, direct props, memoized selectors, and event-driven updates before introducing effects.
- Do not use `useEffect` for logic that can run during render, inside handlers, or in dedicated hooks with a clear purpose.

## Architecture

- Follow Feature-Sliced Design.
- Keep the app modular and feature-contained. New code should be organized into isolated feature slices with clear ownership and minimal coupling.
- Organize code by responsibility, not by file type only.
- Use this direction when adding new code:
  - `app` for routing, layouts, and screen entry points.
  - `pages` for full screen composition.
  - `widgets` for larger reusable screen sections.
  - `features` for user actions and business interactions.
  - `entities` for domain models and domain UI.
  - `shared` for reusable UI, utilities, config, and common hooks.
- Keep imports flowing from higher-level layers to lower-level layers. Avoid cross-feature coupling.
- Put business logic close to the owning feature or entity instead of inside route files.

## Components

- Keep route files thin. Screens in `app` should mostly compose pages, widgets, or features.
- Prefer small presentational components with explicit props.
- Extract repeated UI patterns instead of duplicating markup across screens.
- Avoid deeply nested JSX trees when a section can be pulled into a named component.
- Keep list items lightweight because they are rendered many times.

## State And Hooks

- Prefer local state for local UI concerns.
- Lift state only when multiple parts of the same feature actually need shared ownership.
- Use custom hooks when logic is reused or when a component becomes hard to scan.
- Keep hooks predictable and narrowly scoped.
- Avoid chaining multiple effects to drive one flow. Model the flow directly instead.

## Styling

- Use Uniwind for styling.
- Prefer utility-based styling over large inline style objects.
- Keep styling consistent and reusable. Extract shared UI primitives when patterns repeat.
- Avoid hardcoded one-off values when the same spacing, radius, or color appears multiple times.

## Implementation Standard

- Write clear, maintainable code first. Shorter code is not better if it becomes harder to understand.
- Preserve performance on mobile devices. Be careful with unnecessary rerenders, large lists, and heavy screen components.
- Keep naming explicit. Components, hooks, and folders should describe responsibility clearly.
- When adding a new screen, start from the smallest clean structure that can grow without becoming messy.
