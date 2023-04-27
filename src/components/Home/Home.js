import React, { useEffect, useState } from "react";
import "../Home/Home.scss";
import { movieApi } from "actions";
import mockListCategory from "mocks/category.json";
import Category from "components/Category/Category";

import { useDispatch, useSelector } from "react-redux";
import { actionUpdateMovie, selectCurrentMovie } from "redux/movie/movieSlice";
import { useSearchParams } from "react-router-dom";
import { selectCurrentUser } from "redux/user/userSlice";

import Info from "components/Info/Info";

const Home = () => {
  const dispatch = useDispatch();
  const listMovie = useSelector(selectCurrentMovie);
  const [listMovieContinue, setListMovieContinue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const user = useSelector(selectCurrentUser);

  // get use Params query
  const query = searchParams.get("m");

  const getListMovie = async () => {
    const data = await movieApi.getListMovie({ page_size: 10 });
    dispatch(actionUpdateMovie(data));
  };

  const getListMovieContinue = async () => {
    const data = await movieApi.getMovieContinue({ user_id: user.id });
    console.log(data);
    setListMovieContinue(data);
  };

  useEffect(() => {
    getListMovie();
    getListMovieContinue();
  }, []);

  return (
    <div>
      <div className="home_content--background">
        <div className="home_content__bg"></div>
        {/* <img src={SLIDE_DEFAULT} /> */}
        {query ? <Info id={query} /> : null}
        <div className="home_container">
          <div className="home_content">
            <Category item={listMovie.data} title="Phổ biến trên Netflix" />
            {listMovieContinue.data && (
              <Category
                item={listMovieContinue.data}
                title="Danh sách tiếp tục xem của bạn"
              />
            )}
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
    </div>
  );
};

export default Home;
