import React, { Component } from "react"
import ScoreboardImage from "../images/scorescreen.jpg"

class Scoreboard extends Component{
    constructor(props){
        super(props)
        this.state={
            renderNextLevel: false
            
        }
    }

    logClick = event => {
        event.preventDefault()
        this.setState({
            renderNextLevel: !this.state.renderNextLevel
        })
    }

    render(){
        // var renderNextLevel = this.state.renderNextLevel
        return( 
            <div className='scoreboard'> 
                <img src={ScoreboardImage} className="scoreboard-img"/>
            </div>
        )
    }
}

export default Scoreboard