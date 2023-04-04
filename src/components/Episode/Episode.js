import React from "react";
import "./Episode.scss";
import PICTURE_DEFAULT from "assets/img/default.jpg";

const Episode = ({ ep }) => {
  return (
    <div className="episode--item">
      <span>{ep.number}</span>
      <img src={PICTURE_DEFAULT} alt="" />
      <div className="episode--item-content">
        <div className="episode--item-header">
          <span className="episode--item-title">{ep.title}</span>
          <span className="episode--item-duration">{ep.duration}</span>
        </div>
        <span className="episode--item-text">{ep.description}</span>
      </div>
    </div>
  );
};

export default Episode;
