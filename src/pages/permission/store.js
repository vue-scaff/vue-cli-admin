export default ({ filterRoutes }) => {
  const name = "permission";

  const { asyncRoutes, constantRoutes } = {};

  const state = {
    routes: [],
    addRoutes: []
  };

  const mutations = {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes);
    }
  };

  const actions = {
    generateRoutes({ commit }, roles) {
      return new Promise(resolve => {
        let accessedRoutes;
        if (roles.includes("admin")) {
          accessedRoutes = asyncRoutes || [];
        } else {
          accessedRoutes = filterRoutes(asyncRoutes, roles);
        }
        commit("SET_ROUTES", accessedRoutes);
        resolve(accessedRoutes);
      });
    }
  };

  return {
    name,
    state,
    mutations,
    actions
  };
};
