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
    movieApi.UpdateViewCount({ movie_id: movie.id, user_id: user.id });

    // call api to get list suggest movie
  };

  return (
    <div className="movie--item" onClick={handleClick}>
      <div className="movie--item_border">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUrQmfzV1NCNHrvqgbsQxSleVLvIMAelQZQ&usqp=CAU"
          alt=""
        />
        <span className="movie--item-name">{movie.name}</span>
      </div>
    </div>
  );
};

export default Movie;
