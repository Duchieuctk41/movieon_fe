import React from "react";
import "./SuggestMovie.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const SuggestMovie = () => {
  return (
    <div className="movie_item">
      <div className="movie_item_top">
        <img
          src="https://images2.thanhnien.vn/Uploaded/sangdt/2022_12_11/demon-slayer-5486.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="movie_item_name">Thanh gươm diệt quỷ</div>
        <div className="movie_item_bot">
          <div>
            <span className="movie_item_age_limit">18+</span>
            <span className="movie_item_year">2023</span>
          </div>
          <button className="button__circle">+</button>
        </div>
        <p>
          Năm 210 trước Công nguyên, trong thời kì loạn lạc sau khi Tần Thủy
          Hoàng băng hà, Hạng Vũ và Lưu Bang nổi dậy và dấy binh khởi nghĩa với
          tham vọng xưng đế ở Trung Hoa.
        </p>
      </div>
    </div>
  );
};

export default SuggestMovie;
