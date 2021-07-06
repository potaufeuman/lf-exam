const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        // .ts で終わるファイルに対して、ts-loader を実行する
        test: /\.tsx?$/,
        use: 'ts-loader',
        // node_modules 配下のファイル（＝外部ライブラリ）は特にビルドする必要がないので除外
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // 外部ファイルやライブラリ（node_modules 以下のファイル）を使うファイルの拡張子なので .tsx と .js の両方を指定
    extensions: ['.js','.ts','.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },
  devServer: {
    // hot: ファイルを変更すると自動的にブラウザに反映させるフラグ
    // open: 起動時にブラウザで開くフラグ
    publicPath: '/dist/',
    hot: true,
    open: true,
  }
}