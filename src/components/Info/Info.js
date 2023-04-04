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
              Thể loại: Nguyễn Đức Hiếu, Lưu Đức Thái, Trương Mỹ Hảo, Khúc
              Xương Khủng Long
            </span>
            <span>
              Chương trình này: Nguyễn Đức Hiếu, Lưu Đức Thái, Trương Mỹ Hảo, Khúc
              Xương Khủng Long
            </span>
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
