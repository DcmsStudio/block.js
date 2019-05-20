module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
    },
    example: {
      entry: 'src/example.js',
      template: 'public/index.html',
      filename: 'example.html',
      title: 'Index Page',
    },
  },
  configureWebpack: {
    // output: {
    //   libraryExport: 'default',
    // },
  },
}
