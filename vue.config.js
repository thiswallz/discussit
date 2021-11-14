module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("amplify-"),
        },
      }));
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  }
};