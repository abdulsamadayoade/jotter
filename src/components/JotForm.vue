<script setup>

</script>

<template>
  <div class="jot-form">
    <p class="jot-form__title">Add a new jot</p>
    <form class="jot-form__form">
      <label class="jot-form__label jot-form__label--title">
        <span>Jot Title</span>
        <input type="text" />
      </label>

      <label class="jot-form__label jot-form__label--content">
        <span>Jot Content</span>
        <textarea></textarea>
      </label>

      <div class="jot-form__setFavorite">
        <div>
          <span>&#x2713;</span>
        </div>
        <p>Set as favorite</p>
      </div>

      <div class="jot-form__buttons">
        <button class="jot-form__button jot-form__button--save">Save</button>
        <button class="jot-form__button jot-form__button--cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>