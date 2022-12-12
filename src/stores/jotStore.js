import { defineStore } from "pinia";

export const useJotStore = defineStore('jotStore', {
  state: () => ({
    jots: [],
    id: 0,
  }),
  actions: {
    addJot(jot) {
      this.jots.push({ id: this.id, 
        ...jot
      });
      this.id++;
    },
    deleteJot(id) {
      this.jots = this.jots.filter(jot => jot.id !== id);
    },
    setFavoriteJot(id) {
      this.jots = this.jots.map(jot => {
        if (jot.id === id) {
          jot.isFavorite = !jot.isFavorite;
        }
        return jot;
      });
    }
  }
});