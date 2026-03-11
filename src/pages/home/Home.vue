<script lang="ts" setup>
import { Instagram } from "lucide-vue-next";

const profile = {
  name: 'Esther',
  user: '@estheruiiz',
  web: 'www.eruiportafolio.com'
};



</script>

<template>

<section class="relative h-screen w-full bg-black text-amber-50 flex flex-col justify-between px-6 md:px-16 pt-3 md:pt-6 pb-6 md:pb-10 overflow-hidden font-sans">

  <header class="w-full flex justify-between items-center z-50 bg-amber-50/90 text-black rounded-md px-8 md:px-10 py-3">
  <div class="uppercase tracking-widest text-xs md:text-sm font-bold">
    <span class="text-sm md:text-xl leading-none font-black">{{ profile.name }}</span>
  </div>

  <nav class="flex gap-3 md:gap-4">
    <span class="nav-box nav-box-active">Inicio</span>
    <router-link to="/trabajos" class="nav-box">Trabajos</router-link>
    <router-link to="/sobremi" class="nav-box">Sobre mi</router-link>
    <router-link to="/contacto" class="nav-box">Contacto</router-link>
  </nav>
</header>
    
    <div class="flex-grow flex items-center justify-center">

      <div class="relative w-full mx-auto flex justify-center">
        <div class="relative flex flex-col items-center">
          <h1 class="hero-title font-black w-full text-[21vw] md:text-[13.5vw] uppercase leading-[0.75] md:leading-[0.6] tracking-normal flex flex-col md:flex-row items-center justify-center gap-0 md:gap-[0.18em] text-center scale-y-[1.25]">
            <span class="thick-text">PORTAFOLIO</span>
            <span class="thick-text">ARTISTICO</span>
          </h1>
          <p
            class="font-signature absolute top-full left-1/2 -translate-x-1/2 -translate-y-5 sm:-translate-y-8 text-pink-300 text-[clamp(3rem,18vw,6.5rem)] md:text-[8.5rem] leading-none whitespace-normal md:whitespace-nowrap text-center max-w-[92vw] z-30 pointer-events-none"
          >
            Esther Ruiz
          </p>
        </div>

      </div>


    </div>

    <div class="flex justify-between items-end text-xs md:text-sm font-bold lowercase tracking-tight">
      <span class="flex items-center gap-2">
        {{ profile.user }}
        <Instagram :size="16" stroke-width="2" class="text-pink-300" />
      </span>
      <span>{{ profile.web }}</span>
    </div>

  </section>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Monsieur+La+Doulaise&display=swap');

.hero-title {
  font-family: 'Bebas Neue', sans-serif;
}

.asterisk-inline {
  font-size: 0.5em;
  line-height: 1;
  filter: drop-shadow(0 0 15px rgba(251, 207, 232, 0.4));
}

.nav-box {
  border: 1px solid rgba(0, 0, 0, 0.35);
  padding: 6px 12px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.35);
}

.nav-box:hover {
  background-color: black;
  color: #fbcfe8;
  border-color: black;
}

.nav-box-active {
  background-color: black;
  color: #fbcfe8;
  border-color: black;
}

.font-signature {
  font-family: 'Monsieur La Doulaise', cursive;
  text-transform: none; 
}


</style>
