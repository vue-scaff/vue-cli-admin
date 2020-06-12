export default ({ token }) => {
  const name = "user";

  const state = {
    token: token.get(),
    name: "",
    avatar: "",
    introduction: "",
    roles: []
  };

  const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  };

  const actions = {
    // Code by Joenix
    login({ commit }, userInfo) {
      const { username, password } = userInfo;

      return new Promise((resolve, reject) => {
        // Pretend to be logged in
        if (["admin", "editor"].includes(username) && password.length) {
          commit("SET_TOKEN", "welcome_to_use-vue_scaff_admin");
          token.set("welcome_to_use-vue_scaff_admin");

          resolve();
        }
      });
    },

    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then(response => {
            const { data } = response;

            if (!data) {
              reject("Verification failed, please Login again.");
            }

            const { roles, name, avatar, introduction } = data;

            // roles must be a non-empty array
            if (!roles || roles.length <= 0) {
              reject("getInfo: roles must be a non-null array!");
            }

            commit("SET_ROLES", roles);
            commit("SET_NAME", name);
            commit("SET_AVATAR", avatar);
            commit("SET_INTRODUCTION", introduction);
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // user logout
    logout({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", []);
            removeToken();
            resetRouter();

            // reset visited views and cached views
            // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
            dispatch("tagsView/delAllViews", null, { root: true });

            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // remove token
    resetToken({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        commit("SET_ROLES", []);
        removeToken();
        resolve();
      });
    },

    // dynamically modify permissions
    changeRoles({ commit, dispatch }, role) {
      return new Promise(async resolve => {
        const token = role + "-token";

        commit("SET_TOKEN", token);
        token.set(token);

        const { roles } = await dispatch("getInfo");

        resetRouter();

        // generate accessible routes map based on roles
        const accessRoutes = await dispatch(
          "permission/generateRoutes",
          roles,
          { root: true }
        );

        // dynamically add accessible routes
        router.addRoutes(accessRoutes);

        // reset visited views and cached views
        dispatch("tagsView/delAllViews", null, { root: true });

        resolve();
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
