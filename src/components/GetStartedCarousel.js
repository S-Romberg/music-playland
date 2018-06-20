import React, { Component } from "react"
import { Link } from 'react-router-dom'
import Header from './Header'


class GetStartedCarousel extends Component {

    render(){
        return(
            <div>
                <Header />
                <Link to='/menu'>
                    <div className="music-elements">
                        <img src={require('../images/musicelements.png')} onClick={this.logClick} alt="music elements"/>
                    </div> 
                </Link>
            </div>
        )
    }
    

}

export default GetStartedCarousel

