<template>
  <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex bg-gray-100">
    <!-- Main Area -->
    <section class="min-w-0 flex-1 flex flex-col overflow-hidden lg:order-last">
      <div class="overflow-hidden  lg:px-6">
        <!-- Main Content -->
        <insurance-application-form></insurance-application-form>
        <!-- End Main Content -->
      </div>
    </section>
    <!-- End Main Area -->

    <!-- SideBar -->
    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first">
      <div
        class="h-full relative flex flex-col w-56 border-r border-gray-200 bg-gray-100"
      >
        <side-bar></side-bar>
      </div>
    </aside>
    <!-- End SideBar -->
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import InsuranceApplicationForm from "../components/InsuranceApplicationForm";
export default {
  name: "InsuranceApplication",
  components: { InsuranceApplicationForm, SideBar }
};
</script>
