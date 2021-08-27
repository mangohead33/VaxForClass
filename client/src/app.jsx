/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Banner from './components/Banner';
import CovidInfo from './components/CovidInfo';
import Teachers from './components/Teachers';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      display: 'covidInfo',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({
      display: value,
    });
  }

  render() {
    const { display } = this.state;
    return (
      <>
        <Banner />
        <ul>
          <li onClick={() => { this.onClick('covidInfo'); }}>CDC Covid News</li>
          <li onClick={() => { this.onClick('teachersPortal'); }}>Teachers Portal</li>
        </ul>
        <div className="mainPage">
          {display === 'covidInfo'
        && <CovidInfo />}

          {display === 'teachersPortal'
        && <Teachers />}
        </div>
      </>
    );
  }
}

export default App;
