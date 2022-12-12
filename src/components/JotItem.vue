<script setup>

</script>

<template>
  <div class="jot-item">
    <div class="jot-item__top">
      <h2>What I think about Pinia & Vuex<sup class="sup">favorite</sup></h2>
      <div>
        <span>Having used both Pinia and Vuex to manage global state in a Vue app, I think Pinia is kind of better
        and easier to learn compare to Vuex. It's high time all Vue apps should use Pinia instead of Vuex. </span>
        <span class="read-more">Read rest of Jot</span>
      </div>
    </div>
    <div class="jot-item__bottom">
      <button title="Set as favorite" class="jot-item__button jot-item__button--favorite">
        Set as favorite
      </button>
      <button title="delete jot" class="jot-item__button jot-item__button--delete">
        Delete jot
      </button>
    </div>
  </div>
</template>