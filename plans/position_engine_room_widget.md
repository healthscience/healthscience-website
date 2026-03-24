# Plan: Position Engine Room Widget to Right of Explorer/Playground

## Problem
The FocusModeHUD (Engine Room Widget) is currently positioned at `fixed bottom-6 right-6`, which places it at the bottom-right of the viewport. This causes overlap issues with three use cases:
1. **BesearchOverlay** - The pulse animation overlay (centered)
2. **DocumentationPanel** - Node details panel (slides from right)
3. **FocusModeHUD** - Engine room controls (bottom-right)

## Solution
Position the FocusModeHUD inside the Explorer/Playground container, to the right of the Vue Flow canvas.

## Implementation Steps

### Step 1: Modify FocusModeHUD.vue
- Add a `position` prop to support different positioning modes (`fixed` or `absolute`)
- Add `containerClass` prop to allow overriding the default fixed positioning
- Default behavior remains backward compatible

### Step 2: Update modularMap.vue
- Position FocusModeHUD to the right of the Vue Flow canvas
- Use absolute positioning within the Explorer container
- Ensure it doesn't overlap with DocumentationPanel when in focus mode:
  - In normal view: position at right edge of container
  - In focus mode (DocumentationPanel open): position between canvas and DocumentationPanel

## Technical Details

### Current Explorer Container Layout (modularMap.vue, line 35):
```
Explorer View (h-[800px] relative)
├── Vue Flow Canvas (width: 100% or 40vw in focus)
├── BesearchOverlay (absolute inset-0)
├── DocumentationPanel (absolute right-0, z-40)
└── FocusModeHUD (fixed bottom-6 right-6) ← NEEDS TO CHANGE
```

### Target Layout:
```
Explorer View (h-[800px] relative)
├── Vue Flow Canvas (width: 100% or 40vw in focus)
├── BesearchOverlay (absolute inset-0)
├── DocumentationPanel (absolute right-0, z-40)
└── FocusModeHUD (absolute bottom-6 right-6) ← NEW POSITION
```

### Positioning Logic:
- **Normal view (no node selected)**: `absolute bottom-6 right-6`
- **Focus mode (DocumentationPanel open, 60vw wide)**: The canvas is 40vw, DocumentationPanel is 60vw - no room. Need to overlay on canvas area or make DocumentationPanel narrower
- **Alternative**: Position FocusModeHUD to the right of Vue Flow but left of DocumentationPanel when in focus mode
