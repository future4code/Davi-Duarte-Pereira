import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    max-width: 100vw;
    height: 100vh;
`

export const PageWrapper = (props) => {
    return(
        <Page>
            {props.children}
        </Page>
    )
}
