import React from 'react'
import styled from 'styled-components'

const Header = props => {
    return (
        <HeaderDiv>
            <h1 className='header'>Music Playland</h1>
        </HeaderDiv>
    )
}

export default Header

const HeaderDiv = styled.div`
h1 {
    font-family: 'Times New Roman';
    font-size: 3em;
    margin-bottom: 0;
}`