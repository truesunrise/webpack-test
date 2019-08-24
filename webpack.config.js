// webpack은 여러가지 모듈을 모아서 하나로 만들어주는 모듈 번들러
// path: node 깔면 기본적으로 깔려있는 모듈
const path = require('path');
// html-webpack-plugin: index.html을 build 폴더에 복사하고 컴파일된 main.js 화일을 index.html에 자동으로 주입이 되도록 설정
const HtmlWebpackPlugin = require('html-webpack-plugin');

// __ : 현재 폴더

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]

}