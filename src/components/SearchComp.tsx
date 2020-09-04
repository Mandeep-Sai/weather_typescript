import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Results from "../components/Results";
import Row from "react-bootstrap/Row";
import { FiSearch, FiStar } from "react-icons/fi";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import axios from "axios";

function SearchComp() {
  const [query, setQuery] = useState("");
  const [favs, setFavs] = useState("");
  const history = useHistory();
  const [result, setResult] = useState({
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
    dt: 1596788524,
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
  });
  const catchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  const searchQuery = async () => {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d8a8c1ce50839e4591eb6bda492c3452`,
        {
          method: "GET",
        }
      );

      let parsed = await response.json();
      setResult(parsed);
    } catch (error) {
      console.log(error);
    }
  };
  const addToFavourites = async () => {
    let payload = {
      place: result.name,
    };

    let response = await fetch("http://localhost:3002/users/addToFavs", {
      headers: new Headers({
        "Access-Control-Allow-Origin": "http://localhost:3002",
        "Access-Control-Allow-Credentials": "true",
        "Content-Type": "application/json",
      }),
      credentials: "include",
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      alert("added successfully");
    }
  };
  return (
    <>
      <div className="circle-bg"></div>
      <div className="circle-bg2"></div>
      <div style={{ marginLeft: "0px", marginTop: "40px" }}>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Enter city"
            className="mr-sm-2"
            onChange={catchInput}
            id="searchBar"
          />
          <Button id="searchButton" onClick={searchQuery}>
            <p>
              <FiSearch />
            </p>
          </Button>
          {result.weather[0].id !== 0 && (
            <Button id="favButton" onClick={addToFavourites}>
              <p>
                <FiStar />
              </p>
            </Button>
          )}
        </Form>
      </div>
      {result && <Results data={result} />}
    </>
  );
}

export default withRouter(SearchComp);
