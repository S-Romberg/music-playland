import React, { Component } from "react"
import MenuPage from './MenuPage'
import Header from './Header'

class GetStartedCarousel extends Component {

    constructor(props){
        super(props)
        this.state={    
            render: false
        }
    }
    
    logClick = event => {
        event.preventDefault()
        this.setState({
            render: !this.state.render
        })
    }

    render(){
        var render = this.state.render
        return(
            <div>
            {render ? <MenuPage onClick={this.logClick}/> :
            <div>
                <Header />
                <div className="music-elements">
                    <img src={require('../images/musicelements.png')} onClick={this.logClick} alt="music elements"/>
                </div> 
            </div>
            }
            </div>
        )
    }
    

}

export default GetStartedCarousel

