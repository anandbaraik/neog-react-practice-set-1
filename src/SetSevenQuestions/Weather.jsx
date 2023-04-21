import React, { useEffect, useState } from 'react'
import { fetchWeather } from './API/fetchWeather';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({});
    const [tempratureFormat, setTempratureFormat] = useState('°C');
    const fetchData = async () => {
        try {
            const response = await fetchWeather("https://example.com/api/weather");
            if(response.status === 404) throw new Error(response);
            const {data} = response;
            setWeatherData(data);
        } catch (error) {
            console.error(error);
        }
    }

    const toggleTempratureFormat = (format) => {
        const { temperature: tempDegree } = weatherData;
        let degree = null;
        if(format === '°F') {
            degree = ((tempDegree - 32) * 5/9).toFixed(2); //convert to c
        } else {
            degree = (tempDegree * (9 / 5) + 32).toFixed(2); //convert to f
        }
        setWeatherData({ ...weatherData, temperature: degree });
        setTempratureFormat((format === "°C") ? "°F" : "°C");
    }
    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div>
        <h3>Weather</h3>
        <div>
            {
                weatherData?.temperature ?
                (
                    <>
                        <strong>Temperature</strong> :
                        {weatherData.temperature} {(tempratureFormat === '°C') ? "°C" : "°F"}
                        <br />
                        <strong>Humidity</strong> : {weatherData.humidity} {'%'}<br />
                        <strong>WindSpeed</strong> : {weatherData.windSpeed} {'km/h'} <br />
                        <button onClick={() => toggleTempratureFormat(tempratureFormat)}>
                            Toogle format
                        </button>
                    </>
                ) : (
                    <strong>Loading....</strong>
                )
            }
        </div>
    </div>
  )
}

export default Weather