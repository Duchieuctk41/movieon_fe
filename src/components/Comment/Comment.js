import React from "react";
import "./Comment.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const Comment = ({ comment }) => {
  return (
    <div className="comment--item">
      <img src={PICTURE_DEFAULT} />
      <div className="comment--item-content">
        <span className="comment--item-name">{comment.user_name}</span>
        <span className="comment--item-text">{comment.content}</span>
        <div className="comment--item-footer">
          <span className="comment--item-like">Thích</span>
          <span>Phản hồi</span>
          <span className="comment--item-date">{comment.created_at}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
