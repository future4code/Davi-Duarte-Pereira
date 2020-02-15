import React from 'react'
import {Page} from './styled'

export const PageWrapper = (props) => {
  return(
    <Page>
      {props.children}
    </Page>
  )
}
