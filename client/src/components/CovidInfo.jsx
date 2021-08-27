/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import NewsTiles from './NewsTiles';

class CovidInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cdcNews: [],
      show: 10,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    axios.get('/cdc')
      .then((data) => {
        this.setState({
          cdcNews: data.data,
        });
      })
      .catch((err) => {
        console.log('Error in handling request: ', err);
      });
  }

  onClick(e) {
    const { show } = this.state;
    if (show !== 30) {
      const showMore = show + 10;
      this.setState({
        show: showMore,
      });
    }
  }

  render() {
    const { cdcNews, show } = this.state;
    return (
      <div>
        <h1>Covid 19 CDC News</h1>
        <NewsTiles news={cdcNews} show={show} />
        <button onClick={this.onClick} type="button">Load More</button>
      </div>

    );
  }
}

export default CovidInfo;
