import axios from "axios";

export default {
  async getRiskById(riskId) {
    let response = await axios.get(
      process.env.VUE_APP_API_URL + "risks/" + riskId
    );

    return response.data;
  }
};
