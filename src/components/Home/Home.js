import React, { useEffect } from "react";
import "../Home/Home.scss";
import SLIDE_DEFAULT from "assets/img/hero.jpg";
import { movieApi } from "actions";
import mockListCategory from "mocks/category.json";
import Category from "components/Category/Category";

import { useDispatch, useSelector } from "react-redux";
import { actionUpdateMovie } from "redux/movie/movieSlice";
import { selectCurrentMovie } from "redux/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const listMovie = useSelector(selectCurrentMovie);

  const getListMovie = async () => {
    const data = await movieApi.getListMovie({ page_size: 10 });
    // update to redux
    dispatch(actionUpdateMovie(data));
  };

  useEffect(() => {
    getListMovie();
  }, []);

  return (
    <div>
      <div className="home_content--background">
        <img src={SLIDE_DEFAULT} />
      </div>
      <div className="home_container">
        <div className="home_content">
          <Category item={listMovie.data} title="Phổ biến trên Netflix" />
          {/**Mock data: Render list movie */}
          {mockListCategory.data.map((item) => (
            <Category
              key={item.id}
              item={mockListCategory.data}
              title={mockListCategory.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
