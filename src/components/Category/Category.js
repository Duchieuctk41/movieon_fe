import React from "react";
import "./Category.scss";
import Movie from "components/Movie/Movie";

const Category = ({ item, title }) => {
  return (
    <div className="category--item">
      <div className="category--title">
        <h2>{title}</h2>
      </div>
      <div className="category--movie-item">
        {item.map((movie) => (
          <Movie movie={movie} key={movie} />
        ))}
      </div>
    </div>
  );
};

export default Category;
