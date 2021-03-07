import { createStore } from "vuex";

export default createStore({
  state: {
    hasAlert: false,
    alert: null,
    alertTimer: null
  },
  mutations: {
    showAlert(state) {
      state.hasAlert = true;
    },
    hideAlert(state) {
      state.hasAlert = false;
    },
    setAlert(state, alert) {
      state.alert = alert;
    },
    setAlertTimer(state, alertTimer) {
      state.alertTimer = alertTimer;
    }
  },
  actions: {},
  modules: {}
});
