import React, { Component } from "react"
import Scoreboard from "../images/scorescreen.jpg"

class Scoreboard extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <div className='scoreboard'>
                <img src={scoreboard} className="scoreboard-img"/>
            </div>
        )
    }
}

export default Scoreboard