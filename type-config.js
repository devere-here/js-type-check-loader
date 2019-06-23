const update = require('./type-check-loader-helpers.js')

const config = {
  './testApp/App.jsx': {
    testFunc: {
      string: 'String',
      num: 'Number',
      obj: 'Object',
      return: 'undefined'
    },
    render: {},
    componentDidMount: {
      return: 'undefined'
    },
  }
}

module.exports = update(config)