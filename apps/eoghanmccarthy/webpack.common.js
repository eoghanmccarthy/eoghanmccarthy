const path = require('path')
const { merge } = require('webpack-merge')
const common = require('../webpack.common')

module.exports = merge(common, {
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets/'),
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components/'),
      features: path.resolve(__dirname, 'src/features/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      posts: path.resolve(__dirname, 'src/posts/'),
      services: path.resolve(__dirname, 'src/services/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
})
