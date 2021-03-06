import { createRouter, createWebHistory } from "vue-router";
import InsuranceApplication from "../views/InsuranceApplication.vue";

const routes = [
  {
    path: "/",
    name: "InsuranceApplication",
    component: InsuranceApplication
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
