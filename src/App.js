import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';

import Footer from './components/Footer';
import GetStartedCarousel from './components/GetStartedCarousel';
import GrayEggGame from "./components/GrayEggGame"
import MenuPage from './components/MenuPage'
import Scoreboard from './components/Scoreboard';


class App extends Component {
  constructor(props){
    super(props)
    this.state={    
        render: false,
        scoreScreen: false
    }
}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <main>
          <Switch>
            <Route exact path='/' component={() => <GetStartedCarousel /> }/>
            <Route exact path='/game' component={() => <GrayEggGame />} />
            <Route exact path='/menu' component={() => <MenuPage />} />
            <Route exact path='/scoreboard' component={() => <Scoreboard />} />
          </Switch>
          </main>
        </BrowserRouter>
        <Footer />          
      </div>
    );
  }
}

export default App;
