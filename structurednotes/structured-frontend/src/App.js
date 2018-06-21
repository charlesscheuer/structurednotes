import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
    }
  }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  } 

  onRouteChange = ( route ) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route });
}

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
      <Particles className='particles'
              params={particlesOptions}
            />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
      { route === 'home' 
      ? <Home/>
      :  <Signin onRouteChange={this.onRouteChange}/>   
      }
      </div>
    );
  }
}

export default App;
