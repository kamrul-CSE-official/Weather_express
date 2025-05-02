export interface WeatherData {
  name: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  wind: {
    speed: number
    deg: number
  }
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  dt: number
  timezone: number
  id: number
  coord: {
    lon: number
    lat: number
  }
}

export interface WeatherState {
  data: WeatherData | null
  loading: boolean
  error: string | null
  currentCity: string
}
