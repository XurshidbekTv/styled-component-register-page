import styled from "styled-components";
import {ReactComponent as User} from './user/user.svg'

export const Container= styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: #2A393E;
width:100%;
height:100vh;
color:white;
`

export const Wrapper = styled.div`
width:360px;
height:fit-content;
border:2px solid #445859;
margin:10px ;
border-radius:5px;
display:flex;
/* justify-content:center; */
flex-direction:column;
align-items: center;
padding:30px;
box-sizing:border-box;
`

export const Description =styled.div`
color:white;
font-weight:600;
font-size:20px;
`
export const Title= styled.div`
color: #E7C961;
font-size:28px;
`
export const InputWrapper = styled.div`
display:flex;
width:100%;
position:relative;
`
export const Input=styled.input`
width:100%;
height:45px;
border-radius:4px;
background-color:rgba(104, 105, 102, .5);
border: 1px solid #354545;
margin-top:15px;
::placeholder{
padding-left:35px;
};
outline:none;
color:white;
font-size:22px;
padding-left:35px;

`
export const UserIcon=styled(User)`
width:20px;
position:absolute;
top:45%;
left:5px;
`

export const Button = styled.button`
width:123px;
height:45px;
background-color: #00908d;
color:white;
font-weight:700;
font-size:22px;
margin-left: auto;
margin-top:${(props)=>props.select? "0px" : "20px"};
border:none;
outline: none;
border-radius:4px;
`

export const Info=styled.div`
display:flex; 
width:100%;
margin-top:20px;
`

export const CheckBox=styled.input`
width:50px;
height:50px;
background-color:rgba(104, 105, 102, .5);
border: 1px solid #354545;
`

export const Span=styled.span`
justify-content:center;
align-items:center;
width:120px ;
display:flex;
`

export const Forget= styled.div`
margin-top:20px;
margin-left: auto;
font-size:20px;
color:white;
font-weight:700px;
`
