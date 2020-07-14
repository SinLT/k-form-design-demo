const cdn = {
  css: [
    `${process.env.VUE_APP_Path}/vendor/k-form-design/k-form-design-mini.css`
  ],
  js: [
    `${process.env.VUE_APP_Path}/vendor/k-form-design/k-form-design-mini.umd.min.js`
  ]
}

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#13c2c2',
          'layout-color': '#9867f7'
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
  },
  configureWebpack: config => {
    config.externals = {
      'k-form-design-mini': 'kFormDesignMini'
    }
  }
}
