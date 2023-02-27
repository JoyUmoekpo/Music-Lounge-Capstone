import React, { useState } from "react";
import styles from "./News.module.css";
import axios from "axios";
import NewsCard from "./NewsCard";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articles, setArticles] = useState([]);

  const baseUrl = "http://localhost:4040";

  const getMusicNews = () => {
    axios
      .get(baseUrl + "/everything/" + searchTerm)
      .then((res) => {
        console.log(res.data.articles);
        setArticles(res.data.articles);
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
      <div className={styles.title}>Search for Music News</div>
      <div className={styles.news_search_container}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for articles here"
          className={styles.news_search}
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
