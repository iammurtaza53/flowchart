module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "/demos/vuejs-admin-templates/adminpro-vuetify-admin/dark/",
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  css: {
    extract: true,
  },
};
