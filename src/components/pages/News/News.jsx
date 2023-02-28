import axios from "axios";
import React, { useState } from "react";

import NewsCard from "./NewsCard";
import styles from "./News.module.css";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  const baseUrl = "http://localhost:4040";

  const getMusicNews = () => {
    axios
      .get(baseUrl + "/everything/" + searchTerm)
      .then((res) => {
        setArticles(res.data.articles);
        setSearchTerm("")
      })
      .catch((err) => {
        console.log("Error in getMusicNews");
      });
  };

  const mappedArticles = articles.map((article) => {
    return <NewsCard articles={article} />;
  });

  return (
    <div className={styles.news_position}>
      <h1 className={styles.title}>Search for Artist News</h1>
      <div className={styles.news_search_container}>
      {/* <BiSearch className={styles.search_icon} color="#fff" /> */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for articles here"
          className={`${styles.news_search} ${styles.centered}`}
        />
        <button onClick={getMusicNews} className={styles.news_button}>
          Search
        </button>
      </div>
      <div className={styles.news_container}>
        {mappedArticles}
      </div>
    </div>
  );
};

export default News;
