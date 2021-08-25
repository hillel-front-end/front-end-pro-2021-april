import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: "1.0.0",
    products: [],
  },
  mutations: {
    changeVersion(state, payload) {
      state.version = payload;
    },
    changeProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const { data: products } = await axios.get("http://localhost:3005/google");
      console.log(products, "products");
      commit("changeProducts", products);
    },
  },
});
