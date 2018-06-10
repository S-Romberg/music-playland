import React, {Component} from "react"

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
      this.myInput.setAttribute("class", "eggclick");
    }

    eggDone = () => {}

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
            onClick={this.handleClick}/>)
        
        return (
            <div className='egg-game'>
                <img
                    src={require('../images/onlyegg.png')}
                    onClick={this.handleEggClick}
                    className='egg-only'
                    alt="egg"
                    ref={input => {
            this.myInput = input;
          }}/>
                <div className='wands'>
                    {images}
                </div>

            </div>
        )
    }
}

export default GrayEggGame