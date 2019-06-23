const path = require('path')

module.exports = function(configObj){
  const newConfigObj = {}
  const keys = Object.keys(configObj)

  keys.forEach(key => {
    const absoluteKey = path.resolve(__dirname, key)
    newConfigObj[absoluteKey] = configObj[key]
  })

  return newConfigObj
}
