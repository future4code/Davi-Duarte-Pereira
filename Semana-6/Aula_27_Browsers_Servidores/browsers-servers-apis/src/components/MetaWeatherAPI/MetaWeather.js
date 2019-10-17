import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainContainer = styled.div`
    box-sizing: border-box;
`

const MetaWeatherHeader = styled.header`
    border-bottom: 5px solid #272838;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`

const WebsiteTitle = styled.h1`
    color: #989FCE;
` 

const CityName = styled.h2`
    text-align: center;
`

const WeatherInfoContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SingleDaySection = styled.div`
    margin: 10px;
`

const WeatherImg = styled.img`
    width: 50px;
    height: 50px;
`


const baseUrl = 'https://www.metaweather.com/api/'

class MetaWeather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: '',
            cityName: '',
            cityWeather: [],
            cityTimezone: '',
            cityTimezoneName: '',
        }
    }
    
    filterTest = (value) => {
        return value.parent.title;
    }

    handleSelectChange = (event) => {
        this.setState({city: event.target.value});
    }

    fetchCityData = () => {
        const citySelected = `location/${this.state.city}/`;

        axios.get(
            `${baseUrl}${citySelected}`
        ).then((response) => {
            window.alert('Request successful!');
            this.setState({
                cityName: response.data.title,
                cityWeather: response.data.consolidated_weather,
                cityTimezone: response.data.timezone,
                cityTimezoneName: response.data.timezone_name,
                cityMaxTemperature: response.data.consolidated_weather
            });
        }).catch(() => {
            window.alert('Uh oh, something went wrong. Try again, later.');
        })
    }

    render(){
        const cityName = this.state.cityName;
        const cityWeather = this.state.cityWeather.map((weatherInfo, i) => {
            return (
                <SingleDaySection key={i}>
                    <p>Date: {weatherInfo.applicable_date}</p>
                    <p>{weatherInfo.weather_state_name}</p>
                    <WeatherImg
                     src={`https://www.metaweather.com/static/img/weather/${weatherInfo.weather_state_abbr}.svg`} 
                    />
                    <p>Right now is {Number(weatherInfo.the_temp).toFixed(0)}°C.</p>
                    <p>Max temperature: {Number(weatherInfo.max_temp).toFixed(0)}°C</p>
                    <p>Minimal temperature: {Number(weatherInfo.min_temp).toFixed(0)}°C</p>
                    <hr />
                </SingleDaySection>
            )
        })

        return (
            <MainContainer>
                <MetaWeatherHeader>
                    <WebsiteTitle>MetaWeather</WebsiteTitle>
                    <div>
                        <p>Select the city you wish to see the weather: </p>
                        <select onChange={this.handleSelectChange}>
                            <option value={'455827'}>São Paulo</option>
                            <option value={'2459115'}>New York</option>
                            <option value={'44418'}>London</option>
                            <option value={'1103816'}>Melbourne</option>
                            <option value={'1118370'}>Tokyo</option>
                            <option value={'1591691'}>Cape Town</option>
                        </select>
                        <button onClick={this.fetchCityData}>Search</button>
                    </div>
                </MetaWeatherHeader>
                <main>
                    <CityName>{cityName}</CityName>
                    <WeatherInfoContainer>
                        {cityWeather}
                    </WeatherInfoContainer>
                </main>
            </MainContainer>
        )
    }
}

export default MetaWeather;