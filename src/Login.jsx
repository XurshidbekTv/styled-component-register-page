import React from 'react'
import { Description, InputWrapper, Title, Wrapper ,Input, UserIcon, Button, Info, CheckBox, Span, Forget} from './style'

const Login = () => {
  return (
    <Wrapper>
       <Description>
        Already have an account
       </Description>
       <Title>
        Log in Here
       </Title>
       <InputWrapper>
            <UserIcon/>
          <Input placeholder='Username'/>
       </InputWrapper>
       <InputWrapper>
       <UserIcon/>
          <Input placeholder='Password'/>
       </InputWrapper>
       <Info>
        <Span>
        <CheckBox type="checkbox"/>
        Keep me loged in
        </Span>
        <Button select>
            Log In
        </Button>
       </Info>
       <Forget>
        Forget Password?
       </Forget>
    </Wrapper>
  )
}

export default Login