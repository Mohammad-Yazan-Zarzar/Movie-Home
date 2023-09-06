import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components';

const LoginPage=styled.div`
  height: 60vh;
  width: 80%;
  margin: auto auto;
  margin-top: 20px;
  /* background-color: linear-gradient(#141e30, #243b55); */
  background: rgba(0,0,0,.5);
  box-shadow: 0 15px 25px rgba(0,0,0,.6);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* width:100%; */
  /* border: 1px solid #fff; */
  border-radius:25px ;

  /* gap: 10px; */
`
const UserBox=styled.div`
  position: relative;
  /* background-color: #222; */
  padding: 4px;
  z-index: 1;
  /* margin-bottom: 18px; */
  width: 100%;
`
const Label=styled.label`
  position: absolute;
  color: #fff;
  top: 0px;
  left:0px;
  z-index: 100;
  transition: .5s;
  
`
const Form=styled.form`
  width: 80%;
  /* background-color: #222; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* border: 1px solid #fff; */
  /* overflow: hidden; */
`
const Input=styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width:100%;
  border-bottom: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  :focus~Label{
    /* background-color: #fff; */
    /* color: #222; */
    top: -20px;
    color: #44CFCB;
    z-index: 0;
    /* position: fixed; */
  }

  /* :focus{
    border-bottom:1px solid #44CFCB ;
  }
  :checked~Label{
    color: red;
  } */
  :valid~Label{
    top: -20px;
    color: #44CFCB;
  }
  
`
const H2=styled.h2`
 color: #fff;
`
const A=styled.a`
  /* background-color: #44cfcb; */
  background-color: transparent;
  padding: 10px 20px;
  width: fit-content;
  border-radius: 5px;
  /* color: #122c34; */
  color: #44cfcb;
  text-transform: uppercase;
  text-decoration: none;
  /* font-weight: bold; */
  font-size: 16px;
  letter-spacing: 4px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
  :hover{
    background-color: #44cfcb;
    color: #fff;
    box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
  }

  /* display: block; */
`
const btnAnimT=keyframes`
  0%{
    left:-100%

  }
  50%,100%{
    left: 100%;

  }
`
const SpanT=styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  height: 2px;
  width: 100%;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: ${btnAnimT} 1s linear infinite;
  animation-delay: .25s
`
const btnAnimR=keyframes`
  0%{
    top:-100%

  }
  50%,100%{
    top: 100%;

  }
`
const SpanR=styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 0.5px;
  /* color: #44cfcb; */
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: ${btnAnimR} 1s linear infinite;
  animation-delay: .25s
`
const btnAnimB=keyframes`
  0%{
    right:100%

  }
  50%,100%{
    left: -100%;

  }
`
const SpanB=styled.span`
position: absolute;
bottom: 0px;
left: 0px;
width: 0.5px;
/* color: #44cfcb; */
background: linear-gradient(270deg, transparent, #03e9f4);
height: 2px;
width: 100%;
animation: ${btnAnimB} 1s linear infinite;
animation-delay: .25s
`
const btnAnimL=keyframes`
  0%{
    bottom:-100%

  }
  50%,100%{
    bottom: 100%;

  }
`
const SpanL=styled.span`
position: absolute;
left: 0px;
width: 2px;
/* color: #44cfcb; */
/* background-color: #44cfcb; */
background: linear-gradient(360deg, transparent, #03e9f4);
height: 100%;
/* bottom: 0px; */
animation: ${btnAnimL} 1s linear infinite;
  animation-delay: .25s
`
const Login = () => {
  return (
    <LoginPage>
        <H2>Login</H2>
        <Form>
          <UserBox className="user-box">
            <Input type='text' name='' required></Input>
              
            <Label>Username</Label>
          </UserBox>
          <UserBox className="user-box">
            {/* <input type="password" name="" required=""> */}
            <Input type='password' name='' required ></Input>
            <Label>Password</Label>
          </UserBox>
          <A href="#">
            <SpanT></SpanT>
            <SpanR></SpanR>
            <SpanB></SpanB>
            <SpanL></SpanL>
            Submit
          </A>
        </Form>      
    </LoginPage>
  )
}

export default Login