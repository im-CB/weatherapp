import React, { useEffect, useState} from "react"
import WeatherCard from "./Weather";

function CurrentLocation (){
    const [lat,setLat] = useState([]);
    const [long,setLong]= useState([]);
    const [data,setData]= useState([]);

    useEffect(() => {
      const fetchData = async () =>{
        navigator.geolocation.getCurrentPosition(function(position){
         setLat(position.coords.latitude);
         setLong(position.coords.longitude);
        });
    
        await fetch( `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res=> res.json()).then(result=>{
            setData(result)
            console.log(result);
        }).catch(err=>console.log('ERROR IN FETCH:',err));
      }
      fetchData();    
    },[lat,long])

    return(
        <>
        {( typeof data.main != 'undefined') ? (
            <WeatherCard weatherData ={data}/>
        ):(<div>Loading...</div>)
        }
        </>
    )
}

export default CurrentLocation;