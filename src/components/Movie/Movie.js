import React from "react";
import "../Movie/Movie.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const Movie = () => {
  return (
    <div className="movie_container">
      <div className="movie_content">
        <div className="movie_content--title">
          <h2>Phim bom tấn hành động & phiêu lưu Âu - Mỹ</h2>
        </div>
        <div className="movie_content--item">
          <ul>
            <li>
              <img src={PICTURE_DEFAULT} alt="" />
            </li>
            <li>
              <img src={PICTURE_DEFAULT} alt="" />
            </li>
            <li>
              <img src={PICTURE_DEFAULT} alt="" />
            </li>
            <li>
              <img src={PICTURE_DEFAULT} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Movie;
