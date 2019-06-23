const loaderUtils = require('loader-utils')

module.exports = function(fileContent) {
  const options = loaderUtils.getOptions(this)

  console.log('options are', options)
  return fileContent
}
