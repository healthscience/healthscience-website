<template>
  <div class="snap-container relative bg-transparent">
    <SpiralBackground />

    <!-- Hero Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <HeroModule />
        <div class="lego-module col-span-12 md:col-span-4 flex flex-col items-start justify-center border-l-2 border-l-neon bg-gradient-to-br from-pine/10 to-transparent">
          <div class="text-xs font-mono text-neon mb-2 tracking-widest uppercase">Network Status</div>
          <div class="text-3xl font-light mb-1 text-white">GAIA_01</div>
          <div class="text-sm text-gray-400">Primary Node Active</div>
        </div>
      </div>
    </section>

    <!-- Call to Participate & Demos Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center bg-black/40 border-y border-pine/20">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <CallToParticipate />
        <div class="lego-module col-span-12 md:col-span-4 flex flex-col items-start justify-center bg-transparent border border-pine/30">
          <div class="text-xs font-mono text-gray-500 mb-2 tracking-widest uppercase">Orrery Status</div>
          <div class="text-2xl font-light text-gray-300 flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-gray-500 animate-pulse"></span>
            WAITING
          </div>
        </div>
        <CascadeModule />
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <div class="lego-module col-span-12 md:col-span-8 bg-gradient-to-b from-pine/5 to-transparent">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-px flex-1 bg-pine/30"></div>
            <h3 class="text-neon font-mono text-sm tracking-widest uppercase">How It Works // BENTO_BOX_DS</h3>
            <div class="h-px flex-1 bg-pine/30"></div>
          </div>
          
          <p class="text-gray-300 leading-relaxed mb-10 text-lg font-light">
            BentoBoxDS is a modular architecture for life. Using 'Data Legos' anchored by RGB contracts, we enable peers to build their own health emulations on the fly. Guided by BeeBee, you move from raw natural language to sophisticated scientific models, contributing to a global Consilience Weave that is built on mathematics, not middlemen.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 border border-pine/20 rounded-lg hover:border-neon/50 hover:bg-pine/10 transition-all cursor-pointer group">
              <div class="text-xs font-mono text-pine group-hover:text-neon mb-2">REACTIVE_STATE</div>
              <div class="text-lg text-white font-medium">SafeFlow-ECS</div>
            </div>
            <div class="p-5 border border-pine/20 rounded-lg hover:border-neon/50 hover:bg-pine/10 transition-all cursor-pointer group">
              <div class="text-xs font-mono text-pine group-hover:text-neon mb-2">PRIVATE_LEGO</div>
              <div class="text-lg text-white font-medium">RGB Cryptography</div>
            </div>
            <div class="p-5 border border-pine/20 rounded-lg hover:border-neon/50 hover:bg-pine/10 transition-all cursor-pointer group">
              <div class="text-xs font-mono text-pine group-hover:text-neon mb-2">TINY_REASONERS</div>
              <div class="text-lg text-white font-medium">BeeBee Agents</div>
            </div>
            <div class="p-5 border border-pine/20 rounded-lg hover:border-neon/50 hover:bg-pine/10 transition-all cursor-pointer group">
              <div class="text-xs font-mono text-pine group-hover:text-neon mb-2">P2P_AGGREGATION</div>
              <div class="text-lg text-white font-medium">DML</div>
            </div>
          </div>
        </div>
        <VisionModule />
      </div>
    </section>

    <!-- Interaction Section -->
    <section class="snap-section p-4 md:p-12 relative z-10 flex items-center bg-black/40 border-t border-pine/20">
      <div class="hop-grid w-full max-w-7xl mx-auto">
        <BeeBeePrompts />
        <div class="lego-module col-span-12 md:col-span-6 flex flex-col justify-center items-start bg-gradient-to-r from-pine/10 to-transparent border-none shadow-none">
          <h2 class="text-4xl md:text-5xl font-light mb-6 text-white tracking-tight">Join the <br/><span class="font-bold">Consilience.</span></h2>
          <p class="text-gray-400 text-lg mb-8 max-w-md">
            Secure your node in the biological navigation system and begin resonating value.
          </p>
          <button class="lego-button">
            Initialize Node
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Nuxt 3 auto-imports components from the components/ directory
</script>
