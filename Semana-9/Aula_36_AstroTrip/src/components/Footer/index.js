import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    box-sizing: border-box;
    border-top: 1px solid black;
    height: 10%;
    background: #495867;
`

const TextWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 15px 0;
    padding: 15px 15px;
`

const StyledLink = styled.a`
    color: whitesmoke;
`

const Footer = (props) => {
    return(
        <FooterWrapper>
            <TextWrapper>
                <span>Powered by <StyledLink href="https://www.future4.com.br/" target="blank">Future4.</StyledLink></span>
            </TextWrapper>
        </FooterWrapper>
    )
}

export default Footer;