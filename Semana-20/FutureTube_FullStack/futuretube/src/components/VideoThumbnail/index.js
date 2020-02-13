import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StyledCardMedia, StyledCard } from './styled';
import GoogleLogo from '../../style/futuretubelogo.svg'





export default function VideoThumbnail(props){
  return(
    <StyledCard >
      <CardActionArea>
        <StyledCardMedia
          src={props.thumbnailImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.thumbTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Play
        </Button>
      </CardActions>
    </StyledCard>
  )
}