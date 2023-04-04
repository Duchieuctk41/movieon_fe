import React from "react";
import PICTURE_DEFAULT from "assets/img/default.jpg";
import "./Info.scss";
import mockSuggestMovie from "mocks/suggest_movie.json";
import mockEpisode from "mocks/episode.json";
import Category from "components/Category/Category";
import Episode from "components/Episode/Episode";
import mockComment from "mocks/comment.json";
import Comment from "components/Comment/Comment";
import WriteComment from "components/Comment/WriteComment";
import Tab from "components/Tab/Tab";

const Info = () => {
  return (
    <div className="info__container">
      <div className="info__content">
        <div className="info__content--top">
          <img src={PICTURE_DEFAULT} />
        </div>
        <div className="info__content--bottom">
          <div className="info__content--bottom--left">
            <div>
              <span>Tên phim</span>
              <span>2017</span>
              <span>21 mùa</span>
              <span>HD</span>
              <span>16+</span>
            </div>
            <div>
              Sau khi về nước được 2 năm thì tôi lên làm chủ tịch nước. Thật bật
              ngờ nhưng đó là sự thật
            </div>
          </div>
          <div className="info__content--bottom--right">
            <span>
              Diễn viên: Nguyễn Đức Hiếu, Lưu Đức Thái, Trương Mỹ Hảo, Khúc
              Xương Khủng Long
            </span>
            <span>
              Thể loại: Nguyễn Đức Hiếu, Lưu Đức Thái, Trương Mỹ Hảo, Khúc Xương
              Khủng Long
            </span>
            <span>
              Chương trình này: Nguyễn Đức Hiếu, Lưu Đức Thái, Trương Mỹ Hảo,
              Khúc Xương Khủng Long
            </span>
          </div>
        </div>
      </div>
      <Tab />
      <div className="info__comment">
        <WriteComment />
        <div className="info__comment--list">
          {mockComment.list_comment.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      <div className="info__episode">
        <h2>Danh sách tập:</h2>
        {mockEpisode.list_episode.map((ep) => (
          <Episode key={ep.id} ep={ep} />
        ))}
      </div>
      <Category item={mockSuggestMovie} />
    </div>
  );
};

export default Info;
