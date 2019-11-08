import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Background = (props) => {
    return(
        <MainWrapper>
            {props.children}
        </MainWrapper>
    )
}

export default Background