import axios from 'axios';

const apiKey = `6131aaabc1f9c4e65ec619daf8b0e052`;

export const getWeather = async (cityName) => {

  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},us&units=imperial&appid=${apiKey}`)

  console.log(res.data)

  return res.data;
}
