

<script setup lang="ts">
const profile = {
  name: 'Esther'
};
</script>




<template>
  
<main class="min-h-screen w-full bg-amber-50 text-black font-sans px-6 md:px-16 pt-3 md:pt-6 pb-0 flex flex-col">
    
    <header class="w-full flex justify-between items-center z-50 bg-black text-amber-50 rounded-md px-8 md:px-10 py-3 mb-20">
      <div class="uppercase tracking-widest text-xs md:text-sm font-bold">
        <span class="text-sm md:text-xl leading-none font-black">{{ profile.name }}</span>
      </div>

      <nav class="flex gap-3 md:gap-4">
        <router-link to="/" class="nav-box">Inicio</router-link>
        <router-link to="/trabajos" class="nav-box">Trabajos</router-link>
        <router-link to="/sobremi" class="nav-box">Sobre mi</router-link>
        <span class="nav-box nav-box-active">Contacto</span>
      </nav>
    </header>

    <h1 class="text-[12vw] font-black leading-[0.78] tracking-tighter mb-16 contact-title-tight">
      Trabajemos juntos 
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      
      <div class="flex flex-col gap-10">
        <div class="text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
          <p>Valencia, Spain</p>
          <p>2026</p>
        </div>
    
      </div>

      <form class="flex flex-col gap-8">
        <p class="text-[10px] font-black uppercase tracking-widest">Nombre</p>
        <div class="grid grid-cols-2 gap-4 -mt-4">
          <input type="text" placeholder="Nombre" class="minimal-input">
          <input type="text" placeholder="Apellido" class="minimal-input">
        </div>

        <div class="relative">
          <input type="text" placeholder="Servicio" class="minimal-input w-full">
          <span class="absolute right-0 bottom-3 text-[10px]">▼</span>
        </div>

        <input type="email" placeholder="Correo electronico (obligatorio)" class="minimal-input w-full">

        <div class="flex items-center gap-2">
          <input type="checkbox" id="news" class="accent-black">
          <label for="news" class="text-[10px] font-bold uppercase">Suscribete a noticias y novedades</label>
        </div>

        <textarea placeholder="Descripcion del proyecto" rows="1" class="minimal-input w-full resize-none"></textarea>

        <button type="submit" class="bg-black text-white w-fit px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest mt-4">
          Enviar
        </button>
      </form>
    </div>

    <div class="mt-auto pt-20 flex flex-col md:flex-row justify-between items-end gap-10">
      <div class="flex flex-col md:flex-row gap-10 w-full items-baseline">
        <h2 class="text-4xl md:text-6xl font-black lowercase tracking-tighter">ruizcabelloe@gmail.com</h2>
        <h2 class="text-4xl md:text-6xl font-black tracking-tighter">(+34) 669 053 580</h2>
      </div>
    </div>






  </main>


</template>



<style scoped>


.minimal-input {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 0;
  background: transparent;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  transition: border-color 0.3s ease;
}

.minimal-input:focus {
  border-bottom-color: #000;
}

.minimal-input::placeholder {
  color: #a3a3a3;
  font-size: 11px;
  text-transform: none;
}

h1, h2 {
  font-family: 'Inter', sans-serif; 
}

.contact-title-tight {
  word-spacing: -0.18em;
}

.nav-box {
  border: 1px solid rgba(255, 251, 235, 0.55);
  padding: 6px 12px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #fffbeb;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: rgba(255, 251, 235, 0.12);
}

.nav-box:hover {
  background-color: #fffbeb;
  color: #000000;
  border-color: #fffbeb;
}

.nav-box-active {
  background-color: #fffbeb;
  color: #000000;
  border-color: #fffbeb;
}



</style>
