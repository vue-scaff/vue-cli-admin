/* Layout */
import Layout from "@/layout";

export default {
  name: "guide",
  path: "/guide",
  component: Layout,
  redirect: "/guide/index",
  children: [
    {
      path: "index",
      component: () => import("@/pages/guide/index"),
      name: "Guide",
      meta: { title: "Guide", icon: "guide", noCache: true }
    }
  ]
};
