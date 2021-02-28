<template>
  <div class="py-6">
    <div
      class="md:flex md:items-center md:justify-between md:space-x-5 lg:px-6"
    >
      <div class="flex items-center space-x-5">
        <div>
          <div class="text-2xl font-bold text-gray-900">
            {{ title }}
          </div>
          <span class="text-sm font-medium text-gray-500">
            {{ description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>
