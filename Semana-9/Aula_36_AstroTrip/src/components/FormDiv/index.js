import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    width: 35%;
    height: 80%;
    background: orange;
`

const FormDiv = (props) => {
    return(
        <MainWrapper>
            {props.children}
        </MainWrapper>
    )
}

export default FormDiv