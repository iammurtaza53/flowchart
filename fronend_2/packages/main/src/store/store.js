import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    scanID: null,
    baseUrl: "http://localhost:8000/",
    displayMessage: null,
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "#1d2228", //Change Sidebar Color || 'white', | "#2b2b2b" | "rgb(44, 59, 164)" | "rgb(96, 44, 164)" | "rgb(151, 210, 219)" | "rgb(77, 86, 100)"
    SidebarBg: "",
    navbarColor: "blue",
    setHorizontalLayout: false, // Horizontal layout
  },
  mutations: {
    set_scanid(state, scan_id) {
      state.scanID = scan_id
    },
    display_message(state) {
      state.displayMessage = `SCAN ID: ${state.scanID}  `
    },
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },
  },
  actions: {
    set_scanid({ commit }, scan_id) {
      commit('set_scanid', scan_id)
    },

    display_message({ commit }) {
      commit('display_message')
    }
  },
  getters: {
    get_scanid(state) {
      return state.scanID
    },

  },
});
