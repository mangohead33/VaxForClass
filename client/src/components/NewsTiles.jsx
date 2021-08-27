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
        <div>
          Article Name:
          <span> </span>
          {name}
        </div>
        <div>
          Description:
          <span> </span>
          {description}
        </div>
        Link to article:
        <span> </span>
        <a href={sourceUrl}>
          {sourceUrl}
        </a>
        <div>
          Date Published:
          <span> </span>
          {truncatedDate}
        </div>
      </div>
    );
  });
  const displayArticles = newsArticles.slice(0, show);
  return (
    <div className="newsbox">
      {displayArticles}
    </div>
  );
};
export default NewsTiles;
