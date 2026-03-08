<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050806]">
    <!-- Spiral/Concentric Group 1 (Top Right) -->
    <div class="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] opacity-30 animate-[spin_120s_linear_infinite]">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="10" fill="none" stroke="#2d4635" stroke-width="0.4" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#2d4635" stroke-width="0.4" stroke-dasharray="1 2" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#2d4635" stroke-width="0.4" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#a9ff00" stroke-width="0.3" stroke-dasharray="4 4" filter="url(#glow)" />
        <circle cx="50" cy="50" r="50" fill="none" stroke="#2d4635" stroke-width="0.4" />
      </svg>
    </div>

    <!-- Spiral/Concentric Group 2 (Bottom Left) -->
    <div class="absolute -bottom-[30%] -left-[20%] w-[100vw] h-[100vw] opacity-30 animate-[spin_180s_linear_infinite_reverse]">
      <svg viewBox="0 0 100 100" class="w-full h-full">
        <circle cx="50" cy="50" r="15" fill="none" stroke="#2d4635" stroke-width="0.3" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#2d4635" stroke-width="0.4" stroke-dasharray="2 4" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#2d4635" stroke-width="0.3" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#a9ff00" stroke-width="0.3" stroke-dasharray="1 6" filter="url(#glow)" />
        <circle cx="50" cy="50" r="55" fill="none" stroke="#2d4635" stroke-width="0.4" />
      </svg>
    </div>

    <!-- Spiral/Concentric Group 3 (Center, very large and faint) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-20">
      <div class="w-full h-full rounded-full" style="background-image: repeating-radial-gradient(circle at center, transparent 0, transparent 40px, #2d4635 41px, transparent 42px);"></div>
    </div>
    
    <!-- Subtle gradient overlay to fade out edges -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050806_100%)] opacity-70"></div>
  </div>
</template>
