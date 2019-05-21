module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'block.js',
    },
    example: {
      entry: 'src/example.js',
      template: 'public/index.html',
      filename: 'example.html',
      title: 'Example of block.js',
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
}
