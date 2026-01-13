<script setup>
import { ref } from 'vue'

/* ref is a Vue Composition API function that creates a reactive reference. 
   It is used to create a reactive variable that can be used in the template. */

defineProps({
  msg: String,
})

// This is a reactive variable that will be used to track the count, 
// It is initialized to 0 and can be incremented by clicking the button in the template 
// provide ci permette di definire una variabile reattiva che può essere utilizzata nel template, fa riferimento ai discendenti di un singolo componente
// inject ci permette di accedere a una variabile reattiva definita in un componente genitore
// e utilizzarla in un componente figlio, utile per condividere dati tra componenti senza
// dover passare i dati attraverso le props


const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
  font-family: montserrat, sans-serif;
}

</style>
