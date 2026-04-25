# Implementation Plan - Anatomy of the HOP Fabric

This plan outlines the steps to implement the `AnatomyDiagram.vue` component and integrate it into `app.vue` to act as a gateway to the "Strategic Plugins" section.

## 1. Create `AnatomyDiagram.vue`
Create a new component in `components/AnatomyDiagram.vue` with the following:
- **SVG Structure:** Implement the three-node horizontal flow (Sensing Skin → Sovereign Heart → Living Mind).
- **Animations:** 
  - `heart-swell` for the central SafeFlow-ECS node.
  - `flow` dash-offset animation for the connecting filaments.
- **Styling:** Boreal-Futurism aesthetic (Dark Green #0a1914, Neon Mint #4ade80).
- **Interactivity:**
  - Emits an `explore` event when the "Explore Interactive Module Examples" button is clicked.
  - Includes the `daisy-world` CSS class for the button icon.

## 2. Update `app.vue`
Modify `app.vue` to hide the `TechnicalModularMap` by default and reveal it via the new diagram:
- **State Management:** Add `showTechnicalMap` ref (default `false`).
- **Layout Change:**
  - Wrap `TechnicalModularMap` in a `v-if="showTechnicalMap"`.
  - Place `AnatomyDiagram` above it.
  - Listen for `@explore="showTechnicalMap = true"` on the diagram.
- **Smooth Transition:** (Optional) Add a transition or scroll-to logic when the section is revealed.

## 3. Style Refinement
- Ensure `.anatomy-container` has the requested `::before`/`::after` leaf clusters to match the project's "Nature Reclaim" theme.
- Verify Tailwind/CSS variables consistency with the existing `forest`, `pine`, and `neon` palette.

## 4. Verification
- Verify SVG rendering on different screen sizes.
- Test the button interaction to ensure the `TechnicalModularMap` appears correctly.
- Ensure all previously existing event listeners on `TechnicalModularMap` still function correctly.
