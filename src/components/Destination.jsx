import React from "react";
import "../styles/Destination.css";

export default function Destination(props) {
  return (
    <div className="destination">
      <img className="destination--image" src={props.image} alt={props.title} />
      <h1 className="destination--title">{props.title}</h1>
      <p className="destination--description">{props.description}</p>
    </div>
  );
}
