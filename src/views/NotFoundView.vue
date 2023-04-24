<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();
  const routeToHome = () => {
    router.push("/");
  };
</script>


<template>
  <header>
    <div class="logo-container">
      <h1 @click="routeToHome" class="logo">Oldspapers</h1>
    </div>
  </header>

  <main>
    <div class="not-found-container">
      <h2>The page you are looking for cannot be found</h2>
    </div>
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
    gap: 8px;
    height: 80px;
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
    cursor: pointer;
  }

  .not-found-container {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-block: 192px;
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