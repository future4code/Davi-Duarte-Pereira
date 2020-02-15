import React from 'react'
import FutureTubeLogo from '../../style/futuretubelogo.svg'
import { FutureLogo, TubeLogo } from './styled'





export default function Header(props){
  return(
    <FutureLogo onClick={props.onClickReturnToHome}>Future<TubeLogo>Tube</TubeLogo></FutureLogo>
  )
}