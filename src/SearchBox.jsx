import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./css_modules/SearchBox.module.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null); // State to track error
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonRes = await response.json();
      if (jsonRes.cod !== 200) {
        throw new Error("Location not found");
      }
      
      let result = {
        city:city,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feels_like: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
      };
      return result;
    } catch (err) {
      setError("No Such Place exists");
      return null;
    }
  };

  let enterCity = (event) => {
    setCity(event.target.value);
  };

  let chkWeather = async (event) => {
    event.preventDefault();
    setError(null); 
    let newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
      setCity(""); 
    }
  };

  return (
    <div className={style.searchbox}>
      <h3 className={style.heading}>Check Today's Forecast</h3>
      <form onSubmit={chkWeather}>
        <TextField
          className={style.text}
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={enterCity}
          required
        />
        <br />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
      {error && <p className={style.errorMsg} style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
