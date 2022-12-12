<script setup>
const props = defineProps({
  jot: {
    type: Object,
    required: true,
  },
  deleteJot: {
    type: Function,
    required: true,
  },
  setFavoriteJot: {
    type: Function,
    required: true,
  },
});

</script>

<template>
  <div v-if="jot" class="jot-item">
    <div class="jot-item__top">
      <h2>{{ jot.title }}<sup v-if="jot.isFavorite" class="sup">favorite</sup></h2>
      <div>
        <span>{{ jot.content }} </span>
        <span class="read-more"> Read rest of Jot</span>
      </div>
    </div>
    <div class="jot-item__bottom">
      <button @click="setFavoriteJot(jot.id)" :class="{ 'active': jot.isFavorite }" title="Set as favorite"
        class="jot-item__button jot-item__button--favorite">
        <span v-if="!jot.isFavorite">Set as favorite</span>
        <span v-else>Remove as favorite</span>
      </button>
      <button
        @click="deleteJot(jot.id)"
      title="delete jot" class="jot-item__button jot-item__button--delete">
        Delete jot
      </button>
    </div>
  </div>
</template>