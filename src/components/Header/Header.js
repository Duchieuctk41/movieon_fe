import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.scss";
import { useNavigate } from "react-router-dom";
import LOGO_DEFAULT from "assets/img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const handleRedirectLogin = () => {
    navigate("/login");
  };

  const handleRedirectHome = () => {
    navigate("/home");
  };

  return (
    <div className="header">
      <div className="nav">
        <div className="nav__left">
          <div className="header__logo">
            <nav className="">
              <img src={LOGO_DEFAULT} onClick={handleRedirectHome} />
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
            <img src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-1/342543011_2613771085441092_838860880033294527_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=14c_8tOTszgAX-E6FVe&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfBOgGXBoj3b62GnlnrrhzM44Q5yEfL4kJjgLfPa2AGO-Q&oe=644D4E99" />
          </div>
          <span>-</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
