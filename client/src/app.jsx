/* eslint-disable react/no-unused-state */
import React from 'react';
import CovidInfo from './components/CovidInfo';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      value: 'fillin',
    };
  }

  render() {
    return (
      // <div className="leftbar">
      //  Have at Least two Links
      // </div>
      <div className="mainPage">
        <CovidInfo />
      </div>
    );
  }
}

export default App;
