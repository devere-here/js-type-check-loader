const path = require('path')
const get = require('lodash/get')

const parseImports = imports => {
  const parsedImports = {}

  imports.forEach(statement => {
    const relativePath = get(statement, ['source', 'value'])
    parsedImports[relativePath] = []

    statement.specifiers.forEach(elem => {
      parsedImports[relativePath].push({
        localName: get(elem, ['local', 'name']),
        importedName: get(elem, ['imported', 'name'])
      })
    })
  })

  return parsedImports
}

const updateConfig = (configObj) => {
  const newConfigObj = {}
  const keys = Object.keys(configObj)

  keys.forEach(key => {
    const absoluteKey = path.resolve(__dirname, key)
    newConfigObj[absoluteKey] = configObj[key]
  })

  return newConfigObj
}

module.exports = {
  parseImports,
  updateConfig,
}
