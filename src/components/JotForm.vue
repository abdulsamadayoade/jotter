<script setup>
import { reactive } from 'vue';
import { useJotStore } from '../stores/jotStore';

const state = reactive({
  title: '',
  content: '',
  isFavorite: false,
});

const store = useJotStore();

// clear fields when the user clicks cancel
const clearFields = () => {
  state.title = '';
  state.content = '';
  state.isFavorite = false;
};

// submit jot and clear fields after user submits the form
const submitJot = () => {
  store.addJot(state);
  clearFields();
};
</script>

<template>
  <div class="jot-form">
    <p class="jot-form__title">Add a new jot</p>
    <form @submit.prevent="submitJot" class="jot-form__form">
      <label class="jot-form__label jot-form__label--title">
        <span>Jot Title</span>
        <input type="text" v-model="state.title" />
      </label>

      <label class="jot-form__label jot-form__label--content">
        <span>Jot Content</span>
        <textarea v-model="state.content"></textarea>
      </label>

      <div :class="{ 'active': state.isFavorite }" @click="state.isFavorite = !state.isFavorite"
        class="jot-form__setFavorite">
        <div>
          <span v-if="state.isFavorite">&#x2713;</span>
        </div>
        <p>Set as favorite</p>
      </div>

      <div class="jot-form__buttons">
        <button class="jot-form__button jot-form__button--save">Save</button>
        <button @click="clearFields" class="jot-form__button jot-form__button--cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>