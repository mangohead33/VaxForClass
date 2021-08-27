/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

class CovidInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cdcNews: 'filling',
    };
  }

  componentDidMount() {
    axios.get('/cdc')
      .then((data) => {
        this.setState({
          cdcNews: data,
        });
      })
      .catch((err) => {
        console.log('Error in handling request: ', err);
      });
  }

  render() {
    return (
      <div>Covid 19 CDC News</div>
    );
  }
}

export default CovidInfo;
