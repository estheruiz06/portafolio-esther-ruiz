

<script setup lang="ts">
import profileImage from "@/assets/PHOTO-2026-03-06-00-51-00.jpg";
import { BookOpen, Zap } from 'lucide-vue-next'

const profile = {
  name: 'Esther ', 
  role: 'Diseñadora gráfica', 
  
}

import { onUnmounted, ref } from 'vue'
import fotoEstudios from '@/assets/FOTO 3.jpg' 
import fotoEstudiosDetalle from '@/assets/upv-UPV-detalle.webp' 

const imagenVisible = ref<string | null>(null)
const indiceCarrusel = ref(0)
const imagenesEstudios = [fotoEstudios, fotoEstudiosDetalle]
let carruselTimer: ReturnType<typeof setInterval> | null = null

const limpiarCarrusel = () => {
  if (carruselTimer) {
    clearInterval(carruselTimer)
    carruselTimer = null
  }
}

const toggleCarruselEstudios = () => {
  if (imagenVisible.value) {
    imagenVisible.value = null
    limpiarCarrusel()
    return
  }

  indiceCarrusel.value = 0
  imagenVisible.value = imagenesEstudios[indiceCarrusel.value] ?? null
  limpiarCarrusel()
  carruselTimer = setInterval(() => {
    indiceCarrusel.value = (indiceCarrusel.value + 1) % imagenesEstudios.length
    imagenVisible.value = imagenesEstudios[indiceCarrusel.value] ?? null
  }, 2300)
}

onUnmounted(() => {
  limpiarCarrusel()
})


</script>

<template>

<section class="relative h-screen w-full bg-pink-300 text-black font-sans flex flex-col justify-start px-6 md:px-16 pt-3 md:pt-6 pb-6 md:pb-10 overflow-hidden">
    <header class="w-full flex justify-between items-center z-50 bg-amber-50/90 text-black rounded-md px-8 md:px-10 py-3">
      <div class="uppercase tracking-widest text-xs md:text-sm font-bold">
        <span class="text-sm md:text-xl leading-none font-black">{{ profile.name }}</span>
      </div>

      <nav class="flex gap-3 md:gap-4">
        <router-link to="/" class="nav-box">Inicio</router-link>
        <router-link to="/trabajos" class="nav-box">Trabajos</router-link>
        <span class="nav-box nav-box-active">Sobre mi</span>
        <router-link to="/contacto" class="nav-box">Contacto</router-link>
      </nav>
    </header>
    
    <div class="grid grid-cols-1 gap-10 items-start z-10 mt-12 md:mt-20">
      
      <div class="flex flex-col gap-6">
        <h1 class="about-title text-[12vw] font-black leading-none tracking-tighter flex flex-col items-start">
          <span>Hola, soy
          </span>
          <span class="-mt-6">Esther!</span>
        </h1>

        <p class="text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
          Soy <span class="font-black text-black">{{ profile.name }}</span>, una <span class="font-black text-black">{{ profile.role }}</span> malagueña, formada en la Universidad Politécnica de Valencia. Soy una apasionada por crear contenido artistico y gráfico para todos los públicos. Desde camapañas llamativas hasta pequeñas obras de arte a mano. Llevo las marcas a la vida con historias reales que inspiran e involucran. ¡Creemos algo inolvidable juntos!
        </p>
      </div>

    </div>

    <img
      :src="profileImage"
      alt="Foto de Esther Ruiz"
      class="absolute -bottom-5 md:-bottom-8 right-4 md:right-[6.25rem] w-[38vw] md:w-[35vw] max-h-[85vh] h-auto object-contain z-0 pointer-events-none mix-blend-multiply grayscale contrast-105"
      decoding="sync"
      loading="eager"
    >

  </section>

<section class="min-h-screen w-full bg-black text-white font-sans px-6 md:px-20 pt-6 md:pt-20 pb-0 flex flex-col">
  <div class="max-w-[92rem] mx-auto w-full flex flex-col gap-6 flex-1 justify-center">
    
    <div @click="toggleCarruselEstudios" class="group border border-neutral-800 rounded-3xl p-5 md:px-10 md:py-7 hover:bg-neutral-900 transition-all duration-500 cursor-pointer flex flex-col md:flex-row justify-between items-start gap-4">
      <div class="flex flex-col gap-4 w-full">
        <div>
          <span class="text-pink-300 font-mono text-xs uppercase tracking-[0.3em]">Formación</span>
          <h2 class="section-title text-3xl md:text-5xl font-black uppercase tracking-[0.10em]">Estudios</h2>
        </div>
        
        <p class="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
         Mi formación consta del bachillerato artístico en la <span class="font-black text-white">Escuela Superior de Arte San Telmo</span> en Málaga y actualmente estoy cursando Diseño y Tecnologías Creativas en la <span class="font-black text-white">Universidad Politecnica de Valencia</span>. También he realizado cursos de ilustración. 
        </p>
      </div>
      
      <div class="text-right opacity-40 group-hover:opacity-100 transition-opacity self-center">
        <BookOpen :size="50" stroke-width="1" />
      </div>
    </div>

    <div class="group border border-neutral-800 rounded-3xl p-5 md:px-10 md:py-7 hover:bg-neutral-900 transition-all duration-500 cursor-pointer flex flex-col md:flex-row justify-between items-start gap-4">
      <div class="flex flex-col gap-4 w-full">
        <div>
          <span class="text-pink-300 font-mono text-xs uppercase tracking-[0.3em]">Skills</span>
          <h2 class="section-title text-3xl md:text-5xl font-black uppercase tracking-[0.10em]">Habilidades</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-6 md:gap-12 items-start w-full">
          <p class="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
            Dominio avanzado de la suite de Adobe (Ps, Ai, Pr) ademas de programas como Processing, Procreate, o Blender. Especializada en la creación de <span class="font-black text-white">campañas publicitarias</span>, edición de vídeo de alto impacto para redes sociales y dirección de arte con un enfoque estético moderno y disruptivo.
          </p>
          <div class="text-neutral-300 text-lg md:text-xl font-light leading-relaxed opacity-90 md:justify-self-end md:text-right md:pr-8">
            <p class="font-black text-white uppercase tracking-widest text-sm mb-2">Idiomas</p>
            <p>Inglés: <span class="font-black text-white">C1</span></p>
            <p>Francés: <span class="font-black text-white">B1</span></p>
            <p>Italiano: <span class="font-black text-white">principiante</span></p>
            <p>Castellano: <span class="font-black text-white">lengua nativa</span></p>
          </div>
        </div>
      </div>

      <div class="text-right opacity-40 group-hover:opacity-100 transition-opacity self-center">
        <Zap :size="50" stroke-width="1" />
      </div>
    </div>

  </div>


<div v-if="imagenVisible" 
       class="fixed top-1/2 right-[10%] -translate-y-1/2 z-50 pointer-events-none hidden md:block">
    <img :src="imagenVisible" 
         class="w-[28rem] h-auto rounded-2xl border-2 border-pink-300 shadow-2xl animate-in fade-in zoom-in duration-300" />
  </div>

<div class="w-[calc(100%+3rem)] md:w-[calc(100%+8rem)] -mx-6 md:-mx-16 mt-auto bg-pink-300 py-4 overflow-hidden whitespace-nowrap border-t border-white/20">
  <div class="flex animate-marquee">
    <span v-for="i in 20" :key="i" class="text-black font-black uppercase text-2xl mx-10 tracking-widest">
      Bienvenidx —
    </span>
    <span v-for="i in 20" :key="'dup-'+i" class="text-black font-black uppercase text-2xl mx-10 tracking-widest">
      Bienvenidx —
    </span>
  </div>
</div>


</section>



</template>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.about-title {
  font-family: 'Inter', sans-serif;
}

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

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 28s linear infinite;
  will-change: transform;
}




</style>
