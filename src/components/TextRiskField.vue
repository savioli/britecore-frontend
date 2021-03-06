<template>
  <div class="md:flex">
    <div class="md:w-full">
      <span class="flex-grow flex flex-col mb-1">
        <span class="text-sm font-medium text-gray-900"
          >{{ name }}
          <span
            v-if="required === true"
            class="inline-flex items-center text-xs font-extralight text-gray-900 ml-1"
          >
            Required
          </span>
        </span>
        <span class="text-sm text-gray-500">{{ description }}</span>
      </span>

      <input
        v-model="value"
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-none focus:border-gray-300 focus:shadow-sm"
        type="text"
        placeholder=""
      />

      <div class="ml-1 text-xs text-red-700">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextRiskField",
  props: {
    name: {
      type: String,
      default: "",
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>
