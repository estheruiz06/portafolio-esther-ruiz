<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'

const profile = {
  name: 'Esther'
}
</script>

<template>
  <section class="relative min-h-screen w-full bg-black text-amber-50 flex flex-col justify-between px-6 md:px-16 pt-3 md:pt-6 pb-6 md:pb-10 font-sans">
    <header class="w-full flex justify-between items-center z-50 bg-amber-50/90 text-black rounded-md px-8 md:px-10 py-3">
      <div class="uppercase tracking-widest text-xs md:text-sm font-bold">
        <span class="text-sm md:text-xl leading-none font-black">{{ profile.name }}</span>
      </div>

      <nav class="flex gap-3 md:gap-4">
        <router-link to="/" class="nav-box">Inicio</router-link>
        <span class="nav-box nav-box-active">Trabajos</span>
        <router-link to="/sobremi" class="nav-box">Sobre mi</router-link>
        <router-link to="/contacto" class="nav-box">Contacto</router-link>
      </nav>
    </header>
    <div class="mt-10 md:mt-14 mb-16">
      <h1 class="text-[9vw] md:text-[7vw] font-black leading-[0.82] tracking-tighter contact-title-tight">
        Mis  proyectos
      </h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      <router-link to="/ilustraciones" class="group cursor-pointer block">
        <div class="relative overflow-hidden rounded-3xl aspect-video bg-pink-300 border border-pink-200">
          <h3 class="section-title absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-black uppercase tracking-[0.08em] text-black text-center px-4">Ilustración</h3>
          <ArrowUpRight :size="30" class="absolute top-5 right-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </router-link>

      <router-link to="/diseno-grafico" class="group cursor-pointer block">
        <div class="relative overflow-hidden rounded-3xl aspect-video bg-pink-300 border border-pink-200">
          <h3 class="section-title absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-black uppercase tracking-[0.08em] text-black text-center px-4">Diseño gráfico</h3>
          <ArrowUpRight :size="30" class="absolute top-5 right-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </router-link>

      <router-link to="/diseno-editorial" class="group cursor-pointer block">
        <div class="relative overflow-hidden rounded-3xl aspect-video bg-pink-300 border border-pink-200">
          <h3 class="section-title absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-black uppercase tracking-[0.08em] text-black text-center px-4">Diseño Editorial</h3>
          <ArrowUpRight :size="30" class="absolute top-5 right-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </router-link>

      <router-link to="/piezas-audiovisuales" class="group cursor-pointer block">
        <div class="relative overflow-hidden rounded-3xl aspect-video bg-pink-300 border border-pink-200">
          <h3 class="section-title absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-black uppercase tracking-[0.08em] text-black text-center px-4">Piezas Audiovisuales</h3>
          <ArrowUpRight :size="30" class="absolute top-5 right-5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </router-link>

    </div>

    <div class="mt-20 flex justify-center">
      <p class="border border-brand-pink text-brand-pink px-10 py-4 rounded-full font-bold uppercase tracking-widest text-center text-base md:text-lg leading-snug">
        <span class="text-pink-300 text-3xl md:text-4xl font-black mx-2 align-middle" aria-hidden="true">✦</span>
        Si te ha gustado haz click
        <router-link
          to="/contacto"
          class="underline underline-offset-4 hover:no-underline"
        >
          aquí
        </router-link>
        y ¡trabajemos juntos!
        <span class="text-pink-300 text-3xl md:text-4xl font-black mx-2 align-middle" aria-hidden="true">✦</span>
      </p>
    </div>
  </section>




</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.section-title {
  font-family: 'Bebas Neue', sans-serif;
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

h1,
h2 {
  font-family: 'Inter', sans-serif;
}

.contact-title-tight {
  word-spacing: -0.18em;
}
</style>
