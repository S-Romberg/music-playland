import React, { Component } from "react"
<<<<<<< HEAD
import ScoreboardImage from "../images/scorescreen.jpg"

=======
import scoreScreen from '../images/scorescreen.jpg'
>>>>>>> aaa0f1e42dd1f72fdb6f146c2beffb8cf6c55384
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
<<<<<<< HEAD
        })
=======
    })
>>>>>>> aaa0f1e42dd1f72fdb6f146c2beffb8cf6c55384
    }


    render(){
        // var renderNextLevel = this.state.renderNextLevel
        return( 
            <div className='scoreboard'> 
<<<<<<< HEAD
                <img src={ScoreboardImage} className="scoreboard-img"/>
=======
                <img src={scoreScreen} />
>>>>>>> aaa0f1e42dd1f72fdb6f146c2beffb8cf6c55384
            </div>
        )
    }
}

export default Scoreboard