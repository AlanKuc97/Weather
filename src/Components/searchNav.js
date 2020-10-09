import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather.js'
import "../css/searchNav.css";

class Search extends React.Component{
	constructor() {
    	super()
    	this.city = {input: ''}
    	this.state = {
      		city: undefined,
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
    	this.getData = this.getData.bind(this);
  	}

  	calCelsius(temp) {
    	let cell = Math.floor(temp - 273.15);
    	return cell;
  	}

  	handleChange(evt){
  		this.city.input = evt.target.value;
  	}

	async getData(){
    	const API_KEY ="8986a532201306d13a5f60c6e79c3d4d";
    	const url_current = `https://api.openweathermap.org/data/2.5/weather?q=${this.city.input}&appid=${API_KEY}`;
    	try{
    		//Current weather fetch
    		const responseCurrent = await fetch(url_current);
			const dataCurrent = await responseCurrent.json();
			const url_forecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${dataCurrent.coord.lat}
										&lon=${dataCurrent.coord.lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`;
			//Forecast fetch
			const responseForecast = await fetch(url_forecast);
			const dataForecast = await responseForecast.json();
			
			this.setState({
		        city: `${dataCurrent.name}, ${dataCurrent.sys.country}`,
		        celsius: this.calCelsius(dataCurrent.main.temp),
		        temp_max: this.calCelsius(dataCurrent.main.temp_max),
		        temp_min: this.calCelsius(dataCurrent.main.temp_min),
		        forecast: {		//littlebit of hardcode 
		        	firstTemp: this.calCelsius(dataForecast.daily[1].temp.day),
	      			secondTemp: this.calCelsius(dataForecast.daily[2].temp.day),
	      			thirdTemp: this.calCelsius(dataForecast.daily[3].temp.day),
	      			fourthTemp: this.calCelsius(dataForecast.daily[4].temp.day),
	      			fifthTemp: this.calCelsius(dataForecast.daily[5].temp.day)
		        }
		    });
		    console.log(this.state.forecast.thirdTemp);
    	}catch(error){
    		alert("Bad city name provided!");
    	}    
  	}

	render(){
		return(
			<div className="container">
				<div className="searchNav">
					<div className="searchNav__Bar">
						<input type="text" className="searchNav__Bar--input" placeholder="Location ..." onChange={(evt) => this.handleChange(evt)}></input>
					</div>
					<div className="searchNav__button">
						<input type="button" className="searchNav__button--but" value="Search" onClick={this.getData} ></input>
					</div>
					
				</div>
				<Weather weatherJSON={this.state} /> 
			</div>
			
		)
	};
}

export default Search;