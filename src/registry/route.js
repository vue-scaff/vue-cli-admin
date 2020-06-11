/* Layout */
import Layout from "@/layout";

// Export
export default [
  { path: "*", redirect: "/404", hidden: true },
  {
    path: "/404",
    component: () => import("@/pages/error-page/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/pages/error-page/401"),
    hidden: true
  }
];
