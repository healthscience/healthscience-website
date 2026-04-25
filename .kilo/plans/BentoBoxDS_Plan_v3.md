# Implementation Plan: BentoBoxDS - The Vessel of Sovereign Intelligence (v3 - Quadrant Grid Focus)

## Project Overview
Implement the BentoBoxDS section in `app.vue` (at line 139) as a high-density, interactive quadrant grid. This version removes the Orrery background and standalone LegoBrick components, focusing on the 4-cell "Nutrient" container architecture and narrative content.

## 1. Section Architecture: The Quadrant Grid
Replace the placeholder section in `app.vue` with a 2x2 grid using `lego-module` / `bento-node` styling.

### Nutrient Compartments (The 4 Cells)
| Cell ID | Title | Nutrient Type | Meta Description |
|---|---|---|---|
| `now-me` | Now Me | Primary Energy | Real-time metabolic pulse / Vagus tone. |
| `future-me` | Future Me | Growth Enzyme | cueCube emulations and search paths. |
| `now-us` | Now Us | Social Fiber | P2P Swimming Club synchronization. |
| `future-us` | Future Us | Legacy Mineral | Bioregional Weave / Shared wisdom. |

## 2. Narrative Content & Typography
Strict adherence to the "Word as Medicine" specification:
*   **Technical Terms**: `font-mono` (e.g., "Health Oracle Protocol", "Baseline of Zero", "cueCube").
*   **Narrative Copy**: High-readability Serif (e.g., "The Network is Initializing...", "Your Bento is a sovereign boundary.").

### Content Sections to Include:
1.  **Intro**: "The Network is Initializing. The Health Oracle Protocol is currently a silent Orrery..."
2.  **The Nutrient Compartments**: Description of the four essential scales.
3.  **Adopting the Bricks**: Narrative on cueCube and Library commons.
4.  **The Witness of the Key**: Sovereignty and Cryptography narrative.

## 3. The "Call to Participation" (Demo Cards)
Two distinct action paths at the bottom of the section:
*   **v1 (The Urban Mine)**: Local PeerStack binary download (Deep Tech aesthetic).
*   **v2 (The Living Browser)**: WASM-based browser resonance (Light/Pulse aesthetic).

## 4. Visual Elements
*   **Daisyworld Nodes**: Integrated into the corners of the quadrant grid cells.
*   **Calibration Glow**: Hover effects on grid cells to signal interactivity.
*   **Borders**: Sharp geometric lines consistent with the "Fabric" aesthetic.

## 5. Execution Steps
1.  **Draft Section Structure**: Create the 2x2 CSS grid in `app.vue`.
2.  **Implement Content Blocks**: Populate the grid and surrounding narrative with the specified copy.
3.  **Apply Typography**: Ensure correct font families for "Word as Medicine" styling.
4.  **Build Demo Cards**: Implement the v1/v2 action paths with their respective visuals.
5.  **Remove Placeholder**: Delete the "Coming Soon" watermark section.

## 6. Review Notes
*   **Simplified Logic**: Removed standalone components and complex background animations for maximum clarity and performance.
*   **Layout**: Grid will be responsive, stacking on mobile and forming the 2x2 quadrant on desktop.
