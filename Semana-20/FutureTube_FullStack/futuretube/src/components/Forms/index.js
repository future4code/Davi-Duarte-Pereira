import React from 'react'
import {
  StyledFormControl, 
  StyledCard, 
  StyledTextField, 
  StyledButton, 
  GoogleIcon, 
  StyledSignUpPrompt,
  StyledLink
} from './styled'
import googleLogo from '../../style/googlelogo.svg'


export function FormGenerator(props) {
  // TODO: Realizar a adaptacao para outros forms alem do signin.

  const signupComponent = props.onClickToSignUp ? 
    <StyledSignUpPrompt> 
      Not a user yet? <StyledLink onClick={props.onClickToSignUp}>Sign up</StyledLink> then.
    </StyledSignUpPrompt>
    : null 


  if (props.onSubmitGoogleLogin) {

  }
  
  return(
    <StyledCard>
      <StyledFormControl > 
          {props.formMapper.map((item) => {
            return (
              <StyledTextField key={item.name}
                name={item.name} 
                type={item.type}
                required={item.required}
                value={props.formMapValue}
                onChange={props.onChangeMapFunc}
                variant={item.variant}
                label={item.placeholder}
              />
            )
          })}
        <StyledButton 
          variant="contained" 
          color="primary" 
          onClick={props.onSubmitNormalLogin}
        > Login </StyledButton>
        <StyledButton 
          variant="contained" 
          color="primary" 
          onClick={props.onSubmitGoogleLogin}
          endIcon={<GoogleIcon src={googleLogo} />}
        > Sign in with google </StyledButton>
        {signupComponent}
        <StyledSignUpPrompt><StyledLink> Change password </StyledLink></StyledSignUpPrompt>
      </StyledFormControl>
    </StyledCard>
  )
}