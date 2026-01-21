<template>
  <section title="Contatti" class="bg-gradient-to-b from-white to-gray-200 w-full min-h-screen p-8">

    <!-- Pulsante Home -->
    <div class="absolute top-8 left-8">
      <button
        @click="$router.push('/')"
        class="bg-orange-500 text-white p-3 rounded-full hover:bg-stone-800 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg"
             class="w-6 h-6"
             fill="none"
             stroke="currentColor"
             stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"/>
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 22V12h6v10"/>
        </svg>
      </button>
    </div>

    <!-- Contenitore principale centrato ORIZZONTALMENTE -->
    <div class="mx-auto max-w-[900px]">

      <!-- Logo + Titolo allineati a sinistra -->
      <div class="flex justify-start mb-2">
        <img src="../assets/LOGO_BP.svg" alt="Logo BP" class="w-72 h-auto" />
      </div>

      <h3 class="text-3xl font-bold text-stone-800 text-left mt-10">
        Lavora con noi
      </h3>

      <!-- Mappa + Dati -->
      <div class="flex justify-start gap-0 mb-8">

        <!-- Mappa -->
        <div class="w-[400px] h-[400px] bg-gray-200 border-4 border-stone-800 rounded-l-xl overflow-hidden">
          <div ref="mapEl" class="w-full h-full"></div>
        </div>

        <!-- Box informazioni -->
        <div class="w-[400px] h-[400px] bg-stone-800 p-6 rounded-r-xl">
          <p class="font-bold">Indirizzo:</p><p class="text-white mb-7 italic">Via A. De Gasperi, 21, 25030 Zocco BS</p>
          <p class="font-bold">Telefono:</p><p class="text-white mb-7 italic">+39 030 1234567</p>
          <p class="font-bold">Email:</p><p class="text-white mb-7 italic">belpress@libero.it</p>
          <p class="font-bold">P.IVA:</p><p class="text-white mb-7 italic">02126750989 </p>
          <p class="font-bold">PEC:</p><p class="text-white mb-7 italic">belpress@legalmail.it </p>
        </div>

      </div>

      <!-- Orari e bottone -->
      <div class="flex justify-start mb-6">
        <div class="text-stone-800 text-lg font-medium">
          <p class="font-bold text-2xl py-2">Orari di apertura:</p>
            <p class="font-bold">Dal Lunedì al Venerdì</p> 
          <p>Orario continuato.</p>
          <p class="font-bold">Sabato:</p>
          <p>10:00‑12:00</p>
          <p class="font-bold">Domenica:</p>
          <p>Chiuso.</p>
        </div>
       
      <div class="flex justify-center items-center ml-75">
        <a href="mailto:belpress@libero.it">
          <button class="bg-orange-500 text-white py-3 px-9 rounded-2xl hover:bg-stone-800 transition font-bold">
            Scrivici ora
          </button>
        </a>
      </div>
      </div>

      

    </div>
    <footer class="pt-5">
  
  <img src="../assets/LOGO_BP.svg" alt="Logo BP" class="h-auto mx-auto w-36 mt-4 mb-4" />
 <div class="w-full flex justify-center text-stone-800 font-medium">
      <p>©️ 2026 Belpress S.r.l. Tutti i diritti riservati.</p>
      
    </div>  </footer>

  </section>
</template>




<script setup>
import { ref, onMounted, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const mapEl = ref(null);

onMounted(async () => {
  await nextTick();

  // Coordinate Belpress
  const center = [45.6062894, 9.931394];

  const map = L.map(mapEl.value, {
    center,
    zoom: 16,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  L.marker(center).addTo(map);

  // Se il container era “stretto”/non calcolato al mount, forza ricalcolo
  setTimeout(() => map.invalidateSize(), 0);
});
</script>
