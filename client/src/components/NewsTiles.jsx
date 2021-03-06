/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const NewsTiles = ({ news, show }) => {
  const newsArticles = news.map((article) => {
    const {
      id, name, description, sourceUrl, datePublished, tags,
    } = article;
    const truncatedDate = datePublished.slice(0, 10);
    return (
      <div className="cdcArticle" key={id}>
        <div className="firstLine">
          <div className="articleName">
            Article Name:
            <span> </span>
            {name}
          </div>
          <div className="articleDate">
            Date Published:
            <span> </span>
            {truncatedDate}
          </div>
        </div>
        <div className="description">
          Description:
          <span> </span>
          {description}
        </div>
        <div className="urlLink">
          Link to article:
          <span> </span>
          <a href={sourceUrl}>
            {sourceUrl}
          </a>
          <div className="newline"> ❤ </div>
        </div>
      </div>
    );
  });
  const displayArticles = newsArticles.slice(0, show);
  return (
    <>
      {displayArticles}
    </>
  );
};
export default NewsTiles;
