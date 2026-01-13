<template>
  <Navbar />
  <div>
    <h1>Benvenuto in My App</h1>
    <p>Questa è la home page.</p>

    <router-link to="/about">
      <button>Vai alla pagina About</button>
    </router-link>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>