<template>
  <page-header
    title="Insurance Application Form"
    description="Insurance Application Form for collecting data related to the risk"
  ></page-header>

  <div v-for="riskField in riskFields" :key="riskField.id">
    <template v-if="riskField.risk_field_type.code === 'text'">
      <text-risk-field
        :name="riskField.name"
        :description="riskField.description"
        error-message=""
      ></text-risk-field>
    </template>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue";
import TextRiskField from "../components/TextRiskField.vue";
import RiskService from "../services/RiskService.js";

export default {
  name: "InsuranceApplicationForm",
  components: { PageHeader, TextRiskField },
  data() {
    return {
      riskId: 5,
      riskFields: []
    };
  },
  created() {
    this.getRisk();
  },
  methods: {
    async getRisk() {
      RiskService.getRiskById(this.riskId).then(risk => {
        this.riskFields = risk.risk_fields;
      });
    }
  }
};
</script>
