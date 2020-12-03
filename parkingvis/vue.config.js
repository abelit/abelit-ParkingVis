module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://58.42.231.98:5060",
        ws: true,
        changeOrigin: true,
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    },
    open: true
  },
};
