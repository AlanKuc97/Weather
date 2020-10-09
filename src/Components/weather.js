import React from "react";
import "../css/weather.css";

const Weather = props => {
  return (
    <div className="container">
      <div className="weatherInfo">
        <div className="weatherInfo__current">
          <div className="weatherInfo__main">
            {props.weatherJSON.celsius ? (
              <div>{props.weatherJSON.celsius}&deg;</div>
            ) : null}
          </div>
          <div className="weatherInfo__minMax">
              {props.weatherJSON.temp_min ? (
                <div>Min:{props.weatherJSON.temp_min}&deg;</div>
              ) : null}
              {props.weatherJSON.temp_max ? (
                <div>Max:{props.weatherJSON.temp_max}&deg;</div>
              ) : null}
          </div>
          <div className="weatherInfo__name">
            {props.weatherJSON.city ? (
              <h2>{props.weatherJSON.city} {props.weatherJSON.country}</h2>
            ) : null}
          </div>
        </div>
        <div className="weatherInfo__forecast">
          <div className="weatherInfo__sign">
            {props.weatherJSON.forecast.firstTemp ? (
              <div>Future Weather Forecast:</div>
            ) : null}
          </div>
          <div className="weatherInfo__element">
            {props.weatherJSON.forecast.firstTemp ? (
              <div>{props.weatherJSON.forecast.firstTemp}&deg;</div>
            ) : null}
          </div>
          <div className="weatherInfo__element">
            {props.weatherJSON.forecast.secondTemp ? (
              <div>{props.weatherJSON.forecast.secondTemp}&deg;</div>
            ) : null}
          </div>
          <div className="weatherInfo__element">
            {props.weatherJSON.forecast.thirdTemp ? (
              <div>{props.weatherJSON.forecast.thirdTemp}&deg;</div>
            ) : null}
          </div>
          <div className="weatherInfo__element">
            {props.weatherJSON.forecast.fourthTemp ? (
              <div>{props.weatherJSON.forecast.fourthTemp}&deg;</div>
            ) : null}
          </div>
          <div className="weatherInfo__element">
            {props.weatherJSON.forecast.fifthTemp ? (
              <div>{props.weatherJSON.forecast.fifthTemp}&deg;</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;