export const state = {
  theme: 'light'
}

export const mutations = {
  CHANGE_THEME(state, theme) {
    state.theme = theme;
  },
}

export const actions = {
  changeTheme({ commit }, theme) {
    return commit('CHANGE_THEME', theme);
  },
}
