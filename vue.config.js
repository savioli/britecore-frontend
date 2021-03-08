module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3000
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "BriteCore FrontEnd";
      return args;
    });
  }
};
