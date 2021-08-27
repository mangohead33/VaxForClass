/* eslint-disable react/no-unused-state */
import React from 'react';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      value: 'fillin',
    };
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
