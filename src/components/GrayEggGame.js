import React, { Component } from "react"
import Egg from "../images/onlyegg.png"
import Scoreboard from "./Scoreboard"

class GrayEggGame extends Component{
    constructor(props){
        super(props)
        this.state={
            render: false
        }
    }

    handleClick = (event) => {
        console.log('I was clicked yo')
    }

    render(){
        return(
            <div className='egg-game'>
                <img src={require('../images/onlyegg.png')} className="egg-only" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default GrayEggGame