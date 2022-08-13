import "./weatherApp.scss";
import { currentWeather } from "../../../axios/WeatherAppAPI";
import { useEffect, useState } from 'react';
import citiesData from './city.list.json';
import { unixTimestamp } from "./convertFunctions";
import { kelvinToCelsius } from "./convertFunctions";
import { Forecast } from "./Forecast";
import OpacityIcon from '@mui/icons-material/Opacity';
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

export const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [cityWeatherData, setCityWeatherData] = useState({});
    const [weather, setWeather] = useState("");

    const currentCityCoord = citiesData.filter(item => item.name.toLowerCase() === city.toLowerCase())[0]?.coord;

    useEffect(() => {
        if (currentCityCoord) {
            currentWeather(currentCityCoord?.lat, currentCityCoord?.lon).then(res => {
                setCityWeatherData(res.data);
                setWeather(res.data.weather[0]);
            });
        }

    }, [currentCityCoord]);

    const onSubmitHandler = (e, value) => {
        e.preventDefault();
        if (value.trim()) {
            setCity(value);
        }
        e.target[0].value = "";
    }

    const sunrise = unixTimestamp(cityWeatherData?.sys?.sunrise);
    const sunset = unixTimestamp(cityWeatherData?.sys?.sunset);
    const temperature = kelvinToCelsius(cityWeatherData?.main?.temp);

    return (
        <div className="weather-app">
            {!currentCityCoord && <h3 className="weather-app-title">Search the city for weather information</h3>}
            <form className="weather-app-form" onSubmit={(e) => onSubmitHandler(e, e.target[0].value)}>
                <input type="search" placeholder="Please enter city" />
                <input type="submit" value={"Search"} />
            </form>

            <div className="weather-app-all">
                {currentCityCoord ?
                    <div className="weather-app-all-current-weather">
                        <div className="weather-app-all-current-weather-temperature-block">
                            <h2 className="weather-app-all-current-weather-temperature-block-city">{cityWeatherData?.name}: {temperature}℃</h2>
                            <h4 className="weather-app-all-current-weather-temperature-block-description">{weather?.description}
                                {weather &&
                                    <img src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                                        alt={weather?.description}
                                        width="50px"
                                    />
                                }
                            </h4>
                        </div>

                        <div className="weather-app-all-current-weather-more-info">
                            <div className="weather-app-all-current-weather-more-info-sunrise-set">
                                <h6 style={{ color: "yellow" }}><WbSunnyIcon /> Sunrise: {sunrise} </h6>
                                <h6 style={{ color: "orange" }}><WbTwilightIcon /> Sunset: {sunset} </h6>
                            </div>

                            <div className="weather-app-all-current-weather-more-info-another">
                                <h6 style={{ color: "#81A5BA" }}><CloudIcon /> Cloudiness: {cityWeatherData?.clouds?.all}%</h6> {/* Ամպամածություն */}
                                <h6 style={{ color: "#545488" }}><OpacityIcon /> Humidity: {cityWeatherData?.main?.humidity}%</h6> {/* Խոնավություն */}
                            </div>

                            <h6 style={{ color: "#E6ECD7" }}><AirIcon /> Wind speed: {cityWeatherData?.wind?.speed} m/s</h6>
                        </div>

                        <Forecast currentCityCoord={currentCityCoord} />
                    </div>
                    :
                    <h3 style={{ textAlign: "center" }}>Enter a valid location name</h3>
                }
            </div>
        </div>
    )
}
