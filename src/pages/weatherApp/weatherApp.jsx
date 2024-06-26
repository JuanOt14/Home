import './weatherApp.css'
import Menu from '../../globalComponents/Menu';
//import weatherInfo from '../../data/weatherInfo.json'
//const apiKey = "eaba105804b148b3a6b144848230711" ;

function WeatherApp () {
    return(
        <div className='weatherApp-root'>
            <Menu/>
            <div className='weatherApp-body'>
                <h1 id='title-weatherApp'>Weather App</h1>
                <div className='search-bar'>
                    <input type="text" name="search" id="search" />
                    <button type="button" className='btn-search'>🔍</button>
                </div>
                <section className='weatherApp-cards-container'>

                </section>
                <div className='weather-card'>
                    <h3>{weatherInfo.location.region}</h3>
                    <div className='weather-location-info'>
                        <h4>Lat: </h4>
                        <p>{weatherInfo.location.lat} </p>
                        <h4> Lon: </h4>
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
        </div>
    )
}

export default WeatherApp;