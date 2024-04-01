import React from 'react'
import { Wrapper , Description, Title, InputWrapper, Input, UserIcon, Button} from './style'
const Register = () => {
  return (
    <Wrapper>
        <Description>
        Don't have an account?
       </Description>
       <Title>
        Register Naw
       </Title>
       <InputWrapper>
       <UserIcon/>
          <Input placeholder='Desired Username'/>
       </InputWrapper><InputWrapper>
       <UserIcon/>
          <Input placeholder='Password'/>
       </InputWrapper><InputWrapper>
       <UserIcon/>
          <Input placeholder='Confirm Password'/>
       </InputWrapper>
       <Button>Log In</Button>
    </Wrapper>
  )
}

export default Register