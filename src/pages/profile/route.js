/* Layout */
import Layout from "@/layout";

export default {
  name: "profile",
  path: "/profile",
  component: Layout,
  redirect: "/profile/index",
  hidden: true,
  children: [
    {
      path: "index",
      component: () => import("@/pages/profile/index"),
      name: "Profile",
      meta: { title: "Profile", icon: "user", noCache: true }
    }
  ]
};
