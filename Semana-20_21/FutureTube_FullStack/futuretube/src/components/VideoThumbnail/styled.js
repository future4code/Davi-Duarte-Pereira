import styled from 'styled-components'
import { Card, CardActionArea, Button } from '@material-ui/core'


export const StyledCardMedia = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const StyledCard = styled(Card)`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

export const StyledTypography = styled.div`
  width: 100%;
  height: 40%;
  max-height: 4rem;
  line-height: 4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.4rem;
  padding: 5px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: normal;
  display: -webkit-box;
  font-family: 'Lato', sans-serif;
`

export const StyledCardButton = styled(Button)`
  width: 100%;
  height: 20%;
`

export const StyledCardActionArea = styled(CardActionArea)`
  width: 100%;
  height: 50%;
`