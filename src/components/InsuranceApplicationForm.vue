<template>
  <div class="mb-96">
    <page-header
      title="Insurance Application Form"
      description="Insurance Application Form for collecting data related to the risk"
    ></page-header>

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

        <span class="flex-grow flex flex-col mb-2">
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
                  {{ risk.risk_category.description }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex">
        <div class="md:flex md:items-center md:justify-between">
          <risk-description
            title="Selected Risk"
            :category="risk?.risk_category?.name"
            :description="risk?.risk_category?.description"
          ></risk-description>

          <div
            @click="resetRisk"
            type="button"
            class="ml-4 mt-1 inline-flex items-center bg-gray-600 leading-none text-white rounded-full py-3 px-5 shadow-md text-sm font-medium cursor-pointer"
          >
            Select Another
          </div>
        </div>
      </div>
    </template>

    <div v-for="field in risk.risk_fields" :key="field.id">
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

export default {
  name: "InsuranceApplicationForm",
  components: {
    PageHeader,
    TextRiskField,
    NumberRiskField,
    DateRiskField,
    EnumRiskField,
    RiskDescription
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
    },
    resetRisk() {
      this.selectedRiskId = 0;
    },
    async getRisks() {
      RiskService.getRisks().then(risks => {
        this.risks = risks;
      });
    },
    async getRisk() {
      RiskService.getRiskById(this.selectedRiskId).then(risk => {
        this.risk = risk;
      });
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
    }
  }
};
</script>
