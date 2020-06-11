export default () => {
  const name = "errorLog";

  const state = {
    logs: []
  };

  const mutations = {
    ADD_ERROR_LOG: (state, log) => {
      state.logs.push(log);
    },
    CLEAR_ERROR_LOG: state => {
      state.logs.splice(0);
    }
  };

  const actions = {
    addErrorLog({ commit }, log) {
      commit("ADD_ERROR_LOG", log);
    },
    clearErrorLog({ commit }) {
      commit("CLEAR_ERROR_LOG");
    }
  };

  return {
    name,
    state,
    mutations,
    actions
  };
};
