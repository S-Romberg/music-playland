import React, { Component } from "react"
import GrayEggGame from "./GrayEggGame.jsx"
class MenuPage extends Component{
    constructor(props){
        super(props)
        this.state={
            renderEggGame: false,
            scoreScreen: false
        }
    }
    
    logClick = event => {
        event.preventDefault()
        this.setState({
            renderEggGame: !this.state.renderEggGame
        })
    }

    render(){
        var renderEggGame = this.state.renderEggGame
        return(
            <div>
                {renderEggGame ?
                <GrayEggGame /> :
            <div className='start'>
                <p className='startButton' onClick={this.logClick}>Start</p>
            </div>
            }
            </div>
    )}
    
}

export default MenuPage