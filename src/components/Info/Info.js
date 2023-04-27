import React from "react";
import "./Info.scss";
import mockSuggestMovie from "mocks/suggest_movie.json";
import mockEpisode from "mocks/episode.json";
import Category from "components/Category/Category";
import Episode from "components/Episode/Episode";
import mockComment from "mocks/comment.json";
import Comment from "components/Comment/Comment";
import WriteComment from "components/Comment/WriteComment";
import Tab from "components/Tab/Tab";
import { useState, useEffect } from "react";
import { movieApi } from "actions";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import SuggestMovie from "components/SuggestMovie/SuggestMovie";
import Rating from "components/Rating/Rating";

const Info = ({ id }) => {
  // get user from redux
  const user = useSelector(selectCurrentUser);

  // get data from api
  const [data, setData] = useState(null);
  const [listSuggestMovie, setListSuggestMovie] = useState(null);
  const [toggleRating, setToggleRating] = useState(false);

  const getData = async (id) => {
    const response = await movieApi.getOneMovie(id);
    setData(response.data);

    // get list suggest movie
    const listSuggestMovie = await movieApi.getSuggestMovie(user.id_old);
    setListSuggestMovie(listSuggestMovie.data);
  };

  const navigate = useNavigate();

  const handleClickCloseModal = () => {
    navigate("/home");
  };

  const handleToggleRating = () => {
    setToggleRating(!toggleRating);
  };

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="info">
      <div className="info__container">
        {data ? (
          <div className="info__content">
            <div className="info__content--top">
              <button
                className="button__circle button__close"
                onClick={handleClickCloseModal}
              >
                X
              </button>
              <div className="info__content--top-container">
                <div className="info__content--top-title">{data.name}</div>
                <div className="info__content--top-nav">
                  <div>
                    <button className="button__square">Phát</button>
                    <button className="button__circle button__grey">+</button>
                    <button
                      className="button__circle button__grey"
                      onClick={handleToggleRating}
                      // onMouseOut={() => setToggleRating(false)}
                    >
                      L
                    </button>
                    {toggleRating && <Rating movieId={id} />}
                  </div>
                  <div>
                    <button className="button__circle button__grey">M</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="info__content--bottom">
              <div className="info__content--bottom--left">
                <div className="info__content--bottom--left--top">
                  <div className="info__movie--top">
                    <span className="year__movie">
                      Phát hành:{" "}
                      <span className="highlight__green">
                        {data.release_date}
                      </span>
                    </span>
                    <span className="length__movie">21 mùa</span>
                    <span className="quality__movie">HD</span>
                  </div>
                  <div className="info__movie--bottom">
                    <span className="age_limit__movie">16+</span>
                    <span className="about__movie">
                      bạo lực, tình dục, khỏa thân, ngôn ngữ, chất gây nghiện
                    </span>
                  </div>
                </div>
                <div className="info__content--bottom--left--bottom">
                  <div className="movie__ontop">
                    Tên phim:{" "}
                    <span className="highlight__green">{data.name}</span>
                  </div>
                  <div className="movie__summary">{data.description}</div>
                </div>
              </div>
              <div className="info__content--bottom--right">
                <div>
                  <span className="movie__quote">Diễn viên:</span>{" "}
                  <span className="movie__info">{data.cast}</span>
                </div>
                <div>
                  <span className="movie__quote">Thể loại:</span>{" "}
                  <span className="movie__info">{data.type}</span>
                </div>
                <div>
                  <span className="movie__quote">Ngôn ngữ:</span>{" "}
                  <span className="movie__info">{data.language}</span>
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
            <div className="info__suggest">
              <h2>Nội dung tương tự</h2>
              <div className="info__suggest_list">
                {mockSuggestMovie.data.map((movie) => (
                  <SuggestMovie key={movie.id} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="info__content">
            <div className="info__content--top">
              <button
                className="button__circle button__close"
                onClick={handleClickCloseModal}
              >
                X
              </button>
              <div className="info__content--top-container">
                <div className="info__content--top-title">Biệt đội báo thù</div>
                <div className="info__content--top-nav">
                  <div>
                    <button className="button__square">Phát</button>
                    <button className="button__circle button__grey">+</button>
                    <button
                      className="button__circle button__grey"
                      onClick={handleToggleRating}
                      // onMouseOut={() => setToggleRating(false)}
                    >
                      L
                    </button>
                    {toggleRating && <Rating movieId={id} />}
                  </div>
                  <div>
                    <button className="button__circle button__grey">M</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="info__content--bottom">
              <div className="info__content--bottom--left">
                <div className="info__content--bottom--left--top">
                  <div className="info__movie--top">
                    <span className="year__movie">
                      Phát hành: <span className="highlight__green">2023</span>
                    </span>
                    <span className="length__movie">21 mùa</span>
                    <span className="quality__movie">HD</span>
                  </div>
                  <div className="info__movie--bottom">
                    <span className="age_limit__movie">16+</span>
                    <span className="about__movie">
                      bạo lực, tình dục, khỏa thân, ngôn ngữ, chất gây nghiện
                    </span>
                  </div>
                </div>
                <div className="info__content--bottom--left--bottom">
                  <div className="movie__ontop">
                    Tên phim:{" "}
                    <span className="highlight__green">Biệt đội báo thù</span>
                  </div>
                  <div className="movie__summary">
                    Dominic Toretto và đội gấp rút ngăn chặn một âm mưu đe dọa
                    nền văn minh do tên tội phạm ưu tú, cũng là em trai của Dom,
                    cầm đầu.
                  </div>
                </div>
              </div>
              <div className="info__content--bottom--right">
                <div>
                  <span className="movie__quote">Diễn viên:</span>{" "}
                  <span className="movie__info">
                    Michael B Jordan, Jonathan Majors, Tessa Thompson,
                  </span>
                </div>
                <div>
                  <span className="movie__quote">Thể loại:</span>{" "}
                  <span className="movie__info">
                    Phim Hành Động, Phim Tâm Lý, Phim Chiếu Rạp
                  </span>
                </div>
                <div>
                  <span className="movie__quote">Ngôn ngữ:</span>{" "}
                  <span className="movie__info">
                    Tiếng Anh, Phụ đề Tiếng Việt
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
            <div className="info__suggest">
              <h2>Nội dung tương tự</h2>
              <div className="info__suggest_list">
                {mockSuggestMovie.data.map((movie) => (
                  <SuggestMovie key={movie.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Info;
