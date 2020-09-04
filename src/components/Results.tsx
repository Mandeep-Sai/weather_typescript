import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface result {
  data: {
    coord: Coord;
    weather: Weatherinfo[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
  };
}
interface Clouds {
  all: number;
}
interface Coord {
  lon: number;
  lat: number;
}
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
interface Weatherinfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Wind {
  speed: number;
  deg: number;
}
interface SearchQuery {
  query: string;
  result: Response;
}
export default function Results({ data }: result) {
  return (
    <>
      {data.id !== 0 && (
        <Row md={2} className="results-wrapper">
          <Col className="title-col-container">
            <h1 className="title-class">{data.name}</h1>
            <ul style={{ padding: 0 }}>
              <li className="details">
                <img className="icon" src="humidity.svg" />{" "}
                <span>
                  {" "}
                  {data.main.humidity} <span className="units">%</span>
                </span>
              </li>
              <li className="details">
                <img className="icon" src="pressure.svg" />{" "}
                <span>
                  {" "}
                  {data.main.pressure} <span className="units">hPa</span>{" "}
                </span>
              </li>
              <li className="details">
                <img className="icon" src="wind.svg" />{" "}
                <span>
                  {" "}
                  {data.wind.speed} <span className="units">km/h</span>{" "}
                </span>
              </li>
            </ul>
          </Col>

          <Col className="clipart-col-container">
            <h3 id="temp">
              {Math.floor(data.main.temp - 273.15)}{" "}
              <span style={{ fontSize: "60px" }}>°C</span>
            </h3>
            {data.weather[0]["main"] === "Clear" && (
              <img className="circle ml-5" src="sun.svg" width="300px" alt="" />
            )}
            {data.weather[0]["main"] === "Clouds" && (
              <img
                className="circle  ml-5"
                src="suncloud.svg"
                width="300px"
                alt=""
              />
            )}
            {data.weather[0]["main"] === "Mist" && (
              <img
                className="circle  ml-5"
                src="fog.svg"
                width="300px"
                alt=""
              />
            )}
            {data.weather[0]["main"] === "Rain" && (
              <img
                className="circle ml-5"
                src="rain.svg"
                width="300px"
                alt=""
              />
            )}
          </Col>
        </Row>
      )}
    </>
  );
}
