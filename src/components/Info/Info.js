import React from "react";
import PICTURE_DEFAULT from "assets/img/default.jpg";
import "./Info.scss";

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
                <span className="movie__ontop">hello</span><br></br>
                <span className="movie__summary">Một nhóm nhà khoa học đi tìm bí ẩn về viên đá kì lạ,...
                </span>
            </div>
          </div>
          <div className="info__content--bottom--right">
            <div className="movie__cast">
              <p><span>Diễn viên:</span> <a href="">Lưu Đức Thái</a>,<a href="">Nguyễn Đức Hiếu</a></p>
            </div>
            <div className="movie__genres">
              <p><span>Thể loại:</span> <a href="">Kinh dị</a>,<a href="">Khoa học</a>,<a href="">Viễn tưởng</a></p>
            </div>
            <div className="movie__about">
              <p><span>Phim này về:</span> <a href="">Sợ hãi</a>,<a href="">Thao túng tâm lý</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="info__tab">
        <span>Danh sách tập</span>
        <span>Bình luận</span>
      </div>
      <div className="info__comment">
        <div className="info__comment--write">
          <div>
            <img src={PICTURE_DEFAULT} />
          </div>
          <div>
            <input placeholder="Nhập bình luận" />
          </div>
        </div>
        <div className="info__comment--list">
          <div className="info__comment--item">
            <div>
              <img src={PICTURE_DEFAULT} />
            </div>
            <div>
              <span>Tên người dùng</span>
              <span>Bình luận của người dùng</span>
              <div>
                <span>Thích</span>
                <span>Phản hồi</span>
                <span>1 tuần trước</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info__episode">
        <ul>
          <li>
            <span>1</span>
            <img alt="" />
            <div>
              <span>Tên tập</span>
              <span>Thời lượng</span>
              <span>Mô tả nội dung tập</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
