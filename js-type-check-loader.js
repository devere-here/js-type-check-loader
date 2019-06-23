const loaderUtils = require('loader-utils')
const get = require('lodash/get')

module.exports = function(content) {
  const options = loaderUtils.getOptions(this)
  const properTypes = get(options, ['configFile', this.resourcePath])

  console.log('properTypes', properTypes)

  return content
}
