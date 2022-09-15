import React from "react";
import "../styles/Destination.css";

export default function Destination(props) {
  return (
    <div className="destination">
      <img className="destination--image" src={props.image} alt={props.title} />
      <div className="destination--info">
        <h3 className="destination--country">
          {props.country}
          <a href={props.map} className="destination--map">
            View on Google Maps
          </a>
        </h3>
        <h1 className="destination--title">{props.title}</h1>
        <h2 className="destination--date">{props.dates}</h2>
        <p className="destination--description">{props.description}</p>
      </div>
    </div>
  );
}
