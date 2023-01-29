import React, { useEffect, useState } from 'react'
import {TiWeatherSunny} from 'react-icons/ti'
import {TiWeatherSnow} from 'react-icons/ti'

import axios from 'axios'

export default function Home() {
  const search=function(){
    let a =document.getElementById("search")
    console.log(a.value);
    setcity(a.value)
  }

const[city,setcity]=useState("cuttack");
const[weather1,setweather]=useState({
  "coord": {
  "lon": 85.8793,
  "lat": 20.465
  },
  "weather": [
  {
  "id": 800,
  "main": "Clear",
  "description": "clear sky",
  "icon": "01d"
  }
  ],
  "base": "stations",
  "main": {
  "temp": 303.25,
  "feels_like": 302.24,
  "temp_min": 303.25,
  "temp_max": 303.25,
  "pressure": 1011,
  "humidity": 33,
  "sea_level": 1011,
  "grnd_level": 1007
  },
  "visibility": 10000,
  "wind": {
  "speed": 2.83,
  "deg": 98,
  "gust": 3.73
  },
  "clouds": {
  "all": 2
  },
  "dt": 1671015037,
  "sys": {
  "type": 1,
  "id": 9113,
  "country": "IN",
  "sunrise": 1670978637,
  "sunset": 1671017888
  },
  "timezone": 19800,
  "id": 1273780,
  "name": "Cuttack",
  "cod": 200
  })
useEffect(()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a09c79a0c9a806ea688829370ba57f7`).then((res)=>{
    console.log(res.data);
    setweather(res.data)

  })

},[city])

let x=35
  
 
  let rain=true;
  return (
    <div>
   {
      x>20?( 
      <>
      
      <div className="weather-part">
      <input onChange={search} id='search' placeholder='search the name of city' type="text" /> 
      <div className='temp'>
       
     
         <div> {weather1.name} Today's Weather:  {weather1.main.temp-273}°C  <TiWeatherSunny style={{position:"absolute", top:"1rem",paddingLeft:"1.7rem"}}/>

          <div>
           <span style={{paddingRight:" 2rem"}}> Min .temp: {weather1.main.temp_min-273}° C   </span> <span>  Max .temp: {weather1.main.temp_max-273}° C  </span>
          </div>

         </div>
       <p style={{position:"absolute",top:"7rem",left:"2rem"}}></p>


         <div>  
          {/* rain */}
            <p> {weather1.weather[0].main}</p> 
            <p>  Humidity : {weather1.main.humidity}</p>
            <p>wind speed : {weather1.wind.speed}</p>
           


         </div>
      </div>





      </div>
      <div className="what_to_wear">
           <div className="suggestions">
            <div className="overlay">
       

           <div style={{width:"50%"}}>
          It's warm outside today. we prefer you wear something light today. If you are someone who loves to go out in sun today is perfect. Shorts are advised
          </div>
         
            </div>
           </div>
      </div>
      
      </>
      
      
      ):(
        <div>
          <div className="weather-part-1">
      <div className='temp'>
       20 C
       <p style={{position:"absolute",top:"4rem",left:"2rem"}}>

        <TiWeatherSnow/>
       </p>
      </div>
      </div>
        </div>

      )
   }
    </div>
  )
}
