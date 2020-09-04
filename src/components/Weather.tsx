import React, { Component, ChangeEvent } from "react";
import Container from "react-bootstrap/Container";

export interface Response {
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
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weatherinfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}

interface SearchQuery {
  query: string;
  result: Response;
}

export class Weather extends Component<{}, SearchQuery> {
  state = {
    query: "",
    result: {
      coord: {
        lon: 0,
        lat: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      base: "",
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
      },
      visibility: 0,
      wind: {
        speed: 0,
        deg: 0,
      },
      clouds: {
        all: 0,
      },
      dt: 0,
      sys: {
        type: 0,
        id: 0,
        country: "",
        sunrise: 0,
        sunset: 0,
      },
      timezone: 0,
      id: 0,
      name: "",
      cod: 0,
    },
  };

  updateQuery = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: e.currentTarget.value });
  };
  getWeather = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=8aef412a43de7aeb887bc15c81d81b12`
    );
    let result = await response.json();
    console.log(result);
    this.setState({ result });
    console.log(this.state.result);
  };
  render() {
    return (
      <>
        <Container id="weather" fluid></Container>
      </>
    );
  }
}

export default Weather;
