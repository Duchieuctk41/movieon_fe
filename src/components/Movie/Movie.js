import React from "react";
import "./Movie.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const Movie = () => {
  return (
    <div className="movie--item">
      <img src={PICTURE_DEFAULT} alt="" />
    </div>
  );
};

export default Movie;
