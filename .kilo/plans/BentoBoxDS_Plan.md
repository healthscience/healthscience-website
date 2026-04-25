# Implementation Plan: BentoBoxDS - The Vessel of Sovereign Intelligence

## Project Overview
Implement a high-density, interactive grid section in `app.vue` for the BentoBoxDS. This section follows the "Fabric" aesthetic of healthscience.network, emphasizing local-first sovereignty and biological navigation.

## 1. New Components to Create

### `components/BentoBoxDS.vue`
*   **Purpose**: Main section container managing the 4-cell grid and Narrative content.
*   **Grid IDs**: `now-me`, `future-me`, `now-us`, `future-us`.
*   **Typography**: Mix of `font-mono` for technical terms and high-readability serif for narrative text ("Word as Medicine").

## 2. Technical Implementation Detail

### Quadrant Grid (The Nutrients)
| ID | Title | Nutrient Type | Meta Description |
|---|---|---|---|
| `now-me` | Now Me | Primary Energy | Real-time metabolic pulse / Vagus tone. |
| `future-me` | Future Me | Growth Enzyme | cueCube emulations and search paths. |
| `now-us` | Now Us | Social Fiber | P2P Swimming Club synchronization. |
| `future-us` | Future Us | Legacy Mineral | Bioregional Weave / Shared wisdom. |

### Call to Participation (Demo Cards)
*   **v1 (The Urban Mine)**: Deep tech aesthetic, download icon, direct binary link.
*   **v2 (The Living Browser)**: Pulse aesthetic, WASM-based local-first routing.

## 3. Style Integration
*   Utilize existing CSS variables from `main.css` (`--neon-pulse`, `--tactical-pine`).
*   Incorporate `daisy-node` and `leaf-pair` classes from `nature.css` for organic/tech hybrid feel.

## 4. Execution Steps
2.  Build `BentoBoxDS.vue` with the 4-cell layout and Demo cards.
3.  Inject `BentoBoxDS.vue` into `app.vue` at line 139.
5.  Verify responsive layout and hover/active animations.

## Questions for Review
1.  Should the "Active" state of Lego Bricks persist in LocalStorage?  No saving. Just a plain website.
2.  Do you have specific SVG icons for the `cueCube` and `Library` bricks, or should I use placeholders consistent with the current UI?  No, keep it simple.
