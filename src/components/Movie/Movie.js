import React from "react";
import "./Movie.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";
import { useNavigate } from "react-router-dom";
import { movieApi } from "actions";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSlice";
import { useSearchParams } from "react-router-dom";

const Movie = ({ movie }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const handleClick = () => {
    // redirect to movie detail page with path /info/:id
    setSearchParams({ m: movie.id });
    // navigate("/info/" + movie.id);

    // call api to plus view count to summary best movie
    // call api to update view_movie table (or rating table) to update recommendation system
    movieApi.UpdateViewCount({ movieId: movie.id, userId: user.id });

    // call api to get list suggest movie
  };

  return (
    <div className="movie--item" onClick={handleClick}>
      <img src={PICTURE_DEFAULT} alt="" />
      <span className="movie--item-name">{movie.name}</span>
    </div>
  );
};

export default Movie;
