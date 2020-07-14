const cdn = {
  css: [
    `${process.env.VUE_APP_Path}/vendor/k-form-design/kFormDesignMini.css`
  ],
  js: [
    `${process.env.VUE_APP_Path}/vendor/k-form-design/kFormDesignMini.umd.min.js`
  ]
}

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#9C76E4',
          'layout-color': '#9C76E4'
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
