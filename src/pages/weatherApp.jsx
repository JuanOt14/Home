import './weatherApp.css'
import weatherInfo from '../data/weatherInfo.json'
//const apiKey = "eaba105804b148b3a6b144848230711" ;

function WeatherApp () {
    return(
        <div className='weatherApp-root'>
            <h1>Weather App</h1>
            <div className='weather-card'>
                <h3>{weatherInfo.location.region}</h3>
                <div className='weather-location-info'>
                    <h4>Lat:</h4>
                    <p>{weatherInfo.location.lat} </p>
                    <h4> Lon:</h4>
                    <p>{weatherInfo.location.lon}</p>
                </div>
                <div className='weather-location-weather'>
                    <h4>Temp:</h4>
                    <p>{weatherInfo.current.temp_c}°C</p>
                    <p>{weatherInfo.current.temp_f}°F</p>
                    <h4>Condition:</h4>
                    <p>{weatherInfo.current.condition.text}</p>
                    <img alt='current weather icon' src={weatherInfo.current.condition.icon}/>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;