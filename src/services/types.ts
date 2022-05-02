export type Weathers =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Atmosphere"
  | "Clear"
  | "Clouds";

interface Weather {
  main: Weathers;
  description: string;
}

export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Sys {
  country: string;
  sunrise: EpochTimeStamp;
  sunset: EpochTimeStamp;
}

export interface Wind {
  deg: number;
  speed: number;
}

export interface WeatherResponse {
  name: string;
  main: Main;
  weather: Weather[];
  wind: Wind;
  sys: Sys;
}
