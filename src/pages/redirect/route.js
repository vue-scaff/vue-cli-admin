/* Layout */
import Layout from "@/layout";

export default {
  name: "redirect",
  path: "/redirect",
  component: Layout,
  hidden: true,
  children: [
    {
      path: "/redirect/:path(.*)",
      component: () => import("@/pages/redirect")
    }
  ]
};
