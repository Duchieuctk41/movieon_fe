import React from "react";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const Info = () => {
  return (
    <div className="info__content">
      <div className="info__content">
        <h2>Hai Phượng</h2>
        <div>
          <span>Năm phát hành</span>
          <span>+18 </span>
          <span>Thời lượng</span>
        </div>
        <div>
          <span>Nội dung chính</span>
        </div>
        <div>
          <span>Phát video</span>
          <span>Thêm vào danh sách của tôi</span>
          <span>Rating phim</span>
        </div>
        <div>
          <span>Diễn viên: Thanh Ngô, Đức Hiếu</span>
        </div>
      </div>
      <div className="info__tab">
        <span>Bình luận</span>
        <span>Có thể bạn cũng thích</span>
        <span>Tổng quan</span>
        <span>Chi tiết</span>
        <span>Danh sách tập</span>
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
      <div className="info__suggest"></div>
      <div className="info__summary"></div>
      <div className="info__detail"></div>
    </div>
  );
};

export default Info;
