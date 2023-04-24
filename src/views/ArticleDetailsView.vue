<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { useSelectedArticleStore } from "@/stores/selectedArticle";

  const store = useSelectedArticleStore();

  const router = useRouter();

  const modifiedNote = ref(store.selectedArticle.note.join(" "));

  const routeToHome = () => {
    router.push("/");
  };
</script>



<template>
  <KeepAlive>
    <div>
  <header>
    <div class="logo-container">
      <h2 @click="routeToHome" class="logo">Oldspapers</h2>
    </div>
  </header>

  <main>
    <h1 class="title">{{ store.selectedArticle.title }}</h1>
    <code class="date">{{ store.selectedArticle.publishedDate.year }} / {{ store.selectedArticle.publishedDate.month }} / {{ store.selectedArticle.publishedDate.day }}</code>

    <p class="note">{{ modifiedNote }}</p>

    <a :href="store.selectedArticle.pdf" target="_blank">
      <img class="article-image"
        :src="store.selectedArticle.pdf"
        alt="Newspaper page."
      >
    </a>
  </main>

  <footer>
    <p class="disclaimer">
    Oldspapers uses <a href="https://chroniclingamerica.loc.gov/about/api/" target="_blank" class="quote-link">The Library of Congress: Chronicling America API</a>, which provides access to information about historic newspapers and select digitized newspaper pages.
  </p>
  </footer>
</div>
</KeepAlive>
</template>


<style scoped>
div {
    margin: 0;
    padding: 0;
  }

  header {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    border-bottom: 1px solid #000000;
    margin-bottom: 32px;
    gap: 8px;
    height: 64px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 10;
  }

  footer {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 32px;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  .logo-container {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    font-family: 'Chomsky', serif;
    cursor: pointer;
  }

  .title {
    margin: 0;
    padding: 0;
    margin-top: 32px;
    text-align: center;
  }

  .date {
    margin: 0;
    padding: 0;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #000000;
    margin-bottom: 32px;
  }

  .note {
    margin: 0;
    padding: 0;
    margin-bottom: 32px;
  }

  .article-image {
    width: 100%;
    height: auto;
    margin-bottom: 64px;
  }

  .quote-link {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 13px;
    color: #c90000;
    transition: 0.3s;
  }

  .disclaimer {
    font-style: italic;
  }
</style>