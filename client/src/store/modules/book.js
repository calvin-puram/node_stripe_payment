const axios = require("axios");

const state = {
  books: [],
  err: null,
  session: {},
  loader: false
};
const getters = {
  getBooks: () => state.books,
  getSession: () => state.session,
  getLoader: () => state.loader
};
const actions = {
  async allBooks({ commit }) {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/books");
      if (res && res.data.success) {
        commit("book_res", res.data.data);
      }
      return res;
    } catch (err) {
      commit("book_err", err.response.msg);
    }
  },

  async session({ commit }, id) {
    try {
      commit("loading_res");
      const res = await axios.post(
        `http://localhost:5000/api/v1/checkout/${id}`
      );
      if (res && res.data.success) {
        commit("loading_req");
        commit("session_res", res.data.data);
      }
      return res;
    } catch (err) {
      commit("book_err", err.response.msg);
    }
  }
};
const mutations = {
  loading_req(state) {
    state.loader = true;
    state.err = null;
  },
  loading_res(state) {
    state.loader = false;
    state.err = null;
  },
  book_res(state, data) {
    state.books = data;
    state.err = null;
  },
  book_err(state, err) {
    state.err = err;
  },
  session_res(state, data) {
    state.session = data;
    state.err = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
