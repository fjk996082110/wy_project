const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
})
module.exports={
  lintOnSave:false,
  devServer: {
    open: true,
    proxy: {
      '/3001': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite:{
          "^/3001":""
        }
      },
      '/xhr/search': {
        target: 'https://m.you.163.com/xhr/search',
        changeOrigin: true,
        pathRewrite:{
          "^/xhr/search":""
        }
      },
      '/topic/v1': {
        target: 'https://m.you.163.com/topic/v1',
        changeOrigin: true,
        pathRewrite:{
          "^/topic/v1":""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}