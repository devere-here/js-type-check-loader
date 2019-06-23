import React from 'react';

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
      <div>Hello World!</div>
    );
  }
}

export default App;
