<script setup lang="ts">
import { computed, ref } from 'vue'

const profile = {
  name: 'Esther'
}

const cajas = [
  {
    titulo: 'Kaoka',
    descripcion:
      'Proyecto de identidadd visual para una marca de chocolates llamada "Kaoka" con 4 diferentes sabores de chcolate y complementos',
    portada: new URL('@/assets/mockup1.jpg', import.meta.url).href,
    imagenes: [
      new URL('@/assets/MOCKUP WELCOME PACK.jpg', import.meta.url).href,
      new URL('@/assets/mockup1.jpg', import.meta.url).href,
      new URL('@/assets/mockup2.jpg', import.meta.url).href,
      new URL('@/assets/mockup3.jpg', import.meta.url).href,
      new URL('@/assets/mockup4.jpg', import.meta.url).href
    ]
  },
  {
    titulo: 'Celebremos',
    descripcion:
      'Campaña publicitaria para conectar a los jóvenes con los mayores, esta camapaña se basa en conectar a través de las celebreaciones momentos en los que todos nos reunimos de ahí el lema "Celebremos juntos"',
    portada: new URL('@/assets/mupicelebremos.jpg', import.meta.url).href,
    imagenes: [
      new URL('@/assets/IMG_0404.jpg', import.meta.url).href,
      new URL('@/assets/IMG_0405.jpg', import.meta.url).href,
      new URL('@/assets/IMG_0406.jpg', import.meta.url).href,
      new URL('@/assets/IMG_0407.jpg', import.meta.url).href
    ]
  },
  {
    titulo: 'IRA',
    descripcion:
      'Proyecto de 3 carteles que reflejan el sentimiento de ira, uno con imágenes, otro de textura y un último geométrico',
    portada: new URL('@/assets/ira1.jpg.jpeg', import.meta.url).href,
    imagenes: [
      new URL('@/assets/ira1.jpg.jpeg', import.meta.url).href,
      new URL('@/assets/ira2.jpg', import.meta.url).href,
      new URL('@/assets/ira3.jpg', import.meta.url).href
    ]
  },
  {
    titulo: 'Share it!',
    descripcion:
      'Proyecto en grupo de un juego de mesa creado a mano desde 0 para ayudar psicologicamente a los afectados de la DANA en Valencia. ',
    portada: new URL('@/assets/share it portada.JPG', import.meta.url).href,
    imagenes: [
      new URL('@/assets/share it portada.JPG', import.meta.url).href,
      new URL('@/assets/e7f6dc09-1f91-4036-9f2f-613bc0fa575d.JPG', import.meta.url).href,
      new URL('@/assets/d51f05bc-96c2-45a0-ba9e-c33ec7cc85e5.JPG', import.meta.url).href,
      new URL('@/assets/a301a4ef-fe70-4610-a972-3218eb3a5bdd.JPG', import.meta.url).href,
      new URL('@/assets/48159cbc-f06a-42cc-8762-334f8130202f.JPG', import.meta.url).href
    ]
  }
]

const cajaSeleccionada = ref<number | null>(null)
const imagenActiva = ref(0)

const seleccionarCaja = (id: number) => {
  cajaSeleccionada.value = id
  imagenActiva.value = 0
}

const cajaActual = computed(() => {
  if (cajaSeleccionada.value === null) return null
  return cajas[cajaSeleccionada.value] ?? null
})

const imagenModalActual = computed(() => {
  if (!cajaActual.value?.imagenes?.length) return null
  return cajaActual.value.imagenes[imagenActiva.value] ?? null
})

const imagenSiguiente = () => {
  if (!cajaActual.value?.imagenes?.length) return
  imagenActiva.value = (imagenActiva.value + 1) % cajaActual.value.imagenes.length
}

const imagenAnterior = () => {
  if (!cajaActual.value?.imagenes?.length) return
  imagenActiva.value = (imagenActiva.value - 1 + cajaActual.value.imagenes.length) % cajaActual.value.imagenes.length
}
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
      <h1 class="section-title text-brand-pink text-7xl mt-4">Diseño gráfico</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <article
        v-for="(caja, index) in cajas"
        :key="caja.titulo"
        @click="seleccionarCaja(index)"
        class="group cursor-pointer border border-pink-300/70 rounded-2xl overflow-hidden bg-neutral-900/50 hover:border-pink-200 transition-all"
      >
        <div class="aspect-video bg-pink-300/60 border-b border-pink-200/70 overflow-hidden">
          <img v-if="caja.portada" :src="caja.portada" :alt="`Portada ${caja.titulo}`" class="w-full h-full object-cover" />
        </div>
        <div class="p-5">
          <h3 class="section-title text-4xl uppercase tracking-[0.08em] text-brand-pink">{{ caja.titulo }}</h3>
        </div>
      </article>
    </div>

    <div
      v-if="cajaActual"
      class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
      @click="cajaSeleccionada = null"
    >
      <div class="max-w-3xl w-full bg-neutral-900 p-8 rounded-3xl border border-brand-pink/30" @click.stop>
        <div v-if="imagenModalActual" class="mb-6">
          <div class="relative rounded-2xl overflow-hidden bg-black/30 flex justify-center">
            <img
              :src="imagenModalActual"
              :alt="`Detalle ${cajaActual.titulo}`"
              class="w-auto h-[420px] md:h-[520px] object-contain"
            />
            <div class="absolute inset-x-0 bottom-0 p-4 flex justify-between">
              <button
                @click="imagenAnterior"
                class="px-3 py-1 rounded-md bg-black/70 text-amber-50 text-xs uppercase tracking-widest"
              >
                Anterior
              </button>
              <button
                @click="imagenSiguiente"
                class="px-3 py-1 rounded-md bg-black/70 text-amber-50 text-xs uppercase tracking-widest"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>

        <h2 class="section-title text-5xl font-black text-brand-pink uppercase mb-4">
          {{ cajaActual.titulo }}
        </h2>
        <p class="text-neutral-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
          {{ cajaActual.descripcion }}
        </p>
        <button
          @click="cajaSeleccionada = null"
          class="mt-8 text-brand-pink font-bold uppercase text-xs tracking-widest border-b border-brand-pink"
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
