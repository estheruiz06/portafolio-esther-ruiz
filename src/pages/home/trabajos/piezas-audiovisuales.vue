<script setup lang="ts">
import { computed, ref } from 'vue'


const profile = {
  name: 'Esther'
}

const piezas = [
  {
    titulo: 'El Alquiler',
    descripcion: 'Este video es un trozo de un cortometraje de 7 minutos llamado El Alquiler. Este cortometraje se hizo para representar algún ODS y nosotros decidimos elegir el derecho a la vivienda y nosotros le quisimos dar un toque metafórico jugando con el suspense. La trama de este corto te basa en una chcica que, al no tener otra opción, tiene que someterse a injusticias y pruebas que le hace pasar la casera para poder seguir teniendo una vivienda digna.',
    portada: new URL('@/assets/Elalquiler.jpg', import.meta.url).href,
    video: new URL('@/assets/video-alquiler.mp4', import.meta.url).href,
  },
  {
    titulo: 'Spot Celebremos',
    descripcion: 'Este es otro trozo de la cmapaña de celebremos que esta en "Diseño Gráfico", es la parte audiovisual. Aqui podemos la celebración de dos cumpleaños que se unen para conectar.',
    portada: new URL('@/assets/celebremosspot.jpg', import.meta.url).href,
    video: new URL('@/assets/celebremos_video.mp4', import.meta.url).href,
  
  },
  {
    titulo: 'Anuncio Perfume',
    descripcion:
      'Este es un proyecto de un anuncio para el perfume de Carolina Herrera en el que se ensalza la figura femenina.',
    portada: new URL('@/assets/spot.jpg', import.meta.url).href,
    video: new URL('@/assets/anuncio-perfume.mp4', import.meta.url).href,

  },
  {
    titulo: 'Fotografía',
    descripcion:
      'Proyecto de fotografía de estudio en el que representamos una estética de los 80. Es una parte de un proyecto más grande sobre el paso del tiempo.',
    portada: new URL('@/assets/estudio2.JPG', import.meta.url).href,
     imagenes: [
      new URL('@/assets/estudio1.jpg', import.meta.url).href,
      new URL('@/assets/estudio2.jpg', import.meta.url).href,
      new URL('@/assets/estudio3.jpg', import.meta.url).href
    ]
    
  }
]

const piezaSeleccionada = ref<number | null>(null)

const seleccionarPieza = (index: number) => {
  piezaSeleccionada.value = index
}

const piezaActual = computed(() => {
  if (piezaSeleccionada.value === null) return null
  return piezas[piezaSeleccionada.value] ?? null
})




</script>

<template>
  <section class="relative min-h-screen w-full bg-black text-white font-sans px-6 md:px-16 pt-3 md:pt-6 pb-6 md:pb-10">
    <header class="w-full flex justify-between items-center z-50 bg-amber-50/90 text-black rounded-md px-8 md:px-10 py-3 mb-16">
      <div class="uppercase tracking-widest text-xs md:text-sm font-bold">
        <span class="text-sm md:text-xl leading-none font-black">{{ profile.name }}</span>
      </div>

      <nav class="flex gap-3 md:gap-4">
        <router-link to="/" class="nav-box">Inicio</router-link>
        <router-link to="/trabajos" class="nav-box nav-box-active">Trabajos</router-link>
        <router-link to="/sobremi" class="nav-box">Sobre mi</router-link>
        <router-link to="/contacto" class="nav-box">Contacto</router-link>
      </nav>
    </header>

    <div class="mb-16">
      <router-link to="/trabajos" class="text-brand-pink font-mono text-xs uppercase tracking-widest hover:underline">
        ← Volver a proyectos
      </router-link>
      <h1 class="section-title text-brand-pink text-7xl mt-4">Piezas audiovisuales</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <article
        v-for="(pieza, index) in piezas"
        :key="`${pieza.titulo}-${index}`"
        class="group cursor-pointer border border-pink-300/70 rounded-2xl overflow-hidden bg-neutral-900/50 hover:border-pink-200 transition-all"
        role="button"
        tabindex="0"
        @click="seleccionarPieza(index)"
        @keydown.enter.prevent="seleccionarPieza(index)"
        @keydown.space.prevent="seleccionarPieza(index)"
      >
        <div class="aspect-video bg-pink-300/60 border-b border-pink-200/70 overflow-hidden">
          <img
            v-if="pieza.portada"
            :src="pieza.portada"
            :alt="`Portada ${pieza.titulo}`"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-5">
          <h3 class="section-title text-4xl uppercase tracking-[0.08em] text-brand-pink">
            {{ pieza.titulo }}
          </h3>
        </div>
      </article>
    </div>
<div
      v-if="piezaActual"
      class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
      @click="piezaSeleccionada = null"
    >
      <div
        class="max-w-3xl w-full bg-neutral-900 p-8 rounded-3xl border border-brand-pink/30"
        @click.stop
      >
        <div class="mb-6">
          <div class="relative rounded-2xl overflow-hidden bg-black flex justify-center shadow-2xl">
            <video 
              v-if="piezaActual.video" 
              :src="piezaActual.video" 
              controls 
              autoplay
              class="w-full h-auto max-h-[500px]"
            >
              Tu navegador no soporta vídeos.
            </video>
            <img
              v-else-if="piezaActual.portada"
              :src="piezaActual.portada"
              :alt="`Portada ${piezaActual.titulo}`"
              class="w-auto h-[420px] md:h-[520px] object-contain"
            />
          </div>
        </div>

        <h2 class="section-title text-5xl font-black text-brand-pink uppercase mb-4">
          {{ piezaActual.titulo }}
        </h2>
       
        <p class="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
          {{ piezaActual.descripcion }}
        </p>

        <button
          @click="piezaSeleccionada = null"
          class="mt-8 text-brand-pink font-bold uppercase text-xs tracking-widest border-b border-brand-pink hover:text-white transition-colors"
        >
          Cerrar detalle
        </button>
      </div>
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
</style>
