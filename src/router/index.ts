import Home from "@/pages/home/Home.vue";
import Contacto from "@/pages/home/contacto.vue";
import SobreMi from "@/pages/home/sobremi.vue";
import Trabajos from "@/pages/home/trabajos/trabajos.vue";
import Ilustraciones from "@/pages/home/trabajos/ilustraciones.vue";
import DisenoGrafico from "@/pages/home/trabajos/diseno-grafico.vue";
import DisenoEditorial from "@/pages/home/trabajos/diseno-editorial.vue";
import PiezasAudiovisuales from "@/pages/home/trabajos/piezas-audiovisuales.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    }
    return { top: 0 };
  },

routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto 
    },
    {
      path: '/sobremi',
      name: 'sobremi',
      component: SobreMi
    },
    {
      path: '/trabajos',
      name: 'trabajos',
      component: Trabajos
    },
    {
      path: '/ilustraciones',
      name: 'ilustraciones',
      component: Ilustraciones
    },
    {
      path: '/diseno-grafico',
      name: 'diseno-grafico',
      component: DisenoGrafico
    },
    {
      path: '/diseno-editorial',
      name: 'diseno-editorial',
      component: DisenoEditorial
    },
    {
      path: '/piezas-audiovisuales',
      name: 'piezas-audiovisuales',
      component: PiezasAudiovisuales
    },
    {
      path: '/:pathMatch(.*)', 
      redirect: '/'
    }

  ]
})
