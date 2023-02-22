import React, { Fragment, useEffect, useState } from "react";
import styles from "./Recommendations.module.css";

const Recommendations = () => {
  const [endPoint, setEndpoint] = useState("");
  const [container, setContainer] = useState(null);
  const [finalPoint, setFinalPoint] = useState("");

  useEffect(() => {
    fetchData();
  }, [finalPoint]);

  const fetchData = async () => {

  };

  const onChangeHandler = (e) => {
    setEndpoint(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalPoint(endPoint);
  };

  return (
    <div className={styles.rec_container}>
      <div className={styles.title}>Recommendations</div>
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler} />
        <button type="submit">Submit</button>
      </form>

      {container?.map((item) => {
        return (
          <div key={item.recommended_song.id}>
            <img
              src={item.recommended_song.header_image_thumbnail_url}
              alt="Thumbnail"
            />
            <p>{item.recommended_song.full_title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recommendations;
