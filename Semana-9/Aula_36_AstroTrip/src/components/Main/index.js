import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    height: 75%;
    background: #27344C;
`

const Main = (props) => {
    return(
        <MainWrapper>
            {props.children}
        </MainWrapper>
    )
}

export default Main