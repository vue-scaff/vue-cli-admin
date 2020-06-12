import { mapState } from "vuex";

export default {
  computed: mapState({
    global: state => state.global,
    dashboard: state => state.dashboard
  })
};
