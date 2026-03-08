<template>
  <div class="snap-container">
    <!-- Hero Section -->
    <section class="snap-section p-4 md:p-8">
      <div class="hop-grid h-full">
        <HeroModule />
        <div class="lego-module col-span-12 md:col-span-4 flex items-center justify-center border-dashed">
          <div class="text-center">
            <div class="text-6xl mb-4">🌲</div>
            <div class="text-xs font-mono text-pine">STATION_ID: GAIA_01</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cascade Section -->
    <section class="snap-section p-4 md:p-8">
      <div class="hop-grid h-full">
        <CascadeModule />
        <div class="lego-module col-span-12 md:col-span-6">
          <h3 class="text-neon mb-4 font-mono">STERN MERITS // TECH_STACK</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex justify-between border-b border-pine pb-2">
              <span>SafeFlow-ECS</span>
              <span class="text-pine">REACTIVE_STATE</span>
            </li>
            <li class="flex justify-between border-b border-pine pb-2">
              <span>RGB Cryptography</span>
              <span class="text-pine">PRIVATE_LEGO</span>
            </li>
            <li class="flex justify-between border-b border-pine pb-2">
              <span>BeeBee Agents</span>
              <span class="text-pine">TINY_REASONERS</span>
            </li>
            <li class="flex justify-between border-b border-pine pb-2">
              <span>DML</span>
              <span class="text-pine">P2P_AGGREGATION</span>
            </li>
          </ul>
        </div>
        <VisionModule />
      </div>
    </section>

    <!-- Interaction Section -->
    <section class="snap-section p-4 md:p-8">
      <div class="hop-grid h-full">
        <BeeBeePrompts />
        <div class="lego-module col-span-12 md:col-span-6 flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-4">Join the <br/>Consilience.</h2>
          <p class="text-pine uppercase text-xs tracking-widest">
            Secure your node in the biological navigation system.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Nuxt 3 auto-imports components from the components/ directory
</script>
