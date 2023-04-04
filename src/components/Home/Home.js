import React from "react";
import "../Home/Home.scss";
import SLIDE_DEFAULT from "assets/img/slide_default.jpg";
import { movieApi } from "actions";
import mockListCategory from "mocks/category.json";
import Category from "components/Category/Category";

const Home = () => {
  const getListMovie = async () => {
    const data = await movieApi.getListMovie();
    console.log(data);
  };

  return (
    <div>
      <div className="home_content--background">
        <img src={SLIDE_DEFAULT} />
      </div>
      <div className="home_container">
        <div className="home_content">
          {mockListCategory.list_category.map((item) => (
            <Category key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
