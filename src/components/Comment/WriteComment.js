import React from "react";
import "./WriteComment.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const WriteComment = () => {
  return (
    <div className="write_comment">
      <img src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/342543011_2613771085441092_838860880033294527_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=14c_8tOTszgAX-E6FVe&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfBOgGXBoj3b62GnlnrrhzM44Q5yEfL4kJjgLfPa2AGO-Q&oe=644D4E99" />
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
