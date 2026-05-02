// webpack.config.js — randomize CSS class names per build
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // Pure hash — no semantic name visible in output
                localIdentName: '[hash:base64:8]',
                // Example output class: 'x7f2k9m3'
              }
            }
          }
        ]
      }
    ]
  }
}
