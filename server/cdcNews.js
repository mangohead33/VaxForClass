const axios = require('axios');

const baseURL = 'https://tools.cdc.gov/api/v2/resources/media?nameContains=Covid-19';

module.exports = {
  getNews: () => {
    const options = {
      url: baseURL,
      params: {
        max: 50,
      },
    };
    return axios(options)
      .then((response) => response.data.results)
      .catch((err) => {
        throw err;
      });
  },
};
