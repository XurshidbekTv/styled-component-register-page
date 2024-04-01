import React from 'react'
import Login from './Login'
import Register from './Register'
import { Container } from './style'


const App = () => {
  return (
    <Container>
        <Login/>
        <Register/>
    </Container>
  )
}

export default App