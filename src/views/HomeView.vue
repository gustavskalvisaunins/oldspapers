<script setup>
  import ArticlesList from "../components/ArticlesList.vue";
  import { ref } from "vue";

  const searchTerm = ref("");

  const setSearchTerm = (term) => {
    searchTerm.value = term.toLowerCase();
  };
</script>


<template>
  <header>
    <div class="logo-container">
      <h2 class="logo">Oldspapers</h2>
    </div>

    <div class="search-and-filter-container">
      <div class="filter">
        <a @click="setSearchTerm('Health')" class="header-link">Health</a>
        <a @click="setSearchTerm('Science')" class="header-link">Science</a>
        <a @click="setSearchTerm('Agriculture')" class="header-link">Agriculture</a>
        <a @click="setSearchTerm('Construction')" class="header-link">Construction</a>
        <a @click="setSearchTerm('Business')" class="header-link">Business</a>
        <a @click="setSearchTerm('Politics')" class="header-link">Politics</a>
        <a @click="setSearchTerm('Sports')" class="header-link">Sports</a>
        <a @click="setSearchTerm('Arts')" class="header-link">Arts</a>
        <a @click="setSearchTerm('Food')" class="header-link">Food</a>
        <a @click="setSearchTerm('Travel')" class="header-link">Travel</a>
        <a @click="setSearchTerm('War')" class="header-link">War</a>
      </div>

      <div class="search">
        <input v-model.trim="searchTerm" class="input-search" type="text" placeholder="Search...">
        <svg class="icon-search" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M795 963 526 695q-29 22.923-68.459 35.962Q418.082 744 372 744q-115.162 0-195.081-80Q97 584 97 471t80-193q80-80 193.5-80t193 80Q643 358 643 471.15q0 44.85-12.5 83.35Q618 593 593 627l270 268-68 68ZM371.353 650q74.897 0 126.272-52.25T549 471q0-74.5-51.522-126.75T371.353 292q-75.436 0-127.895 52.25Q191 396.5 191 471t52.311 126.75Q295.623 650 371.353 650Z"/></svg>
      </div>
    </div>
  </header>

  <main>
    <Suspense>
      <template #default>
        <ArticlesList
          :key="searchTerm"
          :searchTerm="searchTerm"
        />
      </template>

      <template #fallback>
        <div class="loading-container">
          <code>Loading...</code>
        </div>
      </template>
    </Suspense>
  </main>

  <footer>
    <p class="disclaimer">
    Oldspapers uses <a href="https://chroniclingamerica.loc.gov/about/api/" target="_blank" class="quote-link">The Library of Congress: Chronicling America API</a>, which provides access to information about historic newspapers and select digitized newspaper pages.
  </p>
  </footer>
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
    gap: 4px;
    height: 100px;
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

  .search-and-filter-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  .filter {
    display: flex;
    margin: 0;
    padding: 0;
    gap: 24px;
  }

  .search {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .icon-search {
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 10;
    margin-left: 8px;
  }

  .input-search {
    padding-left: 36px;
  }

  .header-link {
    color: #000000;
    transition: 0.3s;
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

  .loading-container {
    display: flex;
    align-items: center;
    height: 100px;
  }

  .disclaimer {
    font-style: italic;
  }
</style>
