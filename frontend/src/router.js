import Vue from "vue";
import Router from "vue-router";
import goTo from "vuetify/es5/services/goto";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // This is for the scroll top when click on any router link
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  // This is for the scroll top when click on any router link
  routes: [
    {
      name: "Login",
      path: "/",
      component: () => import('@/views/pages/Login')
    },
    {
      path: "/dashboard",
      component: () => import("@/layouts/full-layout/Layout"),
      children: [
        {
          name: "UserHistory",
          path: "/user/history",
          component: () => import("@/views/pages/History")

        },
        {
          name: "UserAssets",
          path: "/user/assets",
          component: () => import("@/views/pages/Assets")

        },
        {
          name: "RegisterUser",
          path: "/user/register",
          component: () => import("@/views/pages/RegisterUser")

        },
        {
          name: "UserManagment",
          path: "/user/users",
          component: () => import("@/views/pages/UserManagement")

        },
        {
          name: "TableDatatable",
          path: "/user/findings",
          component: () =>
            import("@/views/pages/Findings"),
        },
        {
          name: "Subnets",
          path: "/user/subnets",
          component: () =>
            import("@/views/pages/Subnets"),
        },
        {
          name: "StartScan",
          path: "/user/start-scan",
          component: () =>
            import("@/views/pages/StartScan"),
        },
        {
          name: "UseCase",
          path: "/user/use-case",
          component: () =>
            import("@/views/pages/UseCases"),
        },
        {
          name: "Critical Assets",
          path: "/user/critical-assets",
          component: () =>
            import("@/views/pages/CriticalAssets"),
        },
        {
          name: "Analysis Charts",
          path: "/user/charts",
          component: () => import("@/views/pages/ApexCharts"),
        },
        {
          name: "Flowchart",
          path: "/user/flowchart",
          component: () => import("@/views/pages/Flowcharts"),
        },
        {
          name: "Administration",
          path: "/user/administration",
          component: () => import("@/views/pages/Administration"),
        },
        {
          name: "Spray",
          path: "/user/spray",
          component: () => import("@/views/pages/Spray"),
        },
        {
          name: "Greybox",
          path: "/user/greybox",
          component: () => import("@/views/pages/Greybox"),
        },
      ],
    },
    {
      path: "/authentication",
      component: () => import("@/layouts/blank-layout/Blanklayout"),
      children: [
        {
          name: "BoxedLogin",
          path: "boxedlogin",
          component: () => import("@/views/authentication/BoxedLogin"),
        },
        {
          name: "FullLogin",
          path: "fulllogin",
          component: () => import("@/views/authentication/FullLogin"),
        },
        {
          name: "BoxedRegister",
          path: "boxedregister",
          component: () => import("@/views/authentication/BoxedRegister"),
        },
        {
          name: "FullRegister",
          path: "fullregister",
          component: () => import("@/views/authentication/FullRegister"),
        },
        {
          name: "Error",
          path: "error",
          component: () => import("@/views/authentication/Error"),
        },
      ],
    },
    {
      path: "*",
      component: () => import("@/views/authentication/Error"),
    },
  ],
});

import NProgress from "nprogress";
router.beforeResolve((to, from, next) => {
  var login = JSON.parse(localStorage.getItem('user'))
  if (!login && to.path != '/') {
    // Start the route progress bar.
    // NProgress.start(800);
    return next('/')
  }
  if (login && to.path == '/') {
    NProgress.start(800);
    return next('/user/charts')
  }
  else {
    return next();
  }

})
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});
export default router;
