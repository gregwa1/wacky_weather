import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { getWeather } from './services/api-helper';
import { getGifs } from './services/gif-api-helper';
import Button from './components/Button';
import GifPage from './components/GifPage';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      city: "",
      description: "",
      gifs: []
    }
  }

  componentDidMount = async () => {
    let weather = await getWeather();
    let description = weather.weather[0].description
    const gifs = await getGifs(weather.weather[0].description);
    this.setState({
      weather: weather,
      description: description,
      gifs: gifs
    })
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleClick = async (e) => {
    e.preventDefault();
    const weather = await getWeather(this.state.city);

    const gifs = await getGifs(weather.weather[0].description);

    this.setState({
      weather: weather,
      gifs: gifs
    })
  }



  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path="/" render={() => (
          <Button id='description'
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            weather={this.state.weather}
          />
        )} />

        <Route path='/gifpage' render={() => (
          <GifPage
            gifs={this.state.gifs}
            weather={this.state.weather}
          />)
        } />

        <Footer />
      </div>
    );
  }
}

export default App;
