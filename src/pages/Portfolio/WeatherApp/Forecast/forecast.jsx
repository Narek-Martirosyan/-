import "./forecast.scss";
import { forecastWeather } from "../../../../axios/WeatherAppAPI";
import { useEffect, useState } from "react";
import { kelvinToCelsius } from "../convertFunctions";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
    showTodayHandler,
    showOneHandler,
    showTwoHandler,
    showThreeHandler,
    showFourHandler,
    showFiveHandler
} from "./logics";

const currentDate = new Date().getDate();

export const Forecast = ({ currentCityCoord }) => {
    const [list, setList] = useState([]);
    const [dayList, setDayList] = useState([]);
    const [showToday, setShowToday] = useState(false);
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");
    const [five, setFive] = useState("");

    useEffect(() => {
        forecastWeather(currentCityCoord?.lat, currentCityCoord?.lon).then(res => {
            setList(res.data.list);
        });
    }, [currentCityCoord?.lat, currentCityCoord?.lon, currentCityCoord]);

    useEffect(() => {
        const days = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        }

        if (dayList.length) {
            dayList.splice(0, dayList.length);
        }

        for (let i = 0; i < list.length; i++) {
            const date = new Date(list[i].dt_txt);
            const currentDay = new Date();

            if (`${currentDay.getFullYear()}-0${currentDay.getMonth() + 1}-${currentDay.getDate()}` ===
                list[i].dt_txt.substring(0, 10)) {
                dayList.push({
                    day: "Today",
                    date: list[i].dt_txt.substring(0, 10),
                    time: list[i].dt_txt.substring(11, 16),
                    temp: list[i].main.temp,
                    weather: list[i].weather,
                    wind: list[i].wind.speed
                });
            } else {
                dayList.push({
                    day: days[date?.getDay()],
                    date: list[i].dt_txt.substring(0, 10),
                    time: list[i].dt_txt.substring(11, 16),
                    temp: list[i].main.temp,
                    weather: list[i].weather,
                    wind: list[i].wind.speed
                });
            }
        }

        setDayList([...dayList]);
        // eslint-disable-next-line
    }, [list]);

    return (
        <div className="forecast">
            <div className="forecast-today">
                <h3
                    className="forecast-today-day"
                    onClick={() => showTodayHandler(showToday, setShowToday)}>
                    Today
                    <KeyboardArrowDownIcon
                        sx={{ transition: "transform .2s" }}
                        className={showToday ? "forecast-today-day-arrow" : ""} />
                </h3>

                <div className={showToday ? "forecast-today-today show-today" : "forecast-today-today"}>
                    {dayList.filter(day => day.day === "Today").map((item, index) => (
                        <div className="forecast-today-today-info" key={index}>
                            <h6 className="forecast-today-today-info-time"><AccessTimeIcon />{item?.time}</h6>
                            <h6 className="forecast-today-today-info-temp"><ThermostatIcon />
                                {kelvinToCelsius(item?.temp)}℃
                            </h6>
                            <h6>
                                <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                                    alt={item?.weather?.description}
                                    width="20px"
                                />
                                {item?.weather[0]?.description}
                            </h6>
                            <h6><AirIcon />{item.wind} m/s</h6>
                        </div>
                    ))}
                </div>
            </div>

            <div className="forecast-one">
                <h3
                    className="forecast-one-day-name"
                    onClick={() => showOneHandler(showOne, setShowOne)}>
                    {one}
                    <KeyboardArrowDownIcon
                        sx={{ transition: "transform .2s" }}
                        className={showOne ? "forecast-one-day-name-arrow" : ""} />
                </h3>

                <div className={showOne ? "forecast-one-day show-one-day" : "forecast-one-day"}>
                    {dayList.filter(day => +(day.date.substring(8)) === (currentDate + 1)).map((item, index) => {
                        if (!one) {
                            setOne(item.day);
                        }
                        return (
                            <div className="forecast-one-day-info" key={index}>
                                <h6 className="forecast-one-day-info-time"><AccessTimeIcon />{item?.time}</h6>
                                <h6 className="forecast-one-day-info-temp"><ThermostatIcon />
                                    {kelvinToCelsius(item?.temp)}℃
                                </h6>
                                <h6>
                                    <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                                        alt={item?.weather?.description}
                                        width="20px"
                                    />
                                    {item?.weather[0]?.description}
                                </h6>
                                <h6><AirIcon />{item.wind} m/s</h6>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="forecast-two">
                <h3
                    className="forecast-two-day-name"
                    onClick={() => showTwoHandler(showTwo, setShowTwo)}>
                    {two}
                    <KeyboardArrowDownIcon
                        sx={{ transition: "transform .2s" }}
                        className={showTwo ? "forecast-two-day-name-arrow" : ""} />
                </h3>

                <div className={showTwo ? "forecast-two-day show-two-day" : "forecast-two-day"}>
                    {dayList.filter(day => +(day.date.substring(8)) === (currentDate + 2)).map((item, index) => {
                        if (!two) {
                            setTwo(item.day);
                        }
                        return (
                            <div className="forecast-two-day-info" key={index}>
                                <h6 className="forecast-two-day-info-time"><AccessTimeIcon />{item?.time}</h6>
                                <h6 className="forecast-two-day-info-temp"><ThermostatIcon />
                                    {kelvinToCelsius(item?.temp)}℃
                                </h6>
                                <h6>
                                    <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                                        alt={item?.weather?.description}
                                        width="20px"
                                    />
                                    {item?.weather[0]?.description}
                                </h6>
                                <h6><AirIcon />{item.wind} m/s</h6>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="forecast-three">
                <h3
                    className="forecast-three-day-name"
                    onClick={() => showThreeHandler(showThree, setShowThree)}>
                    {three}
                    <KeyboardArrowDownIcon
                        sx={{ transition: "transform .2s" }}
                        className={showThree ? "forecast-three-day-name-arrow" : ""} />
                </h3>

                <div className={showThree ? "forecast-three-day show-three-day" : "forecast-three-day"}>
                    {dayList.filter(day => +(day.date.substring(8)) === (currentDate + 3)).map((item, index) => {
                        if (!three) {
                            setThree(item.day);
                        }
                        return (
                            <div className="forecast-three-day-info" key={index}>
                                <h6 className="forecast-three-day-info-time"><AccessTimeIcon />{item?.time}</h6>
                                <h6 className="forecast-three-day-info-temp"><ThermostatIcon />
                                    {kelvinToCelsius(item?.temp)}℃
                                </h6>
                                <h6>
                                    <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                                        alt={item?.weather?.description}
                                        width="20px"
                                    />
                                    {item?.weather[0]?.description}
                                </h6>
                                <h6><AirIcon />{item.wind} m/s</h6>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="forecast-four">
                <h3
                    className="forecast-four-day-name"
                    onClick={() => showFourHandler(showFour, setShowFour)}>
                    {four}
                    <KeyboardArrowDownIcon
                        sx={{ transition: "transform .2s" }}
                        className={showFour ? "forecast-four-day-name-arrow" : ""} />
                </h3>

                <div className={showFour ? "forecast-four-day show-four-day" : "forecast-four-day"}>
                    {dayList.filter(day => +(day.date.substring(8)) === (currentDate + 4)).map((item, index) => {
                        if (!four) {
                            setFour(item.day);
                        }
                        return (
                            <div className="forecast-four-day-info" key={index}>
                                <h6 className="forecast-four-day-info-time"><AccessTimeIcon />{item?.time}</h6>
                                <h6 className="forecast-four-day-info-temp"><ThermostatIcon />
                                    {kelvinToCelsius(item?.temp)}℃
                                </h6>
                                <h6>
                                    <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                                        alt={item?.weather?.description}
                                        width="20px"
                                    />
                                    {item?.weather[0]?.description}
                                </h6>
                                <h6><AirIcon />{item.wind} m/s</h6>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="forecast-five">
                <h3
                    className="forecast-five-day-name"
                    onClick={() => showFiveHandler(showFive, setShowFive)}>
                    {five}
                    <KeyboardArrowDownIcon
                        sx={{ transition: "transform .2s" }}
                        className={showFive ? "forecast-five-day-name-arrow" : ""} />
                </h3>

                <div className={showFive ? "forecast-five-day show-five-day" : "forecast-five-day"}>
                    {dayList.filter(day => +(day.date.substring(8)) === (currentDate + 5)).map((item, index) => {
                        if (!five) {
                            setFive(item.day);
                        }
                        return (
                            <div className="forecast-five-day-info" key={index}>
                                <h6 className="forecast-five-day-info-time"><AccessTimeIcon />{item?.time}</h6>
                                <h6 className="forecast-five-day-info-temp"><ThermostatIcon />
                                    {kelvinToCelsius(item?.temp)}℃
                                </h6>
                                <h6>
                                    <img src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                                        alt={item?.weather?.description}
                                        width="20px"
                                    />
                                    {item?.weather[0]?.description}
                                </h6>
                                <h6><AirIcon />{item.wind} m/s</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
