import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import sound from '../sounds/G.wav'
import image from '../images/scorescreen.png'

import Scoreboard from "./Scoreboard"
class GrayEggGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            eggSwitch: false
        }
    }

    handleEggClick = (event) => {
        var css = (this.props.eggSwitch === "hidden") ? "show" : "hidden";
        this.setState({"eggSwitch":css});
      this.eggOnClick.setAttribute('class', 'eggclick egg-only ')
      this.pickWand.setAttribute('class', 'pick-wand')
      document.getElementById('audio1').play()
    }

    handleWandClick = (event) => {
        if (event.target.id === 'yellow') {
            window.location.href = '/scoreboard'
        } else {
            this.pickWand.innerText = 'Try Again!'
        }
    }

    render(){ 
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
            id={image}
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
                this.eggOnClick = input
                }}/>
                <p className='hidden-text' ref={input => {
                this.pickWand = input}}>Pick a wand!</p>
                    <div className='wands'>
                    {images}
                </div>
            </div>

        )
    }
}

export default GrayEggGame