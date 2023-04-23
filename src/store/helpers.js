import { mapState, mapActions } from "vuex";


export const layoutComputed = {
  ...mapState("layout", {
    theme: (state) => state.theme,
  }),
};

export const layoutMethods = mapActions("layout", [
  "changeTheme",
]);
