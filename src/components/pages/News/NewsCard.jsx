import React from "react";
import styles from "./News.module.css";

const NewsCard = ({ articles }) => {
  return (
    <div className={styles.news_card}>
      <li>
        <img
          src={articles.urlToImage}
          alt="Article"
          className={styles.news_image}
        />
      <li className={styles.news_text}> <a href={articles.url} target="_blank" rel="noreferrer">Click to Read More</a> </li>
      </li>
      <li className={styles.news_text}>Author: <br /> {articles.author}</li>
      <li className={styles.news_text}>Title: <br />{articles.title}</li>
    </div>
  );
};

export default NewsCard;