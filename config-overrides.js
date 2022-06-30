const {
  override,
  addWebpackAlias,
  addPostcssPlugins
} = require('customize-cra');
const path = require('path');

const px2viewport = require('postcss-px-to-viewport')



const addPostcssPlugin = addPostcssPlugins([
  // 移动端布局 viewport 适配方案
  px2viewport({
    // 视口宽度：可以设置为设计稿的宽度
    viewportWidth: 375,
    // 白名单：不需对其中的 px 单位转成 vw 的样式类类名
    // selectorBlackList: ['.ignore', '.hairlines']
  })
])


module.exports = override(
  // 路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@c': path.resolve(__dirname, 'src/components'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@styles': path.resolve(__dirname, 'src/assets/style'),
  }),
  // 移动端单位配置
  addPostcssPlugin

)