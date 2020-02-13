import React, {useState} from 'react'
import {
  StyledFormControl, 
  StyledCard, 
  StyledTextField, 
  StyledGoogleButton, 
  GoogleIcon, 
  StyledMessagePrompt,
  StyledLink,
  StyledNormalButton
} from './styled'
import googleLogo from '../../style/googlelogo.svg'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'


export function FormGenerator(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  const signupComponent = props.onClickToSignUp 
    ? 
  <StyledMessagePrompt> 
    Not a user yet? <StyledLink onClick={props.onClickToSignUp}>Sign up</StyledLink> then.
  </StyledMessagePrompt>
    : 
  null
  
  const changePasswordComponent = props.onClickToChangePassword 
    ?
  <StyledMessagePrompt><StyledLink onClick={props.onClickToChangePassword}> Change password </StyledLink></StyledMessagePrompt>
    :
  null

  const googleButtonComponent = props.onClickGoogleButton
    ?
  <StyledGoogleButton 
    variant="contained" 
    color="primary" 
    onClick={props.onClickGoogleButton}
    endIcon={<GoogleIcon src={googleLogo} />}
  > {props.googleButtonLabel} </StyledGoogleButton>
    :
  null

  const normalButtonComponent = props.onClickNormalButton
    ?
  <StyledNormalButton 
    variant="contained" 
    color="primary" 
    onClick={props.onClickNormalButton}
  > {props.normalButtonLabel} </StyledNormalButton>
    :
  null

  // const dateInputComponent = props.

  return(
    <StyledCard>
      <StyledFormControl > 
          {props.formMapper.map((item) => {
            // TODO: TURN SIGNUP COMPONENT INTO A HOOK
            // if (item.name === "birthday") {
            //   return (
            //     <MuiPickersUtilsProvider utils={MomentUtils}>
            //       <KeyboardDatePicker
            //         margin="normal"
            //         value={props.dateValue}
            //         onChange={props.onChangeDate}
            //         KeyboardButtonProps={{
            //           'aria-label': 'change date',
            //         }}
            //       />
            //     </MuiPickersUtilsProvider>
            //   )
            // }
            return (
              <StyledTextField key={item.name}
                name={item.name} 
                type={item.type}
                required={item.required}
                value={props.formMapValue}
                onChange={props.onChangeMapFunc}
                variant={item.variant}
                label={item.placeholder}
                onKeyDown={props.onKeyDown}
              />
            )
          })}
        {normalButtonComponent}
        {googleButtonComponent}
        {changePasswordComponent}
        {signupComponent}
      </StyledFormControl>
    </StyledCard>
  )
}