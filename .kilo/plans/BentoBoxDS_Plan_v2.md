# Implementation Plan: BentoBoxDS - The Vessel of Sovereign Intelligence (v2 - Simplified)

## Project Overview
Implement a high-density, interactive grid section in `app.vue` for the BentoBoxDS. This version focuses on the Quadrant Grid and Lego Brick interaction, removing the complex Orrery background in favor of a cleaner, high-contrast "Fabric" layout.

## 1. Components to Create

### `components/LegoBrick.vue`
*   **Purpose**: A modular unit representing "Nutrient Food Groups" or "Knowledge Bricks".
*   **Visuals**: 
    *   Sharp, geometric borders with high-contrast outlines.
    *   `daisy-node` (white/black) absolute-positioned in the top-right corner.
    *   Monospaced labels for technical terms.
*   **State**: 
    *   **Hover**: "Calibration Glow" using `box-shadow: 0 0 20px rgba(74, 222, 128, 0.4)` and border-color transition.
    *   **Active**: Visual "snapped" state when clicked, adding its ID to `activeConfiguration`.

### `components/BentoBoxDS.vue`
*   **Purpose**: Main section container managing the 4-cell grid, narrative content, and demo paths.
*   **Grid Layout**: 2x2 Quadrant Grid using the `bento-node` / `lego-module` styling.
*   **Narrative**: 
    *   Mix of `font-mono` (technical/Word as Medicine) and high-readability serif (narrative).
    *   Implementation of the "Silent Orrery" and "Baseline of Zero" copy.

## 2. Quadrant Grid Architecture (The Nutrients)

| Cell ID | Title | Nutrient Type | Meta Description |
|---|---|---|---|
| `now-me` | Now Me | Primary Energy | Real-time metabolic pulse / Vagus tone. |
| `future-me` | Future Me | Growth Enzyme | cueCube emulations and search paths. |
| `now-us` | Now Us | Social Fiber | P2P Swimming Club synchronization. |
| `future-us` | Future Us | Legacy Mineral | Bioregional Weave / Shared wisdom. |

## 3. The "Call to Participation" (Demo Cards)

Two distinct paths styled with high-contrast "Deep Tech" vs "Fabric Resonance" aesthetics:
1.  **v1 (The Urban Mine)**: Local PeerStack binary download.
2.  **v2 (The Living Browser)**: Local-first WASM web environment routing.

## 4. Execution Steps
1.  **Scaffold `LegoBrick.vue`**: Focus on the snap logic and calibration glow.
2.  **Build `BentoBoxDS.vue`**: 
    *   Implement the 2x2 nutrient grid.
    *   Add the "Adopting Lego Bricks" and "Witness of the Key" narrative sections.
    *   Implement the Demo Cards at the bottom of the section.
3.  **Inject into `app.vue`**: Replace the placeholder at line 139.
4.  **Refine CSS**: Ensure the typography strictly follows the "Word as Medicine" specification (Monospace for tech, Serif for narrative).

## 5. Review Notes
*   **Simplified Background**: Instead of the animated Orrery, we will use a subtle CSS grid or the existing `SpiralBackground` to maintain the "Fabric" depth without high complexity.
*   **State Management**: `activeConfiguration` will be handled via a Nuxt `useState` to track which bricks are "snapped" into the user's personal Bento.
