<template>
    <nav class="flex items-center justify-between pt-3 pb-3 pl-6 pr-4 bg-white/70 backdrop-blur-2xl text-orange-500 rounded-3xl fixed top-6 left-30 right-30 w-auto"> <!-- aggiunto la classe flex di tailwind -->
        <div class="h-10 w-auto">
          <img src="../assets/LOGO_BP.svg" alt="Logo" class="h-full w-auto"/>
        </div>
        <ul class="flex gap-6 text-gray-950 font-medium absolute left-1/2 -translate-x-1/2">
            <li class="hover:text-amber-600"><router-link to="/">Homepage</router-link></li>
            <li class="hover:text-amber-600"><router-link to="/about">Chi siamo</router-link></li>
            <li class="hover:text-amber-600"><router-link to="/services">Servizi</router-link></li>
    
        </ul>
        <router-link to="/contact" class="bg-orange-500 text-white py-2 px-4 rounded-2xl hover:bg-gray-900 transition-colors font-bold">
            <button>Contatti</button>
        </router-link> 
    </nav>
</template>
<script setup>

</script>
<style scoped></style>