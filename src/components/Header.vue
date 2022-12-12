<script setup>
  import { computed } from '@vue/reactivity';
  import { useJotStore } from '../stores/jotStore';

  const store = useJotStore();
  const jotCount = computed(() => store.jots.length);
</script>

<template>
  <header class="header">
    <h1 class="header__heading">My Jotter App</h1>
    <p class="header__paragraph--first">This is a simple app for jotting things down.</p>
    <p class="header__paragraph--second">Total Jot Count: ({{ jotCount }})</p>
  </header>
</template>