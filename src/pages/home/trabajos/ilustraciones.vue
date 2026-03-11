<script setup lang="ts">
import { computed, ref } from 'vue'

const profile = {
  name: 'Esther'
}

const obraSeleccionada = ref<number | null>(null)
const ilustraciones = [
  {
    src: new URL('@/assets/fancine.JPG', import.meta.url).href,
    titulo: 'Ilustración fan cine',
    descripcion:
      'Ilustración para el festival de fancine, esta obra la llamé "Sumirse en el ser" y fue ganadora del 3º premio en el festival en 2022.'
  },
  {
    src: new URL('@/assets/retratoacuarela.jpg', import.meta.url).href,
    titulo: 'Retrato acuarela',
    descripcion: 'Retrato de dos bocas a acuarela con tonos frios.'
  },
  {
    src: new URL('@/assets/cuerpo.jpg', import.meta.url).href,
    titulo: 'Cuerpo a guache',
    descripcion: 'Obra a guache de un cuerpo en blanco y negro trabajado en un A5.'
  },
  {
    src: new URL('@/assets/IMG_4981.jpg', import.meta.url).href,
    titulo: 'Apunte a tiza',
    descripcion: 'Apunte rápido a tiza de un mercadillo de la calle.'
  },
  {
    src: new URL('@/assets/IMG_4980.jpg', import.meta.url).href,
    titulo: 'Apunte a acuarela',
    descripcion: 'Apunte rápido a acuarela del centro de Málaga con detalles a boligrafo.'
  },
  {
    src: new URL('@/assets/IMG_4978.jpg', import.meta.url).href,
    titulo: 'Apunte a boligrafo',
    descripcion: 'Apunte rápido a boligrafo azul del centro de Málaga.'
  },
  {
    src: new URL('@/assets/lanadelrey.jpg', import.meta.url).href,
    titulo: 'Guache blanco y negro',
    descripcion: 'Retrato de Lana del Rey realizado en escala de grises.'
  },
  {
    src: new URL('@/assets/bodegón.jpg', import.meta.url).href,
    titulo: 'Bodegon tinta roja',
    descripcion: 'Bodegón realizado unicamente con un lapiz rojo.'
  },
  {
    src: new URL('@/assets/acuarela1.jpg', import.meta.url).href,
    titulo: 'Paisaje acuarela 1',
    descripcion: 'Paisaje realizado con la técnica húmedo sobre húmedo.'
  },
  {
    src: new URL('@/assets/acuarela2.jpg', import.meta.url).href,
    titulo: 'Paisaje acuarela 2',
    descripcion: 'Paisaje de una ciudad realizado con la técnica húmedo sobre húmedo y con tonos cálidos.'
  },
  {
    src: new URL('@/assets/carboncillo1.JPG', import.meta.url).href,
    titulo: 'Obra a carboncillo',
    descripcion: 'Obra a carboncillo del cuerpo de una mujer hecha con un fondo blanco.'
  },
  {
    src: new URL('@/assets/carboncillo2.jpg', import.meta.url).href,
    titulo: 'Obra a carboncillo 2',
    descripcion:
      'Obra en homenaje a la mujer a carboncillo con fondo azul y carboncillo tanto blanco como negro.'
  },
  {
    src: new URL('@/assets/skechbook.jpg', import.meta.url).href,
    titulo: 'Sketchbook',
    descripcion:
      'Sketchbook creativo de 60 dibujos rápidos con diferentes técnicas como lápiz, acuarela, carboncillo, acrílico etc.'
  },
  {
    src: new URL('@/assets/ojo.JPG', import.meta.url).href,
    titulo: 'Obra hiperrealista',
    descripcion: 'Ojo hiperrealista realizado a lapiz.'
  }
]

const seleccionarObra = (id: number) => {
  obraSeleccionada.value = id
}

const obraActual = computed(() => {
  if (obraSeleccionada.value === null) return null
  return ilustraciones[obraSeleccionada.value] ?? null
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
      <h1 class="section-title text-brand-pink text-7xl mt-4">Ilustraciones</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(obra, index) in ilustraciones"
        :key="obra.src"
        @click="seleccionarObra(index)"
        class="group cursor-pointer border border-pink-300/70 rounded-2xl overflow-hidden hover:border-pink-200 transition-all"
      >
        <div class="aspect-square bg-neutral-900 overflow-hidden">
          <img
            :src="obra.src"
            class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-duration-500"
          />
        </div>
        <div class="p-4 bg-neutral-900/50">
          <h3 class="section-title text-sm font-bold uppercase tracking-widest">{{ obra.titulo }}</h3>
        </div>
      </div>
    </div>

    <div
      v-if="obraActual"
      class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
      @click="obraSeleccionada = null"
    >
      <div
        class="max-w-4xl w-full flex flex-col md:flex-row gap-10 bg-neutral-900 p-8 rounded-3xl border border-brand-pink/30"
        @click.stop
      >
        <img :src="obraActual.src" class="w-full md:w-1/2 rounded-xl object-cover" />
        <div class="flex flex-col justify-center">
          <h2 class="section-title text-4xl font-black text-brand-pink uppercase mb-4">{{ obraActual.titulo }}</h2>
          <p class="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
            {{ obraActual.descripcion }}
          </p>
          <button
            @click="obraSeleccionada = null"
            class="mt-8 self-start text-brand-pink font-bold uppercase text-xs tracking-widest border-b border-brand-pink"
          >
            Cerrar detalle
          </button>
        </div>
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
