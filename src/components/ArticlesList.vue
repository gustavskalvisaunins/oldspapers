<script setup>
  import ArticlePreview from "./ArticlePreview.vue";
  import axios from "axios";
  import { ref, watch } from "vue";

  const { searchTerm } = defineProps([
    "searchTerm",
  ]);

  const articles = ref(null);
  const page = ref(1);
  const totalPages = ref(0);
  const response = await axios.get(`https://chroniclingamerica.loc.gov/search/pages/results/?andtext=${searchTerm}&format=json&page=${page.value}`);
  articles.value = response.data;
  totalPages.value = Math.floor(articles.value.totalItems / 20);

  watch(page, async () => {
    const newResponse = await axios.get(`https://chroniclingamerica.loc.gov/search/pages/results/?andtext=${searchTerm}&format=json&page=${page.value}`);
    articles.value = newResponse.data;
    totalPages.value = Math.floor(articles.value.totalItems / 20);
  });
</script>


<template>
  <div class="button-container">
    <div>
      <button v-if="page > 1" @click="page--">Previous page</button>
    </div>
    <p>
      Page {{ page }} out of {{ totalPages }}
    </p>
    <div>
      <button v-if="page < totalPages" @click="page++">Next page</button>
    </div>
  </div>

  <div class="articles-container">
    <ArticlePreview
      v-for="article in articles.items"
      :key="article.id"
      :id="article.id"
      :title="article.title_normal"
      :date="article.date"
      :note="article.note"
      :url="article.url"
    />
  </div>

  <div class="button-container">
    <div>
      <button v-if="page > 1" @click="page--">Previous page</button>
    </div>
    <p>
      Page {{ page }} out of {{ totalPages }}
    </p>
    <div>
      <button v-if="page < totalPages" @click="page++">Next page</button>
    </div>
  </div>
</template>


<style scoped>
  .articles-container {
    display: flex;
    flex-wrap: wrap;
    gap: 3%;
  }
  
  .button-container {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 24px;
  }
</style>