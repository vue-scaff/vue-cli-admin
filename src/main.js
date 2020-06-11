// Service Worker
import "./registerServiceWorker";

// Element UI
import Element from "element-ui";
import "@/sheet/element-theme.scss";
import en from "element-ui/lib/locale/lang/en";

// Export Useage
export default (
  // App
  App,

  // Subscript Face
  { Vue, subscribe },

  // Runner
  next
) => {
  subscribe("util", config => {
    console.log("UTIL MODULE : ", config);
  });

  subscribe("route", config => {
    console.log("ROUTE CONFIGURE : ", config);

    config.mode = "history";
    config.baseRoute = process.env.publicPath;
  });

  subscribe("store", (config, model) => {
    config.getters = {
      sidebar: state => state.app.sidebar,
      size: state => state.app.size,
      device: state => state.app.device,
      visitedViews: state => state.tagsView.visitedViews,
      cachedViews: state => state.tagsView.cachedViews,
      token: state => state.user.token,
      avatar: state => state.user.avatar,
      name: state => state.user.name,
      introduction: state => state.user.introduction,
      roles: state => state.user.roles,
      permission_routes: state => state.permission.routes,
      errorLogs: state => state.errorLog.logs
    };

    console.log("STORE !!! : ", config);
  });

  subscribe("component", (config, model) => {
    config.prefix = "x";
  });

  subscribe("request", ({ data, headers }) => {
    data.token = "wechat: kazami500";
  });

  subscribe("response", config => {
    console.log("HTTP Response : ", config);
  });

  subscribe("custom", config => {
    return {
      author: "joenix"
    };
  });

  // Use Element-UI
  Vue.use(Element, {
    size: `medium`,
    locale: en
  });

  // Runner
  return next(App);
};
