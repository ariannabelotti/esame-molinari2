<template>
    <nav class="flex items-center justify-between px-4 py-2 bg-white/70 backdrop-blur-2xl text-orange-500 m-8 rounded-3xl"> <!-- aggiunto la classe flex di tailwind -->
        <div>
           <source img src="../assets/logo.png" alt="Logo" /> <!-- logo -->
        </div>
        <ul class="flex gap-6 text-gray-950 font-medium">
            <li class="hover:text-amber-600"><router-link to="">Homepage</router-link></li>
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