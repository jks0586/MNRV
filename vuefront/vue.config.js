const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: process.env.NODE_ENV === 'production'? '/': '/',
  transpileDependencies: true,
  // devServer: {
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   },
  //   port: 3002
  // }
})
