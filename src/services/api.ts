import axios from "axios";

import { WeatherResponse } from "./types";

const API_KEY = process.env.REACT_APP_API_KEY;

interface GetWeatherProps {
  country: string;
  city: string;
}

export const getWeather = async ({ country, city }: GetWeatherProps) =>
  axios.get<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
