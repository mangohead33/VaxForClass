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
      max: 40,
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
    const { show, max } = this.state;
    if (show !== max) {
      const showMore = show + 10;
      this.setState({
        show: showMore,
      });
    }
  }

  render() {
    const { cdcNews, show, max } = this.state;
    return (
      <>
        <h1>Covid 19 CDC News</h1>
        <div className="newsbox">
          <NewsTiles news={cdcNews} show={show} />
          {
          max > show
          && <button onClick={this.onClick} type="button">Load More</button>
        }
        </div>
      </>

    );
  }
}

export default CovidInfo;
