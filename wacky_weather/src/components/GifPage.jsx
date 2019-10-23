import React from 'react';
import { getGifs } from '../services/gif-api-helper';

const gifWeather = '';


export default function GifPage(props) {
  return (
    <div id='blah'>
      <h3 id='gifs-description'>Gifs for {props.weather && props.weather.weather[0].description}</h3>
      <div className="img">
        {props.gifs.map(gif => (
          <div key={gif.id}>
            <img src={gif.images.original.url} />
          </div>

        ))}
      </div>
    </div>
  )
}

