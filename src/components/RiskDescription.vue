<template>
  <div>
    <span class="flex-grow flex flex-col mb-2">
      <span class="ml-1 text-sm font-medium text-gray-900">{{ title }}</span>
    </span>

    <div class="ml-0.5 mb-6">
      <div
        class="inline-flex items-center bg-white leading-none text-gray-600 rounded-full p-2 shadow text-teal text-sm"
      >
        <span
          class="inline-flex bg-gray-600 text-white rounded-full h-6 px-3 justify-center items-center text-sm font-normal"
          >{{ category }}</span
        >
        <span
          class="ml-1 inline-flex px-2 text-sm font-normal hidden sm:visible md:visible lg:visible xl:visible 2xl:visible mb:visible sm:inline-flex md:inline-flex lg:inline-flex xl:inline-flex 2xl:inline-flex mb:inline-flex"
          >{{ description }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RiskDescription",
  props: {
    title: {
      type: String,
      default: "Application For"
    },
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    }
  }
};
</script>
