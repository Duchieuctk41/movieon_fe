import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import { useNavigate } from "react-router-dom";
import LOGO_DEFAULT from  "assets/img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const handleRedirectLogin = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="nav__left">
          <div className="header__logo">
            <nav className="">
              <img src={LOGO_DEFAULT}/>
            </nav>
          </div>
          <div className="header__menu">
            <div className="header__menu-item">
              <ul>
                <Link to="/">Trang chủ</Link>
                <Link to="/">Phim T.hình</Link>
                <Link to="/">Phim</Link>
                <Link to="/">P.Chiếu rạp</Link>
                <Link to="/">Danh sách của tôi</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav__right">
          <div className="header__search">
            <input placeholder="Tìm kiếm..."></input>
          </div>
          {/* <div className="header__language">
            <a>En</a>
          </div> */}
          <div className="header__avatar" onClick={handleRedirectLogin}>
            Avatar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
