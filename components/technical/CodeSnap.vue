<template>
  <div class="code-snap bg-forest/90 border border-pine/40 rounded-lg overflow-hidden shadow-lg">
    <div class="flex items-center justify-between px-4 py-2 bg-pine/20 border-b border-pine/30">
      <div class="flex gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
        <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <span class="text-neon text-[10px] font-mono uppercase tracking-widest">{{ language }}</span>
    </div>
    <div class="p-4 overflow-x-auto">
      <pre class="text-sm font-mono text-secondary/90 leading-relaxed"><code v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'javascript'
  }
});

// Simple regex-based syntax highlighting for JS
const highlightedCode = computed(() => {
  let html = props.code
    .replace(/</g, '<')
    .replace(/>/g, '>');

  // Keywords
  html = html.replace(/\b(const|let|var|function|return|if|else|for|while|await|async|import|export|from)\b/g, '<span class="text-purple-400">$1</span>');
  
  // Strings
  html = html.replace(/(['"`].*?['"`])/g, '<span class="text-green-400">$1</span>');
  
  // Comments
  html = html.replace(/(\/\/.*)/g, '<span class="text-pine/60 italic">$1</span>');
  
  // Numbers
  html = html.replace(/\b(\d+)\b/g, '<span class="text-amber-400">$1</span>');
  
  // Functions
  html = html.replace(/(\w+)(?=\()/g, '<span class="text-blue-400">$1</span>');

  return html;
});
</script>
