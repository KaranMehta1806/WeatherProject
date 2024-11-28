import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import style from "./css_modules/Weather_app.module.css";



export default function Weather_app(){

    let [weatherInfo,setWeatherInfo] = useState({
      city:"Delhi",
      temp : 25.05,
        tempMin : 25.05,
        tempMax : 25.05,
        humidity : 47,
        feels_like : 24.84,
        weather:"haze"
    });
    // let info = {
    //     temp:30,
    //     wind : 122,
    // }

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div className={style.parentContainer}>
        <div className={style.childContainer}>
          <SearchBox updateInfo={updateInfo} />
        </div>
        <div className={style.childContainer}>
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    )
}