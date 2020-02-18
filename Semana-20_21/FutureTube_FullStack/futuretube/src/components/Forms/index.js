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
import DatePicker from './datePicker'


export function FormGenerator(props) {
  // these ternary ifs are used to show a part of the component only if its prop is called.
  // I liked doing this because it lets the component to render in very different ways and it becomes more
  // appliable to different use cases.

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
    color="inherit" 
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


  return(
    <StyledCard>
      <StyledFormControl > 
          {props.formMapper.map((item) => {
            if (item.name === "birthdate") {
              return (
                <DatePicker />
              )
            }

            // TODO: implement the file uploader feature.
            // if (item.type === 'file') {
            //   return (
            //     <input type={item.type} ref={props.refForFileInputType} />
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
                ref={props.ref}
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