<script setup>
import JotForm from '../components/JotForm.vue';
import JotList from '../components/JotList.vue';
</script>

<template>
  <main>
    <section class="jot-container">
      <JotForm />
      <JotList />
    </section>
  </main>

  <div class="footer">
    Made with Vue Router, Pinia, and Vanilla CSS
  </div>
</template>
