import React from "react";
import "../css/weather.css";

const Weather = props => {
  return (
    
    <div className="container">
      {props.weatherJSON.temp_max ? (
        <div className="weatherInfo">
          <div className="weatherInfo__current">
            <div className="weatherInfo__main">
                <div>{props.weatherJSON.celsius}&deg;</div>
            </div>
            <div className="weatherInfo__minMax">
                  <div>Min:{props.weatherJSON.temp_min}&deg;</div>
                  <div>Max:{props.weatherJSON.temp_max}&deg;</div>
            </div>
            <div className="weatherInfo__name">
                <div>{props.weatherJSON.city} {props.weatherJSON.country}</div>
            </div>
          </div>
          <div className="weatherInfo__forecast">
            <div className="weatherInfo__sign">
                <div>Forecast (daytime):</div>
            </div>
            <div className="weatherInfo__element">
                <div>{props.weatherJSON.forecast.firstTemp}&deg;</div>
            </div>
            <div className="weatherInfo__element">
                <div>{props.weatherJSON.forecast.secondTemp}&deg;</div>
            </div>
            <div className="weatherInfo__element">
                <div>{props.weatherJSON.forecast.thirdTemp}&deg;</div>
            </div>
            <div className="weatherInfo__element">
                <div>{props.weatherJSON.forecast.fourthTemp}&deg;</div>
            </div>
            <div className="weatherInfo__element">
                <div>{props.weatherJSON.forecast.fifthTemp}&deg;</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    
  );
};

export default Weather;