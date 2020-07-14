module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 按需加载
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
    ]
  ]
}
