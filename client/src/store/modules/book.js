const axios = require("axios");

const state = {
  books: [],
  err: null,
  session: {}
};
const getters = {
  getBooks: () => state.books,
  getSession: () => state.session
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
      const res = await axios.post(
        `http://localhost:5000/api/v1/checkout/${id}`
      );
      if (res && res.data.success) {
        commit("session_res", res.data.data);
      }
      return res;
    } catch (err) {
      commit("book_err", err.response.msg);
    }
  }
};
const mutations = {
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
