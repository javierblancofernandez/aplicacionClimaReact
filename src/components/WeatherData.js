import React from "react";
import WeatherExtrainfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";

const WeatherData = () => (
  <div>
    <WeatherTemperature temperatura={20} weatherState={""}></WeatherTemperature>
    <WeatherExtrainfo humidity={40} wind={"10m/s"}>
      {" "}
    </WeatherExtrainfo>
  </div>
);
export default WeatherData;
