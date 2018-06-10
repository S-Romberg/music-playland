import React, { Component } from 'react';
// import Header from './components/Header';
import Footer from './components/Footer';
import GetStartedCarousel from './components/GetStartedCarousel';
import './App.css';

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
        <main>
          <GetStartedCarousel />
        </main>
        <Footer />          
      </div>
    );
  }
}

export default App;
