import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import { getWeather } from './api-helper';
import Button from './componentes/Button';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      city: ""
    }
  }



  componentDidMount = async () => {
    const weather = await getWeather();
    this.setState({
      weather: weather
    })
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })
    console.log(e.target.value)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const weather = await getWeather(this.state.city);
    this.setState({
      weather: weather
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Button
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          weather={this.state.weather} />


        <Footer />
      </div>
    );
  }
}

export default App;
