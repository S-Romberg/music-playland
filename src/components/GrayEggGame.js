import React, { Component } from "react"
import Egg from "../images/eggonly.png"
import Scoreboard from "./Scoreboard"

class GrayEggGame extends Component{
    constructor(props){
        super(props)
        this.state={
            renderScoreboard: false
        }
    }

    render(){
        var renderScoreboard = this.state.renderScoreboard
        return(
            <div>
            {renderScoreboard ? <Scoreboard />
            <div className='egg-game'>
                <img src={require('../images/eggonly.png')} class="egg-only"/>
            </div>
            }
            </div>
        )
    }
}

export default GrayEggGame