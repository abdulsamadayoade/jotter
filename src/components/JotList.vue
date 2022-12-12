<script setup>
import JotItem from './JotItem.vue';
import { storeToRefs } from 'pinia';
import { useJotStore } from '../stores/jotStore';

const store = useJotStore();

const { deleteJot, setFavoriteJot } = store;
const { jots } = storeToRefs(store);
</script>

<template>
  <div class="jot-list">
    <p class="jot-list__paragraph">Jot List</p>
    <JotItem
      v-for="jot in jots"
      :key="jot.id"
      :jot="jot"
      :deleteJot="deleteJot"
      :setFavoriteJot="setFavoriteJot"
    />
    <p v-if="!jots.length">You currently don't have any jot, jot something now!</p>
  </div>
</template>