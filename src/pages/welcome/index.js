import React from 'react';
import WelcomeTips from '../../components/WelcomeTips';
import './style.css'
import Weather from '../../assets/weather.svg';
import WeatherApp from '../../assets/weatherapp.svg';
import Button from '../../components/Button';

const Welcome = ()=>{
    return(
        <div>
          <h1 className = "title">Weather Time</h1>
          <div className = "content">
            <WelcomeTips src= { Weather } title = {`A forma mais rapida e mais pratica de saber sobre o ${"\n"} clima da sua cidade ou de qualquer lugar do mundo.`}/> 
            <WelcomeTips src= { WeatherApp } title = {`Com duvida se vai cair uma chuva hoje? Deixa com a gente, nos avisamos.`}/>
          </div> 
          <Button button = "Avançar"/>
       </div>
    )
}

export default Welcome;
