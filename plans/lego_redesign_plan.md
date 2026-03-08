# HealthScience Network - Modular "Lego" Redesign Plan

## Objective
Transform the current "tactical/terminal" design into a highly modular, "Lego brick" aesthetic while preserving the existing color palette (Forest, Neon, Pine, Border).

## Design Metaphor: "Cyber-Lego" / Dark Neo-Brutalism
Lego bricks are characterized by their distinct blocky shapes, interlocking studs, thick plastic walls, and tactile nature. We will translate this into CSS using a dark neo-brutalist approach.

### Key Visual Elements
1. **Chunky Blocks:** Modules will have thick borders (`4px solid`) to represent the thick plastic walls of a brick.
2. **Tactile Depth:** Hard, solid drop shadows (`box-shadow: 8px 8px 0px`) to give the blocks a 3D, physical presence on the page.
3. **The "Studs":** A subtle repeating radial-gradient pattern at the top of modules (or as a decorative element) to mimic the iconic Lego studs.
4. **Distinct Gaps:** The grid will change from a 1px wireframe to having distinct gaps (`gap-6`), allowing each "brick" to stand on its own.
5. **Interactive "Snap":** Buttons and interactive elements will physically depress when clicked (translating down and reducing the shadow), mimicking the snapping of a brick.

## Implementation Steps

### 1. Update Global CSS (`assets/css/main.css`)
*   **`.hop-grid`**: Increase `gap` to `1.5rem` (24px). Remove the 1px background/border wireframe look.
*   **`.lego-module`**: 
    *   Add `border: 4px solid var(--tactical-pine);`
    *   Add `box-shadow: 8px 8px 0px var(--pine-border);`
    *   Add `border-radius: 4px;` (Lego bricks have slightly rounded corners).
    *   Add a pseudo-element `::before` with a `repeating-radial-gradient` to create a row of "studs" along the top inner edge.
*   **`.lego-button`**: Create a new class for buttons with thick borders, neon backgrounds, and an `:active` state that translates the button `8px` down and right, removing the shadow to simulate being pressed into place.

### 2. Update Layout (`app.vue`)
*   Ensure the `.snap-section` containers have enough padding so the new 8px drop shadows on the modules don't get clipped by `overflow: hidden`.
*   Adjust column spans if the larger gaps cause layout wrapping issues.

### 3. Refine Components
*   **`CascadeModule.vue`**: Transform the 4 steps into smaller, individual "bricks" that look like they are stacked horizontally. Give each step its own thick border and smaller hard shadow.
*   **`VisionModule.vue`**: Change the `border-l-4` to a full brick style, perhaps using the `neon` color for the border to make it a "special" brick.
*   **`BeeBeePrompts.vue`**: Apply the new `.lego-button` class to the "Generate Peer-Lego Contract" button. Make the input field look like an inset brick (inner shadow).
*   **`HeroModule.vue`**: Ensure the text and SVG wave sit comfortably inside the new chunky border.

## Color Palette Reminder (Unchanged)
*   `--forest-void`: `#0a0f0d` (Backgrounds)
*   `--neon-pulse`: `#a9ff00` (Accents, Highlights, Special Bricks)
*   `--tactical-pine`: `#2d4635` (Borders, Shadows)
*   `--pine-border`: `#1a241e` (Deep Shadows, Grid Background)
