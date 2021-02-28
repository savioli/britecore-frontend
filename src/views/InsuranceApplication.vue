<template>
  <main class="min-w-0 flex-1 border-t border-gray-200 lg:flex">
    <!-- Main Area -->
    <section
      class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
    >
      <div class="overflow-hidden bg-gray-100">
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
        <!-- SideBar Content -->
        <!-- End SideBar Content -->
      </div>
    </aside>
    <!-- End SideBar -->
  </main>
</template>

<script>
import InsuranceApplicationForm from "../components/InsuranceApplicationForm";
export default {
  name: "InsuranceApplication",
  components: { InsuranceApplicationForm }
};
</script>
