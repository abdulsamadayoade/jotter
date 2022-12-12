import { defineStore } from "pinia";

export const useJotStore = defineStore('jotStore', {
  state: () => ({
    jots: [],
    id: 0,
  }),
  actions: {
    addJot(jot) {
      this.jots.push({ id: this.id, jot });
      this.id++;
    }
  }
});