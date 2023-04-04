import React from "react";
import "./WriteComment.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const WriteComment = () => {
  return (
    <div className="write_comment">
      <img src={PICTURE_DEFAULT} />
      <div className="write_comment__form">
        <input
          className="write_comment__form__input"
          placeholder="Nhập bình luận"
        />
        <button className="write_comment__form__button">Đăng</button>
      </div>
    </div>
  );
};

export default WriteComment;
