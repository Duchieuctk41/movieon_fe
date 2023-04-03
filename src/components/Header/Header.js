import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../Header/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="nav__left">
          <div className="header__logo">
            <Link to="/">
              <img src="https://cinestar.com.vn/pictures/moi/9Logo/white-2018.png"></img>
            </Link>
          </div>
          <div className="header__menu">
            <div className="header__menu-item">
              <ul>
                <Link to="/">Trang chủ</Link>
                <Link to="/">Truyền hình</Link>
                <Link to="/">Phim</Link>
                <Link to="/">Mới thêm</Link>
                <Link to="/">Danh sách của tôi</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav__right">
          <div className="header__search">
            <input placeholder="Tìm kiếm..."></input>
          </div>
          <div className="header__language">
            <a>En</a>
          </div>
          <div className="header__avatar">Avatar</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
