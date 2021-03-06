<template>
  <div>
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
          @focus="displayDatePicker"
          @click="displayDatePicker"
          v-model="date"
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-none focus:border-gray-300 focus:shadow-sm"
          type="text"
          placeholder=""
          :readonly="true"
        />

        <div class="ml-1 text-xs text-red-700">{{ errorMessage }}</div>
      </div>
    </div>

    <DatePicker
      v-click-away="onClickAway"
      v-if="visible"
      class="relative z-50 mt-2"
      :model-config="modelConfig"
      v-model="date"
    />
  </div>
</template>
<script>
import { DatePicker } from "v-calendar";
import { mixin as VueClickAway } from "vue3-click-away";

export default {
  mixins: [VueClickAway],
  name: "DateRiskField",
  components: {
    DatePicker
  },
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
      default: "",
      inputValue: ""
    }
  },
  methods: {
    displayDatePicker(e) {
      this.show(e);
    },
    show(e) {
      e.stopPropagation();
      this.visible = true;
    },
    hide(e) {
      e.stopPropagation();
      this.visible = false;
    },
    onClickAway(e) {
      this.hide(e);
    }
  },
  data() {
    return {
      value: "",
      date: "",
      visible: false,
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD"
      }
    };
  }
};
</script>
