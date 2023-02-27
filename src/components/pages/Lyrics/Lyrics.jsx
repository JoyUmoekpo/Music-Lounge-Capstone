import React, { Fragment, useState } from "react";
import LyricCard from './LyricCard'
import axios from "axios";

import styles from "./Lyrics.module.css";

const Lyrics = () => {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState([]);

  const lyricSearch = (e) => {
    e.preventDefault();

    const options = {
      method: "GET",
      url: "https://powerlyrics.p.rapidapi.com/getlyricsfromtitleandartist",
      params: { title: `${song}`, artist: `${artist}` },
      headers: {
        "X-RapidAPI-Key": "41fcae3ee6mshf0e229e9e01ab0bp166308jsne9f57a0ecfda",
        "X-RapidAPI-Host": "powerlyrics.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setLyrics(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const mappedLyrics = Object.keys(lyrics).map((key) => {
    return <LyricCard lyrics={lyrics[key]} key={key} />;
  });

  return (
    <Fragment>
      <div className={styles.lyrics_position}>
        <div className={styles.title}>Search for Lyrics</div>
        <div className={styles.lyric_form}>
          <form onSubmit={lyricSearch}>
            <input
              type="text"
              value={song}
              onChange={(e) => setSong(e.target.value)}
              placeholder="Enter a song title"
              className={styles.lyric_input}
            />
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Enter the artist's name"
              className={styles.lyric_input}
            />
            <button className={styles.lyric_button}>Submit</button>
          </form>
        </div>
        {mappedLyrics}
      </div>
    </Fragment>
  );
};

export default Lyrics;
