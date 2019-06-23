const loaderUtils = require('loader-utils')
const get = require('lodash/get')
const { parse } = require('abstract-syntax-tree')
const removeJsx = contentStr => contentStr.replace(/<[a-z][\s\S]*>/g, null)

module.exports = function(content) {
  const options = loaderUtils.getOptions(this)
  const properTypes = get(options, ['configFile', this.resourcePath])
  const astTree = parse(removeJsx(content))

  return content
}
