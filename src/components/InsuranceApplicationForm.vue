<template>
  <div>
    <page-header
      title="Insurance Application Form"
      description="Insurance Application Form for collecting data related to the risk"
    ></page-header>

    <template v-if="selectedRiskId == 0">
      <div>
        <span class="flex-grow flex flex-col">
          <span class="text-sm font-medium text-gray-900">Risk Type</span>
        </span>

        <div class="mt-1 relative">
          <select
            v-model="selectedRiskId"
            class="relative w-full bg-white border border-gray-300 rounded-md pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm mb-3"
          >
            <option value="0">Please select a Risk</option>
            <option v-for="risk in risks" :key="risk.id" v-bind:value="risk.id">
              {{ risk.name }}
            </option>
          </select>
        </div>
      </div>
    </template>
    <template v-else>
      <div class=" flex">
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
      selectedRiskId: 0,
      risk: {},
      risks: []
    };
  },
  created() {
    this.getRisks();
  },
  methods: {
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
  }
};
</script>
