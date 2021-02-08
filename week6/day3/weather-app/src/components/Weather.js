import React, {useState, useEffect, useRef} from "react";
import apiKeys from "./apiKeys";
import Clock from "react-live-clock";
import loader from "./images/WeatherIcons.gif";
const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

function Weather() {

 
let isRendered = useRef(false);
const [lat, setLat] = useState();
const [lon, setLon] = useState();
const [unit, setUnit] = useState(false)
const [temperatureC, setTemperatureC] = useState();
const [temperatureCMax, setTemperatureCMax] = useState();
const [temperatureCMin, setTemperatureCMin] = useState();
const [temperatureF, setTemperatureF] = useState();
const [temperatureFMax, setTemperatureFMax] = useState();
const [temperatureFMin, setTemperatureFMin] = useState();
const [city, setCity] = useState();
const [country, setCountry] = useState();
const [humidity, setHumidity] = useState();
const [main, setMain] = useState();
const timerID = setInterval(
  () => getWeather(lat, lon),
  600000
);
useEffect(() => {
  if (navigator.geolocation) {
  getPosition()
  
    .then((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
    })
    .catch((err) => {
      
      getWeather(28.67, 77.22);
      alert(
        "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
      );
    });
} else {
  alert("Geolocation not available");
}

clearInterval(timerID);
}, [timerID])


const getPosition = (options) => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
const getWeather = async (lat, lon) => {
  const api_call = await fetch(
    `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
  );
  const data = await api_call.json();
  isRendered = true
  console.log(data)
  setLat(() => data.coord.lat);
  setLon(() => data.coord.lon);
  setCity(() => data.name);
  setCountry(() => data.sys.country);
  setTemperatureC(() => Math.round(data.main.temp));
  setTemperatureCMax(() => data.main.temp_max)
  setTemperatureCMin(() => data.main.temp_min)
  setTemperatureF(() => Math.round(data.main.temp * 1.8 + 32));
  setTemperatureFMax(() => Math.round(data.main.temp_max * 1.8 + 32));
  setTemperatureFMin(() => Math.round(data.main.temp_min * 1.8 + 32));
  setMain(() => data.weather[0].main);
  setHumidity(() => data.main.humidity);
}  


  return (
    <div>
      {isRendered ?   
             <React.Fragment>
             <div className="city">
               <div className="title">
              <h2>{city}</h2>
                <h3>{country}</h3>
             </div>
                <div className="date-time">
               <div id="txt"></div>
                   <div className="current-time">
                    <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                   </div>
                 <div className="current-date">{dateBuilder(new Date())}</div>
                </div>
                {unit ? <div className="temperatureC">
                   <p>
                  <span>Current:</span> {temperatureF}°<span>C</span>
                   </p>
                   <p>
                   <span>Max:</span> {temperatureFMax}°<span>C</span>
                   </p>
                   <p>
                   <span>Min:</span> {temperatureFMin}°<span>C</span>
                   </p>
                  </div> : <div className="temperatureC">
                   <p>
                  <span>Current:</span> {temperatureC}°<span>F</span>
                   </p>
                   <p>
                   <span>Max:</span> {temperatureCMax}°<span>F</span>
                   </p>
                   <p>
                   <span>Min:</span> {temperatureCMin}°<span>F</span>
                   </p>
                  </div>}
                 <button onClick={() => setUnit(() => !unit)}>Changeing Temperature</button>
                </div>
            </React.Fragment> :
              <React.Fragment>
              <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} />
              <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}> Detecting your location</h3>
              <h3 style={{ color: "white", marginTop: "10px" }}>Your current location wil be displayed on the App <br/>& used for calculating Real time weather.</h3>
      </React.Fragment>}
    </div>
  )
}

export default Weather
