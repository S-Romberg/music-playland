import React, { Component } from "react"
import scoreScreen from '../images/scorescreen.jpg'

class Scoreboard extends Component{

    render(){
        return( 
            <div> 
                <img className='scoreboard' src={scoreScreen} />
            </div>
        )
    }
}

export default Scoreboard