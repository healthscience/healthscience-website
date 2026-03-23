# Plan: Aggregate Bento Details for 'View all'

The goal is to modify `app.vue` so that when the "View all" bento item (tagged 'PROTOCOL') is selected, it displays the details of all other bento items instead of just its own description.

## Proposed Changes

### 1. Script Section (`app.vue`)
- Import `computed` from `vue`.
- Define a computed property `allBentoDetails` that filters out the 'PROTOCOL' item and joins the `details` of all other items into a single string (or an array for better formatting).

```javascript
const allBentoDetails = computed(() => {
  return bentoItems
    .filter(item => item.tag !== 'PROTOCOL')
    .map(item => ({ title: item.title, details: item.details }))
})
```

### 2. Template Section (`app.vue`)
- Modify the "Bento Detail Reveal" section (around line 181).
- If the selected item has the tag 'PROTOCOL', iterate through `allBentoDetails` to show all descriptions.
- Otherwise, show the single item's details as before.

```html
<div v-if="selectedBentoIndex !== null" :key="selectedBentoIndex" class="mt-8 p-6 border border-neon/30 rounded-xl bg-pine/5 backdrop-blur-sm">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-1 h-6 bg-neon"></div>
    <h4 class="text-xl text-primary font-medium">{{ bentoItems[selectedBentoIndex].title }}</h4>
  </div>
  
  <!-- Conditional Rendering for 'PROTOCOL' / 'View all' -->
  <div v-if="bentoItems[selectedBentoIndex].tag === 'PROTOCOL'" class="space-y-4">
    <div v-for="(item, idx) in allBentoDetails" :key="idx" class="border-l border-neon/20 pl-4">
      <div class="text-sm font-bold text-primary/80 mb-1">{{ item.title }}</div>
      <p class="text-secondary leading-relaxed text-sm">
        {{ item.details }}
      </p>
    </div>
    <div class="mt-6 pt-4 border-t border-neon/10">
       <p class="text-secondary leading-relaxed italic mb-4">
        {{ bentoItems[selectedBentoIndex].details }}
      </p>
      <button @click="window.open('https://beebeehop.any.org/a-tiny-hop-to-gaia-intelligence', '_blank')" class="px-4 py-2 border border-neon/30 text-neon text-[10px] font-mono uppercase tracking-widest hover:bg-neon/10 transition-all rounded">
        Open Documentation
      </button>
    </div>
  </div>
  
  <!-- Standard Rendering -->
  <p v-else class="text-secondary leading-relaxed">
    {{ bentoItems[selectedBentoIndex].details }}
  </p>
</div>
```

## Verification Plan
1. Click on individual bento items (e.g., "BentoBoxDS & BeeBee") and ensure they still show only their specific details.
2. Click on "View all" and verify that it displays a list of all other items' titles and details, followed by the documentation button.
