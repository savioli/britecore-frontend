<template>
  <div
    v-bind="alertStyle"
    class="fixed z-50 right-6 top-5 bg-white border-l-4 p-3 shadow-sm"
    role="alert"
  >
    <div class="font-bold mb-1">{{ message }}</div>
    <div class="text-base font-normal text-gray-500">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    message: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      style: ""
    };
  },

  computed: {
    alertStyle: function() {
      if (this.type == "primary") {
        return {
          class: "border-blue-600 text-blue-600"
        };
      }

      if (this.type == "success") {
        return {
          class: "border-green-600 text-green-600"
        };
      }

      if (this.type == "danger") {
        return {
          class: "border-red-600 text-red-600"
        };
      }

      if (this.type == "warning") {
        return {
          class: "border-yellow-600 text-yellow-600"
        };
      }

      return {
        class: "border-gray-600 text-gray-600"
      };
    }
  }
};
</script>
