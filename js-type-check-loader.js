const loaderUtils = require('loader-utils')
const get = require('lodash/get')
const { parse, find } = require('abstract-syntax-tree')
const removeJsx = contentStr => contentStr.replace(/<[a-z][\s\S]*>/g, null)
const parseImports = require('./type-check-loader-helpers').parseImports

module.exports = function(content) {
  const options = loaderUtils.getOptions(this)
  const properTypes = get(options, ['configFile', this.resourcePath])
  const astTree = parse(removeJsx(content))

  const imports = find(astTree, 'ImportDeclaration')
  const parsedImports = parseImports(imports)

  return content
}
