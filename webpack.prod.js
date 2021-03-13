const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer") //包大小占比分析文件
  .BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require("compression-webpack-plugin"); //压缩插件,压缩包格式为 .gz
// webpack的生产环境配置，从基本配置中合并
// 合并是利用 webpack-merge 完成的： https://github.com/survivejs/webpack-merge

const prodConfig = {
  mode: "production",
  devtool: "none",
  optimization: { //优化项:分包策略
    splitChunks: {
      //分包配置
      chunks: "all",
      cacheGroups: { //缓存组,分包策略其它配置默认,这里只增加了css的优化(对公共样式的抽离)
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new WebpackBundleAnalyzer(), 
    new CompressionWebpackPlugin()],
};

module.exports = merge(baseConfig, prodConfig);
