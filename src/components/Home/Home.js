import React from "react";
import "../Home/Home.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_content">
        <div className="home_content--title">
          <h2>Phim bom tấn hành động & phiêu lưu Âu - Mỹ</h2>
        </div>
        <div className="home_content--item">
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

export default Home;
