import React from 'react';
import { poop1 as helper1, poop2 as helper2 } from './helpers'

class App extends React.Component {
  componentDidMount() {
    testFunc('soup', 4, { rockem: 'sockem robots' })
  }

  testFunc(string, num, obj) {
    console.log('string is', string)
    console.log('num is', num)
    console.log('obj is', obj)
  }
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <p>Testing</p>
        <span>life</span>
      </div>
    );
  }
}

export default App;
