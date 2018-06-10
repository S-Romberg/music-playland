import React, { Component } from "react"
import Egg from "../images/eggonly.png"
import Scoreboard from "./Scoreboard"

class GrayEggGame extends Component{
    constructor(props){
        super(props)
        this.state={
            render: false
        }
    }

    render(){
        return(
            <div className='egg-game'>
                <img src={require('../images/eggonly.png')} className="egg-only"/>
            </div>
        )
    }
}

export default GrayEggGame