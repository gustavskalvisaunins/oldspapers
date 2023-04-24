<script setup>
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter } from "vue-router";
  import { useSelectedArticleStore } from "@/stores/selectedArticle";

  const { setSelectedArticle } = useSelectedArticleStore();

  const { id, title, date, note, url } = defineProps([
    "id",
    "title",
    "date",
    "note",
    "url",
  ]);

  const modifiedId = id.replace(/\//g, "");

  const publishedDate = {
    year: date.substring(0, 4),
    month: date.substring(4, 6),
    day: date.substring(6, 8),
  };

  const response = await axios.get(`${url}`);
  const pdf = ref(response.data.pdf);

  function capitalizeFirstLetter(string) {
    return string && string.charAt(0).toUpperCase() + string.slice(1) || ""
  }

  const router = useRouter();
  const routeToArticle = () => {
    const article = {
      id: id,
      title: capitalizeFirstLetter(title),
      publishedDate: publishedDate,
      note: note,
      pdf: pdf,
    };

    setSelectedArticle(article);

    router.push(`/article/${modifiedId}`);
  };
</script>


<template>
  <div class="article-container">
    <h3>{{ capitalizeFirstLetter(title) }}</h3>
    <code class="article-date">{{ publishedDate.year }} / {{ publishedDate.month }} / {{ publishedDate.day }}</code>

    <img
      @click="routeToArticle"
      :src="pdf"
      alt="Newspaper page."
    >
  </div>
</template>


<style scoped>
  img {
    transition: 0.3s;
    cursor: pointer;
  }

  .article-container {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding-bottom: 48px;
    width: calc(94% / 3);
    cursor: default;
  }

  .article-date {
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-size: 13px;
    color: #000000;
    padding-bottom: 4px;
  }

  @media (hover: hover) {
    img:hover {
      transform: translateY(-2px);
    }
  }
</style>