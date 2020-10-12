import React from 'react';
import Weather from './weather.js'
import "../css/searchNav.css";

class Search extends React.Component{

	constructor() {
    super()
    this.API_KEY = "8986a532201306d13a5f60c6e79c3d4d";
    this.state = {
      city: "",
      inputValue: "",
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      forecast: {
      	firstTemp: undefined,
      	secondTemp: undefined,
      	thirdTemp: undefined,
      	fourthTemp: undefined,
      	fifthTemp: undefined
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.setWeatherByCoords = this.setWeatherByCoords.bind(this);
    this.handleCurrentLocation = this.handleCurrentLocation.bind(this);
  }

  calCelsius(temp) {
   	let cell = Math.floor(temp - 273.15);
   	return cell;
  }

  handleChange(evt){
    this.setState({
      inputValue: evt.target.value
    });
  }

  handleCurrentLocation(){
    this.setState({
      inputValue: ""
    });
  	navigator.geolocation.getCurrentPosition((position) =>
  		this.setWeatherByCoords(position.coords.latitude,position.coords.longitude));
  }

	async handleSearch(){
    try{
    	const url_current = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${this.API_KEY}`;
    	const responseCurrent = await fetch(url_current);
			const dataCurrent = await responseCurrent.json();
			this.setWeatherByCoords(dataCurrent.coord.lat, dataCurrent.coord.lon);
    }catch(error){
    	alert("Bad city name provided!");
    }    
  }

  async setWeatherByCoords(latitude,longitude){
    const url_forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}
						&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${this.API_KEY}`;
		const responseForecast = await fetch(url_forecast);
		const dataForecast = await responseForecast.json();
		this.setState({
		  city: `${this.state.inputValue}`,
      inputValue: "",
		  celsius: this.calCelsius(dataForecast.daily[0].temp.day),
		  temp_max: this.calCelsius(dataForecast.daily[0].temp.max),
		  temp_min: this.calCelsius(dataForecast.daily[0].temp.min),
		  forecast: {		//littlebit of hardcode 
		    firstTemp: this.calCelsius(dataForecast.daily[1].temp.day),
	      secondTemp: this.calCelsius(dataForecast.daily[2].temp.day),
	      thirdTemp: this.calCelsius(dataForecast.daily[3].temp.day),
	      fourthTemp: this.calCelsius(dataForecast.daily[4].temp.day),
	      fifthTemp: this.calCelsius(dataForecast.daily[5].temp.day)
		  }
		});
  }

	render(){
		return(
			<div className="container">
				<div className="searchNav">
					<div className="searchNav__Bar">
						<input type="text" className="searchNav__Bar--input" placeholder="Location ..." value={this.state.inputValue} onChange={(evt) => this.handleChange(evt)}></input>
					</div>
					<div className="searchNav__button">
						<input type="button" className="searchNav__button--but" value="Search" onClick={this.handleSearch} ></input>
					</div>
					<div className="searchNav__button">
						<input type="button" className="searchNav__button--but currentLocation" value="By Current Location" onClick={this.handleCurrentLocation} ></input>
					</div>
				</div>
				<Weather weatherJSON={this.state} /> 
			</div>	
		)
	};
}

export default Search;