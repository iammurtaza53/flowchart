
export default [
  {
    header: "Flowchart",
  },
  {
    title: "Charts",
    icon: "mdi-chart-pie",
    to: "/user/charts",
  },
  {
    title: "Flowchart",
    icon: "mdi-sitemap",
    to: "/user/flowchart",
  },

  {
    title: "Findings",
    icon: "mdi-table",
    to: "/user/findings",
  },
  {
    title: "History",
    icon: "mdi-weather-cloudy-clock",
    to: "/user/history"
  },
  {
    title: "Assets",
    icon: "mdi-file-table",
    to: "/user/assets"

  },
  {
    title: " New Scan",
    icon: "mdi-magnify",
    to: "/user/start-scan",
  },
  {
    title: " New Use Case",
    icon: "mdi-file-code",
    to: "/user/use-case",
  },
  {
    title: "Critical Assets",
    icon: "mdi-file-cog",
    to: "/user/critical-assets",
  },
  {
    title: "Administration",
    icon: "mdi-arrange-bring-forward",
    to: "/user/administration",
  },
  {
    title: "Spray",
    icon: "mdi-airplane-landing",
    to: "/user/spray",
  },
  {
    title: "Greybox",
    icon: "mdi-access-point-network",
    to: "/user/greybox",
  },
  {
    title: "Activation",
    icon: "mdi-access-point-network",
    to: "/user/activate",
  },
  {
    group: '/user',
    model: false,
    icon: "mdi-account-cog",
    title: 'User Management',

    children: [
      {
        title: "Users",
        icon: "mdi-account",
        to: "users",
      },
      {
        title: "Register",
        icon: "mdi-account-plus",
        to: "register"
      },
    ]
  }
];
