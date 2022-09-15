import React from "react";
import Destination from "./Destination";
import data from "../data";

export default function Main() {
  const destinationComponents = data.map((destination) => (
    <Destination key={destination.id} {...destination} />
  ));
  return [destinationComponents];
}
