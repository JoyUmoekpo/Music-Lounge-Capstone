import React from "react";

import styles from "./Lyrics.module.css";

const LyricCard = ({ lyrics }) => {
  const thumbnail = lyrics.thumbnail.genius;
  const title = lyrics.title;
  const author = lyrics.author;
  const lyricText = lyrics.lyrics;

  return (
    <div className={styles.lyrics_card}>
      <div className={styles.card_header}>
        <img src={thumbnail} alt="thumbnail" className={styles.thumbnail} />
        <div className={styles.title_author}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.author}>{author}</h3>
        </div>
      </div>
      <div className={styles.card_body}>
        <p className={styles.lyrics_text}>{lyricText}</p>
      </div>
    </div>
  );
};

export default LyricCard;