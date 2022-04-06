import React from "react";
import "./InfoCard.css";

const InfoCard = ({ line, number, color }) => {
  return (
    <div className="infocard" style={{backgroundColor: color}}>
      <div className="infocard-text">
        <div className="infocard-line">{line}</div>
        <div className="infocard-number">{number}</div>
      </div>
    </div>
  );
};

export default InfoCard;
