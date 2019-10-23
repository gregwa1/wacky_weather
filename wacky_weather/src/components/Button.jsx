import React from 'react';

export default function Button(props) {
  return (
    <div>
      {props.weather === null ?
        <h3>Loading...</h3> :
        <>
          <input type="text" placeholder="Enter City" onChange={props.handleChange} />
          <button onClick={props.handleClick}>Search</button>
          <h1>{Math.round(props.weather.main.temp)}&deg;</h1>
          <p>{props.weather.name}</p>
          <p>{props.weather.weather[0].description}</p>
        </>
      }
    </div>
  )
}