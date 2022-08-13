import axios from "axios";
import { API_key } from "./API_key";

export const currentWeather = async(lat, lon) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key.key}`);
}

export const forecastWeather = async(lat, lon) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key.key}`)
}