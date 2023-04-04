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
            <div className="info__content--bottom--left--top">
              <div className="info__movie--top">
                <span className="year__movie">2023</span>
                <span className="length__movie">21 mùa</span>
                <span className="quality__movie">HD</span>
              </div>
              <div className="info__movie--bottom">
                <button>18+</button>
                <span>bạo lực, </span>
                <span>ngôn ngữ</span>
              </div>
            </div>
            <div className="info__content--bottom--left--bottom">
              <span className="movie__ontop">hello</span>
              <br></br>
              <span className="movie__summary">
                Một nhóm nhà khoa học đi tìm bí ẩn về viên đá kì lạ,...
              </span>
            </div>
          </div>
          <div className="info__content--bottom--right">
            <div className="movie__cast">
              <p>
                <span>Diễn viên:</span> <a href="">Lưu Đức Thái</a>,
                <a href="">Nguyễn Đức Hiếu</a>
              </p>
            </div>
            <div className="movie__genres">
              <p>
                <span>Thể loại:</span> <a href="">Kinh dị</a>,
                <a href="">Khoa học</a>,<a href="">Viễn tưởng</a>
              </p>
            </div>
            <div className="movie__about">
              <p>
                <span>Phim này về:</span> <a href="">Sợ hãi</a>,
                <a href="">Thao túng tâm lý</a>
              </p>
            </div>
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
      <Category item={mockSuggestMovie.data} title={mockSuggestMovie.title} />
    </div>
  );
};

export default Info;
