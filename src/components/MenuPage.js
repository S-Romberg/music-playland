import React, { Component } from "react"
import { Link } from 'react-router-dom'
class MenuPage extends Component{

    render(){
        return(
            <div>
            <Link to='/game' style={{ textDecoration: 'none' }}>
                <div className='start'>
                    <p className='startButton' onClick={this.logClick}>Start</p>
                </div>
            </Link>
            </div>
    )}
    
}

export default MenuPage