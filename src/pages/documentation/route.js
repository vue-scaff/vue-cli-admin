/* Layout */
import Layout from "@/layout";

export default {
  name: "documentation",
  path: "/documentation",
  component: Layout,
  children: [
    {
      path: "index",
      component: () => import("@/pages/documentation/index"),
      name: "Documentation",
      meta: { title: "Documentation", icon: "documentation", affix: true }
    }
  ]
};
