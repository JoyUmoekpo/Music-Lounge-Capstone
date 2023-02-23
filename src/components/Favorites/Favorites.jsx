import React, { Fragment, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../store/authContext";

import styles from "./Favorites.module.css";

const Favorites = () => {
  const authCtx = useContext(AuthContext);
  const { search } = useParams();
  const [songs, setSongs] = useState([]);

  const url = "http://localhost:4040";

  useEffect(() => {
    axios.get(`${url}/search/${search}`).then((res) => {
      console.log(res.data.data);
      setSongs(res.data.data);
    });
  }, [search]);

  return (
    <Fragment>
      <div className={styles.title}>{authCtx.username}'s Favorite Songs</div>
      <div className={styles.favorites_container}>
        {songs.map((song) => (
          <div className={styles.favorite} key={song.id}>
            {song.title_short} | {song.artist.name} | {song.album.title}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Favorites;
