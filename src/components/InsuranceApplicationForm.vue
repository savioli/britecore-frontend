<template>
  <div class="h-auto mb-24">
    <page-header
      title="Insurance Application Form"
      description="Insurance Application Form for collecting data related to the risk"
    ></page-header>

    <alert
      v-if="hasAlert"
      :message="alert?.message"
      :description="alert?.description"
      :type="alert?.type"
      class="mb-4"
    ></alert>

    <template v-if="selectedRiskId == 0">
      <span class="flex-grow flex flex-col">
        <span class="text-sm font-medium text-gray-900">Search a Risk</span>
      </span>

      <div>
        <div class="flex flex-col mb-2">
          <div class="w-full flex flex-col items-center">
            <div class="w-full">
              <div class="flex flex-col items-center relative">
                <div class="w-full">
                  <div
                    class="my-2 p-1 bg-white flex border border-gray-200 rounded"
                  >
                    <div class="flex flex-auto flex-wrap"></div>
                    <input
                      v-model="search"
                      placeholder="Search by Risk Name"
                      class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    />
                  </div>
                </div>
                <div
                  class="bg-white top-full w-full lef-0 overflow-y-auto"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <span v-if="hasAlert" class="flex-grow flex flex-col mb-2">
          <span class="text-sm font-medium text-gray-900">Choose a Risk</span>
        </span>

        <div class="bg-white rounded-md -space-y-px">
          <div
            v-for="risk in filteredList"
            :key="risk.id"
            v-bind:value="risk.id"
          >
            <div
              @click="setSelectedRiskId(risk.id)"
              class="relative border border-gray-200 p-4 flex cursor-pointer hover:bg-gray-50"
            >
              <div class="ml-0 flex flex-col">
                <span class="text-sm font-medium text-gray-900">
                  {{ risk.name }}
                </span>

                <span class="block text-sm text-gray-500">
                  {{ risk.description }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="filteredList.length == 0">
            <div
              @click="setSelectedRiskId(risk.id)"
              class="relative border border-gray-200 p-4 flex cursor-pointer hover:bg-gray-50"
            >
              <div class="ml-0 flex flex-col">
                <span class="text-sm font-medium text-gray-900">
                  Nothing found
                </span>

                <span class="block text-sm text-gray-500">
                  No results were found for your search by:<span
                    class="ml-0.5 font-semibold"
                    >{{ search.trim() }}</span
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex">
        <div
          v-if="!hasAlert"
          class="md:flex md:items-center md:justify-between"
        >
          <risk-description
            class="mr-6"
            title="Selected Risk"
            :category="risk?.category?.name"
            :description="risk?.category?.description"
          ></risk-description>

          <div
            class="mt-1 sm:mb-5 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 mb-5"
            :class="{ '-ml-0': hasAlert }"
          >
            <div
              @click="resetRisk"
              class="cursor-pointer bg-gray-700 inline-flex items-cente leading-none text-gray-50 rounded-full p-2 shadow text-teal text-sm"
            >
              <span
                class="inline-flex px-4 p-0.5 text-sm font-medium tracking-wider"
              >
                Select Another Risk
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="py-0">
        <div class="md:flex md:items-center md:justify-between md:space-x-5">
          <div class="flex items-center space-x-5">
            <div>
              <div class="ml-1 text-2xl font-bold text-gray-900">
                {{ risk?.name }}
              </div>
              <span class="ml-1 text-sm font-medium text-gray-500">
                {{ risk?.description }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <span
      v-if="selectedRiskId === 0"
      class="ml-2 block text-sm text-gray-500 mt-4"
    >
      Showing
      <span class="mx-0.5 font-semibold">{{ filteredList.length }}</span> of
      <span class="mx-0.5 font-semibold">{{ risks.length }}</span> Risks.
    </span>

    <div v-for="field in risk.fields" :key="field.id">
      <div v-if="field.type === 'text'">
        <text-risk-field
          :name="field.name"
          :description="field.description"
          :required="field.required"
          error-message=""
          class="my-3"
        ></text-risk-field>
      </div>

      <div v-if="field.type === 'number'">
        <number-risk-field
          :name="field.name"
          :description="field.description"
          :required="field.required"
          error-message=""
          class="my-3"
        ></number-risk-field>
      </div>

      <div v-if="field.type === 'date'">
        <date-risk-field
          :name="field.name"
          :description="field.description"
          :required="field.required"
          error-message=""
          class="my-3"
        ></date-risk-field>
      </div>

      <div v-if="field.type === 'enum'">
        <enum-risk-field
          :name="field.name"
          :description="field.description"
          :required="field.required"
          :options="field.options"
          error-message=""
          class="my-3"
        ></enum-risk-field>
      </div>
    </div>

    <div
      v-if="selectedRiskId !== 0"
      class="md:flex md:items-center md:justify-between mt-8"
    >
      <div class="flex-1 min-w-0"></div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <div
          @click="resetRisk"
          type="button"
          class="inline-flex items-center bg-gray-400 leading-none text-white rounded-full py-4 px-8 shadow-md text-sm font-medium cursor-pointer"
        >
          Cancel
        </div>

        <div
          @click.prevent="notImplementedAlert"
          type="button"
          class="ml-4 px-6 inline-flex items-center bg-gray-600 leading-none text-white rounded-full py-4 px-8 shadow-md text-sm font-medium cursor-pointer"
        >
          Next
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import TextRiskField from "../components/TextRiskField.vue";
import NumberRiskField from "../components/NumberRiskField.vue";
import DateRiskField from "../components/DateRiskField.vue";
import EnumRiskField from "../components/EnumRiskField.vue";
import RiskDescription from "../components/RiskDescription.vue";
import RiskService from "../services/RiskService.js";
import Alert from "../components/Alert.vue";
import { mixin as VueClickAway } from "vue3-click-away";
import store from "../store/index";

export default {
  name: "InsuranceApplicationForm",
  mixins: [VueClickAway],
  components: {
    PageHeader,
    TextRiskField,
    NumberRiskField,
    DateRiskField,
    EnumRiskField,
    RiskDescription,
    Alert
  },
  data() {
    return {
      search: "",
      selectedRiskId: 0,
      risk: {},
      risks: []
    };
  },
  created() {
    this.getRisks();
  },
  methods: {
    setSelectedRiskId(id) {
      this.selectedRiskId = id;
      store.commit("hideAlert");
    },
    resetRisk() {
      this.selectedRiskId = 0;
      store.commit("hideAlert");
    },
    async getRisks() {
      RiskService.getRisks()
        .then(risks => {
          this.risks = risks;
        })
        .catch(error => {
          store.commit("showAlert");

          let alert = {
            message: "An error has occurred",
            description:
              "An error has occurred while trying to retrieve the list of risks",
            type: "danger",
            rawError: error
          };

          store.commit("setAlert", alert);
          store.commit("showAlert");

          if (store.state.alertTimer !== undefined) {
            clearTimeout(store.state.alertTimer);
          }

          let timer = setTimeout(() => store.commit("hideAlert"), 5000);
          store.commit("setAlertTimer", timer);
        });
    },
    async getRisk() {
      RiskService.getRiskById(this.selectedRiskId)
        .then(risk => {
          this.risk = risk;
        })
        .catch(error => {
          let alert = {
            message: "An error has occurred",
            description:
              "An error has occurred while trying to retrieve the selected risk",
            type: "danger",
            rawError: error
          };

          store.commit("setAlert", alert);
          store.commit("showAlert");
          setTimeout(() => {
            store.commit("hideAlert");
            this.resetRisk();
          }, 5000);
        });
    },
    notImplementedAlert() {
      let alert = {
        message: "This functionality was not implemented.",
        description:
          "Some items are being shown just for the layout composition.",
        type: "warning",
        rawError: ""
      };

      store.commit("setAlert", alert);
      store.commit("showAlert");

      if (store.state.alertTimer !== undefined) {
        clearTimeout(store.state.alertTimer);
      }

      let timer = setTimeout(() => store.commit("hideAlert"), 5000);
      store.commit("setAlertTimer", timer);
    }
  },
  watch: {
    selectedRiskId: function() {
      if (this.selectedRiskId == 0) {
        this.risk = {};
      } else {
        this.getRisk();
      }
    }
  },
  computed: {
    filteredList() {
      return this.risks.filter(risk => {
        return risk.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    hasAlert() {
      return store.state.hasAlert;
    },
    alert() {
      return store.state.alert;
    }
  }
};
</script>
