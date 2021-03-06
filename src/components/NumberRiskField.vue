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
        @keypress="onlyNumber"
        v-model="value"
        class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 focus:outline-none focus:border-gray-300 focus:shadow-sm"
        placeholder=""
        type="text"
      />
      <div class="ml-1 text-xs text-red-700">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberRiskField",
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
  methods: {
    onKeyPress(e) {
      if (
        (e.keyCode != 8 || e.keyCode == 32) &&
        (e.keyCode < 48 || e.keyCode > 57)
      ) {
        return false;
      }
      // if( (e.keyCode < 47 || e.keyCode > 58) && (e.keyCode < 96 || e.keyCode > 105) ) {
      //   this.value = this.value.substring(0,this.value.length-1)

      // }
      //   e.stopPropagation()

      // // return false
      // console.log("a",this.value)
      // console.log(e.keyCode)
      // console.log("b",this.value)
    },
    onlyNumber(e) {
      let keyCode = e.keyCode ? e.keyCode : e.which;

      if (
        (keyCode < 48 || keyCode > 57) &&
        (keyCode !== 46 || this.value.indexOf(".") != -1)
      ) {
        // 46 is dot
        e.preventDefault();
      }

      //  // restrict to 2 decimal places
      if (this.value.indexOf(".") > -1 && this.value.split(".")[1].length > 1) {
        e.preventDefault();
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
