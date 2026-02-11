<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-very-light-orange">
    <div class="absolute top-[10%] left-[-10%] opacity-40 animate-drift">
      <div class="w-64 h-32 bg-pastel-azure blur-[80px] rounded-full"></div>
    </div>

    <div class="absolute top-[40%] right-[-10%] opacity-30 animate-drift [animation-delay:5s]">
      <div class="w-80 h-40 bg-pastel-turqoise blur-[100px] rounded-full"></div>
    </div>

    <div v-for="n in 20" :key="n"
      class="absolute bg-white rounded-full animate-sparkle"
      :style="{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        animationDelay: `${Math.random() * 5}s`,
        boxShadow: '0 0 10px rgba(255,255,255,0.8)'
      }"
    ></div>

    <div class="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
  </div>
</template>