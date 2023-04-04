import React from "react";
import "./Movie.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // redirect to movie detail page with path /info/:id
    navigate("/info/" + movie.id);
  };

  return (
    <div className="movie--item" onClick={handleClick}>
      <img src={PICTURE_DEFAULT} alt="" />
      <span className="movie--item-name">{movie.name}</span>
    </div>
  );
};

export default Movie;
