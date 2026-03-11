<script setup lang="ts">
import { computed, ref } from 'vue'

const profile = {
  name: 'Esther'
}

const proyectos = [
  {
    titulo: 'Revista innovación',
    descripcion:
      'Este proyecto es una revista para un evento tecnológico internacional organizado por la Startup de Valencia como capital de innovación en tecnologia.',
    portada: new URL('@/assets/revista1.jpg', import.meta.url).href,
    imagenes: [
      new URL('@/assets/revista1.jpg', import.meta.url).href,
      new URL('@/assets/revista2.jpg', import.meta.url).href
    ]
  },
  {
    titulo: 'Comic',
    descripcion:'Ejercicio de un comic ficticio, a esta obra le quise dar una estética urbana con colores vividos y lenguaje coloquial. Este cómic se dibujo a mano pero el color fue digital con procreate.',
    portada: new URL('@/assets/comic.JPG', import.meta.url).href,
    imagenes: [
      new URL('@/assets/comic.JPG', import.meta.url).href
    ]
  },
  {
    titulo: 'Viñetas',
    descripcion:
      'Ejercicio de creación de 3 viñetas que cuentan una historia, estas viñetas han sido creadas con procreate.',
    portada: new URL('@/assets/vinetas.JPG', import.meta.url).href,
    imagenes: [
      new URL('@/assets/vinetas.JPG', import.meta.url).href
    ]
  },
  {
    titulo: 'Artículo',
    descripcion: 'Este proyecto fue creado para un artículo feminista. La imagen esta hecha con la técnica collage y más tarde digitalizada',
    portada: new URL('@/assets/articulo.jpg', import.meta.url).href,
    imagenes: [
      new URL('@/assets/articulo.jpg', import.meta.url).href
    ]
  },
  {
    titulo: 'Revista Salud Mental',
    descripcion: 'Este es un proyecto de la maquetación tipográfica de un artículo para la salud mental en diseñadores.',
    portada: new URL('@/assets/salud1.png', import.meta.url).href,
    imagenes: [
      new URL('@/assets/salud1.png', import.meta.url).href,
      new URL('@/assets/salud2.png', import.meta.url).href,
      new URL('@/assets/salud3.png', import.meta.url).href,
      new URL('@/assets/salud4.png', import.meta.url).href,
      new URL('@/assets/salud5.png', import.meta.url).href
    ]
  }
]

const proyectoSeleccionado = ref<number | null>(null)
const imagenActiva = ref(0)

const seleccionarProyecto = (id: number) => {
  proyectoSeleccionado.value = id
  imagenActiva.value = 0
}

const proyectoActual = computed(() => {
  if (proyectoSeleccionado.value === null) return null
  return proyectos[proyectoSeleccionado.value] ?? null
})

const imagenModalActual = computed(() => {
  if (!proyectoActual.value?.imagenes?.length) return null
  return proyectoActual.value.imagenes[imagenActiva.value] ?? null
})

const imagenSiguiente = () => {
  if (!proyectoActual.value?.imagenes?.length) return
  imagenActiva.value = (imagenActiva.value + 1) % proyectoActual.value.imagenes.length
}

const imagenAnterior = () => {
  if (!proyectoActual.value?.imagenes?.length) return
  imagenActiva.value = (imagenActiva.value - 1 + proyectoActual.value.imagenes.length) % proyectoActual.value.imagenes.length
}
</script>

<template>
  <section class="relative min-h-screen w-full bg-black text-white font-sans px-4 sm:px-6 md:px-16 pt-3 md:pt-6 pb-6 md:pb-10">
    <header class="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 z-50 bg-amber-50/90 text-black rounded-md px-4 sm:px-6 md:px-10 py-3 mb-10 md:mb-16">
      <div class="uppercase tracking-widest text-xs md:text-sm font-bold">
        <span class="text-base sm:text-lg md:text-xl leading-none font-black">{{ profile.name }}</span>
      </div>

      <nav class="w-full sm:w-auto flex flex-wrap justify-start sm:justify-end gap-2 md:gap-4">
        <router-link to="/" class="nav-box">Inicio</router-link>
        <router-link to="/trabajos" class="nav-box nav-box-active">Trabajos</router-link>
        <router-link to="/sobremi" class="nav-box">Sobre mi</router-link>
        <router-link to="/contacto" class="nav-box">Contacto</router-link>
      </nav>
    </header>

    <div class="mb-10 md:mb-16">
      <router-link to="/trabajos" class="text-brand-pink font-mono text-xs uppercase tracking-widest hover:underline">
        ← Volver a proyectos
      </router-link>
      <h1 class="section-title text-brand-pink text-4xl sm:text-6xl md:text-7xl leading-[0.95] mt-4">
        Diseño editorial
      </h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <article
        v-for="(proyecto, index) in proyectos"
        :key="proyecto.titulo"
        @click="seleccionarProyecto(index)"
        class="group cursor-pointer border border-pink-300/70 rounded-2xl overflow-hidden bg-neutral-900/50 hover:border-pink-200 transition-all"
      >
        <div class="aspect-video bg-pink-300/60 border-b border-pink-200/70 overflow-hidden">
          <img
            v-if="proyecto.portada"
            :src="proyecto.portada"
            :alt="`Portada ${proyecto.titulo}`"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-5">
          <h3 class="section-title text-3xl sm:text-4xl uppercase tracking-[0.08em] text-brand-pink">
            {{ proyecto.titulo }}
          </h3>
        </div>
      </article>
    </div>

    <div
      v-if="proyectoActual"
      class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      @click="proyectoSeleccionado = null"
    >
      <div
        class="max-w-3xl w-full bg-neutral-900 p-5 sm:p-8 rounded-3xl border border-brand-pink/30 my-6 max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div v-if="imagenModalActual" class="mb-6">
          <div class="relative rounded-2xl overflow-hidden bg-black/30 flex justify-center">
            <img
              :src="imagenModalActual"
              :alt="`Detalle ${proyectoActual.titulo}`"
              class="w-full max-h-[55vh] sm:max-h-[65vh] object-contain"
            />
            <div
              v-if="(proyectoActual.imagenes?.length ?? 0) > 1"
              class="absolute inset-x-0 bottom-0 p-4 flex justify-between"
            >
              <button
                @click="imagenAnterior"
                class="px-4 py-2 rounded-md bg-black/70 text-amber-50 text-xs uppercase tracking-widest"
              >
                Anterior
              </button>
              <button
                @click="imagenSiguiente"
                class="px-4 py-2 rounded-md bg-black/70 text-amber-50 text-xs uppercase tracking-widest"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>

        <h2 class="section-title text-3xl sm:text-4xl md:text-5xl font-black text-brand-pink uppercase mb-4">
          {{ proyectoActual.titulo }}
        </h2>
        <p class="text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-90">
          {{ proyectoActual.descripcion }}
        </p>
        <button
          @click="proyectoSeleccionado = null"
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

@media (max-width: 480px) {
  .nav-box {
    padding: 6px 10px;
    font-size: 0.65rem;
  }
}
</style>
