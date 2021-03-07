<template>
  <div class="md:flex">
    <div class="md:w-full">
      <span class="flex-grow flex flex-col mb-1">
        <span class="ml-1 text-sm font-medium text-gray-900"
          >{{ name }}
          <span
            v-if="required === true"
            class="inline-flex items-center text-xs font-extralight text-gray-900 ml-1"
          >
            Required
          </span>
        </span>
        <span class="ml-1 text-sm text-gray-500">{{ description }}</span>
      </span>

      <div class="bg-white rounded-md -space-y-px">
        <div v-for="option in options" :key="option.id">
          <div class="relative border border-gray-200 p-4 flex">
            <div class="flex items-center">
              <input
                :id="'option_' + option.id"
                v-model="value"
                :value="option.id"
                :name="'option_' + option.id"
                type="radio"
                :checked="option.checked"
                class="focus:ring-gray-500 h-4 w-4 text-black cursor-pointer border-gray-300"
              />
            </div>
            <label
              :for="'option_' + option.id"
              class="ml-3 flex flex-col cursor-pointer"
            >
              <span class="text-sm font-medium text-gray-900">
                {{ option.name }}
              </span>

              <span class="block text-sm text-gray-500">
                {{ option.description }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div class="ml-1 text-xs text-red-700">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnumRiskField",
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
    },
    options: {
      type: [Array],
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>
