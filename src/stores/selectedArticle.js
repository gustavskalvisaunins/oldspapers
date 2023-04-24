import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core"


export const useSelectedArticleStore = defineStore("selectedArticle", {
  state: () => {
    return {
      selectedArticle: useLocalStorage("selectedArticle", {
        id: null,
        title: null,
        publishedDate: null,
        note: null,
        pdf: null,
      }),
    }
  },

  actions: {
    setSelectedArticle(article){
      this.selectedArticle = {
        id: article.id,
        title: article.title,
        publishedDate: article.publishedDate,
        note: article.note,
        pdf: article.pdf,
      }
    }
  },
});