import React, {Component} from 'react'
import sound from '../sounds/G.wav'

// import Scoreboard from "./Scoreboard"
class GrayEggGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false,
            eggclick: false
        }
    }

    handleEggClick = (event) => {
      this.myInput.setAttribute("class", "eggclick egg-only")
      document.getElementById('audio1').play()
    }

    handleWandClick = (event) => {
        console.log(event.target)
    }

    render() {
        const wandArray = [
            'white',
            'black',
            'red',
            'orange',
            'green',
            'purple',
            'yellow',
            'darkblue',
            'brown',
            'darkgreen',
            'pink',
            'whitetwo'
        ]
        let images = wandArray.map(image => <img
            key={image}
            src={require(`../images/wands/${image}.png`)}
            alt="wand"
            className="wand"
            onClick={this.handleWandClick}/>)
        
        return (
            <div className='egg-game'>
                <audio id="audio1" src={sound}></audio>
                <img
                    src={require('../images/onlyegg.png')}
                    onClick={this.handleEggClick}
                    className='egg-only'
                    alt="egg"
                    ref={input => {
            this.myInput = input;
          }}/>
          <p className='hidden'>Pick a wand!</p>
                <div className='wands'>
                    {images}
                </div>

            </div>
        )
    }
}

export default GrayEggGame