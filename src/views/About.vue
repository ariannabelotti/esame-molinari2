<template>
<section class="relative bg-white">

  <!-- PARTE TESTO -->
  <div class="relative z-10 h-60 flex items-center justify-center">
    <h3 class="text-5xl font-bold text-stone-900">
      About Us
    </h3>

    <!-- Pulsante Home -->
    <div class="absolute top-8 left-8">
      <button
        @click="$router.push('/')"
        class="bg-orange-500 text-white p-3 rounded-full hover:bg-stone-800 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 22V12h6v10" />
        </svg>
      </button>
    </div>
  </div>

  <!-- PARTE IMMAGINE (SFONDO SOTTO IL TESTO) -->
  <div class="w-full h-80 bg-[url('../assets/about1.jpg')] bg-cover bg-center"></div>

</section>



  <!-- CONTENUTO -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">

      <!-- BLOCCO TESTO EDITORIALE -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

        <!-- MENU LATERALE (come reference) -->
        <aside class="lg:col-span-2 text-sm text-gray-500 space-y-2">
          <p class="font-semibold text-stone-800">About us.</p>
          <p>Our team.</p>
          <p>Press.</p>
        </aside>

        <!-- TESTO PRINCIPALE -->
        <div class="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            Belpress Srl è un’impresa con radici solide e una storia di sviluppo
            progressivo, nata dalla passione per l’arte della fonderia e dai valori
            fondanti della dimensione familiare. Fondata nei primi anni ’90 nel cuore
            della Franciacorta, l’azienda ha costruito nel tempo una struttura
            produttiva affidabile e orientata alla qualità.
          </p>

          <p>
            Con oltre trent’anni di esperienza nel settore metallurgico, Belpress è
            oggi una realtà di riferimento nella pressofusione di alluminio e leghe
            non ferrose, tra cui zama e ottone. L’azienda opera attraverso processi
            tecnologicamente avanzati, mantenendo un approccio artigianale attento al
            dettaglio.
          </p>

          <p>
            Dalla progettazione degli stampi alla produzione del pezzo finito,
            Belpress affianca i propri clienti in ogni fase del processo, garantendo
            precisione, affidabilità e continuità produttiva.
          </p>
        </div>
      </div>

      <!-- STATISTICHE (INVARIATE) -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-24">
        <article class="bg-stone-700 text-white rounded-3xl p-6">
          <h4 class="text-3xl font-bold">800mq</h4>
          <p class="mt-2 text-sm">Area produttiva</p>
        </article>

        <article class="bg-stone-700 text-white rounded-3xl p-6">
          <h4 class="text-3xl font-bold">2 isole lavoro</h4>
          <p class="mt-2 text-sm">Linee di produzione</p>
        </article>

        <article class="bg-stone-700 text-white rounded-3xl p-6">
          <h4 class="text-3xl font-bold">+30 anni</h4>
          <p class="mt-2 text-sm">Sul mercato</p>
        </article>
      </div>

      <!-- QUADRATO 1 (placeholder immagine grande) -->
      <div class="w-full h-72 bg-stone-300 rounded-2xl mb-24"></div>

      <!-- BLOCCO CITAZIONE -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

        <!-- TESTO CITAZIONE -->
        <div class="lg:col-span-5">
          <p class="text-2xl italic font-serif text-stone-800 mb-4">
            “La qualità non è un risultato casuale, ma il frutto di metodo,
            esperienza e attenzione costante.”
          </p>
          <p class="text-sm text-gray-500">
            Direzione Tecnica – Belpress S.r.l.
          </p>
        </div>

        <!-- QUADRATO 2 (placeholder immagine) -->
        <div class="lg:col-span-5 lg:col-start-8">
          <div class="w-full h-56 bg-stone-200 rounded-2xl"></div>
        </div>

      </div>

    </div>

      <!-- Il nostro Team -->
      <h3 class="text-4xl font-bold text-center mb-8">Il nostro Team</h3>

   <p>
  {{aboutUsPeople}}
</p>
  </section>
</template>


<script setup>
  import { aboutUsPeople } from '../database/aboutUs.js';
</script>
<style scoped></style>
