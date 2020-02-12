import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'

export const StyledFormControl = styled(FormControl)`
  width: 70%;
`

export const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background: #F1EDEE;
  @media (min-width: 320px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1230px) {
    width: 70%;
    height: 100%;
  }
`

export const StyledTextField = styled(TextField)`
  padding: 5%;
  &:first-child{
    margin-top: 5%;
  }
  &:last-of-type{
    margin-bottom: 5%;
  }
`
export const StyledButton = styled(Button)`
  margin: 2% 0;
  &:last-of-type{
    background: #FAFAFB;
    color: #1f2224;
  }
`
export const GoogleIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

export const StyledSignUpPrompt = styled.p`
  color: #a32330;
  text-align: end;
  font-family: 'Yantramanav', sans-serif;
  margin-bottom: 0.1rem;
`

export const StyledLink = styled.span`
  color: #6F1C0E;
  border-bottom: 0.1rem solid #DA5659;
  &:hover{
    cursor: pointer;
  }
`