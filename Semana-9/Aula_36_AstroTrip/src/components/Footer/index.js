import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    border-top: 1px solid black;
    margin: 10px 0;
    padding: 10px 0;
`

const Footer = (props) => {
    return(
        <FooterWrapper>
            <span>Powered by <a href="https://www.future4.com.br/" target="blank">Future4.</a></span>
        </FooterWrapper>
    )
}

export default Footer;