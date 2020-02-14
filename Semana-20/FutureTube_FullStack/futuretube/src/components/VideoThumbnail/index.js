import React from 'react'
import { StyledCardMedia, StyledCard, StyledTypography, StyledCardButton, StyledCardActionArea } from './styled';





export default function VideoThumbnail(props){
  return(
    <StyledCard raised={true} >
      <StyledCardActionArea>
        <StyledCardMedia
          src={props.thumbnailImg}
          title="Contemplative Reptile"
        />  
      </StyledCardActionArea>
      <StyledTypography title={props.thumbTitle} >
        {props.thumbTitle}
      </StyledTypography>
      <StyledCardButton size="small" color="primary">
        Play
      </StyledCardButton>
    </StyledCard>
  )
}