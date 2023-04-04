import React from "react";
import "./Category.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";
import Movie from "components/Movie/Movie";

const Category = ({ item }) => {
  return (
    <div className="category--item">
      <div className="category--title">
        <h2>{item.name}</h2>
      </div>
      <div className="category--movie-item">
        {item.list_movie.map((movie) => (
          <Movie movie={movie} key={movie} />
        ))}
      </div>
    </div>
  );
};

export default Category;
