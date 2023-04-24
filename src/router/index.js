import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticleDetailsView from "../views/ArticleDetailsView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/article/:id",
      name: "article",
      component: ArticleDetailsView,
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;