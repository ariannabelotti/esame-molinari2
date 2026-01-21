<template>
  <section class="bg-stone-100 py-20">
    <!-- Pulsante Home -->
    <div class="absolute top-8 left-4">
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

    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- HERO -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
          Soluzioni complete per la pressofusione
        </h1>
        <p class="text-gray-600 text-lg">
          Dalla progettazione dello stampo alla consegna del pezzo finito,
          accompagniamo ogni fase del processo con precisione e competenza.
        </p>
      </div>

      <!-- GRID SERVIZI -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

        <!-- CARD 1 - IMMAGINE GRANDE -->
        <article
          class="md:col-span-2 relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <img
            src="../assets/services3.jpg"
            alt="Progettazione stampi"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55 flex items-end p-8"
          >
            <div>
              <h3 class="text-white text-2xl font-bold mb-2">
                Progettazione e realizzazione stampi
              </h3>
              <p class="text-gray-200 text-sm max-w-md">
                Studio tecnico, progettazione CAD e costruzione di stampi
                personalizzati per alluminio, zama e ottone.
              </p>
            </div>
          </div>
        </article>

        <!-- CARD 2 -->
        <article
          class="bg-stone-200 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <h3 class="text-xl font-bold text-stone-800 mb-3">
              Pressofusione
            </h3>
            <p class="text-gray-700 text-sm">
              Produzione di componenti ad alta precisione tramite
              processi di pressofusione affidabili e ripetibili.
            </p>
          </div>
        </article>

        <!-- CARD 3 -->
        <article
          class="bg-stone-300 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <h3 class="text-xl font-bold text-stone-800 mb-3">
              Campionature e prototipi
            </h3>
            <p class="text-gray-700 text-sm">
              Realizzazione di campioni funzionali per validazioni tecniche
              e industrializzazione del prodotto.
            </p>
          </div>
        </article>

        <!-- CARD 4 - COLORE PIENO -->
        <article
          class="md:col-span-2 bg-stone-700 rounded-3xl p-10 text-white flex items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div>
            <h3 class="text-2xl font-bold mb-3">
              Controllo qualità e affidabilità
            </h3>
            <p class="text-gray-200 text-sm max-w-lg">
              Ogni componente è sottoposto a controlli rigorosi per garantire
              conformità, costanza produttiva e qualità nel tempo.
            </p>
          </div>

          <img
            src="../assets/services1.jpg"
            alt="Controllo qualità"
            class="w-32 h-32 object-cover rounded-full hidden md:block transition-transform duration-300 hover:scale-105"
          />
        </article>
          <!-- CARD 1 - IMMAGINE GRANDE -->
        <article
          class="md:col-span-2 relative group rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <img
            src="../assets/services3.jpg"
            alt="Progettazione stampi"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/55 flex items-end p-8"
          >
            <div>
              <h3 class="text-white text-2xl font-bold mb-2">
                Progettazione e realizzazione stampi
              </h3>
              <p class="text-gray-200 text-sm max-w-md">
                Studio tecnico, progettazione CAD e costruzione di stampi
                personalizzati per alluminio, zama e ottone.
              </p>
            </div>
          </div>
        </article>

        <!-- CARD 2 -->
        <article
          class="bg-stone-200 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <h3 class="text-xl font-bold text-stone-800 mb-3">
              Pressofusione
            </h3>
            <p class="text-gray-700 text-sm">
              Produzione di componenti ad alta precisione tramite
              processi di pressofusione affidabili e ripetibili.
            </p>
          </div>
        </article>

        <!-- CARD 3 -->
        <article
          class="bg-stone-300 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div>
            <h3 class="text-xl font-bold text-stone-800 mb-3">
              Campionature e prototipi
            </h3>
            <p class="text-gray-700 text-sm">
              Realizzazione di campioni funzionali per validazioni tecniche
              e industrializzazione del prodotto.
            </p>
          </div>
        </article>

        <!-- CARD 4 - COLORE PIENO -->
        <article
          class="md:col-span-2 bg-stone-700 rounded-3xl p-10 text-white flex items-center justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div>
            <h3 class="text-2xl font-bold mb-3">
              Controllo qualità e affidabilità
            </h3>
            <p class="text-gray-200 text-sm max-w-lg">
              Ogni componente è sottoposto a controlli rigorosi per garantire
              conformità, costanza produttiva e qualità nel tempo.
            </p>
          </div>

          <img
            src="../assets/services1.jpg"
            alt="Controllo qualità"
            class="w-32 h-32 object-cover rounded-full hidden md:block transition-transform duration-300 hover:scale-105"
          />
        </article>
   <footer class="pt-5">
  
  <img src="../assets/LOGO_BP.svg" alt="Logo BP" class="h-auto mx-auto w-36 mt-4 mb-4" />
 <div class="w-full flex justify-center text-stone-800 font-medium">
      <p>©️ 2026 Belpress S.r.l. Tutti i diritti riservati.</p>
      
    </div>  </footer>

      
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>

</style>
