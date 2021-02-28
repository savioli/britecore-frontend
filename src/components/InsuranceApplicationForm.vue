<template>
  <page-header
    title="Insurance Application Form"
    description="Insurance Application Form for collecting data related to the risk"
  ></page-header>

  <div>
    <span class="flex-grow flex flex-col">
      <span class="text-sm font-medium text-gray-900">Risk Type</span>
    </span>

    <div class="mt-1 relative">
      <select
        v-model="selectedRiskId"
        class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="0">Please select a Risk</option>
        <template v-for="risk in risks" :key="risk.id">
          <option :value="risk.id">{{ risk.name }}</option>
        </template>
      </select>
    </div>
  </div>

  <div v-for="riskField in risk.risk_fields" :key="riskField.id">
    <template v-if="riskField.risk_field_type.code === 'text'">
      <text-risk-field
        :name="riskField.name"
        :description="riskField.description"
        error-message=""
        class="my-3"
      ></text-risk-field>
    </template>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import TextRiskField from "../components/TextRiskField.vue";
import RiskService from "../services/RiskService.js";

const NOT_SELECTED = 0;

export default {
  NOT_SELECTED,
  name: "InsuranceApplicationForm",
  components: { PageHeader, TextRiskField },
  data() {
    return {
      selectedRiskId: NOT_SELECTED,
      risk: {},
      risks: []
    };
  },
  created() {
    this.getRisks();
  },
  methods: {
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
      if (this.selectedRiskId == NOT_SELECTED) {
        this.risk = {};
      } else {
        this.getRisk();
      }
    }
  }
};
</script>
