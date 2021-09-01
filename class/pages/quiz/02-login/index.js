import { useState } from 'react'
import {
  Wrapper,
  StatusBar,
  Time,
  LogoWrapper,
  LogoImg,
  LogoTxt,
  EmailInput,
  DeleteBtn,
  Line,
  EmailErr,
  PasswordInput,
  PasswordErr,
  LoginBtn,
  AboutSign,
  FindingEmailBtn,
  FindingPWBtn,
  SignupBtn,
  ColBar,
  KaKaoLoginBtn,
  KakaoLogo,
} from '../../../styles/02-login-style'

export default function LoginPage(){
  const [ email, setEmail] = useState("")
  const [ password, setPassword ] = useState("")
  
  const [ emailErr, setEmailErr ] = useState("")
  const [ passwordErr, setPasswordErr ] = useState("")

  function onChangeEmail(event){
    setEmail(event.target.value)
    if(event.target.value){
      setEmailErr("")
    }
    if(event.target.value.includes('@')){
      setEmailErr("")
    }
  }
  function onChangePassword(event){
    setPassword(event.target.value)
    if(
      (event.target.value).length >= 8 
      && (event.target.value).length <= 16
      ){
      setPasswordErr("")
      }
  }
  function onClickLogin(){
    if(!email){
      setEmailErr("이메일 주소를 입력해주세요.")
    } else if(!email.includes('@')){
      setEmailErr("이메일 주소를 다시 확인해주세요.")
    }
    if(
      password.length < 8 
    || password.length > 16){
      setPasswordErr("비밀번호를 입력해주세요.")
    } else if(password < 8 || password > 16){
      setPasswordErr("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
    } else if(email.includes('@') && password.length >= 8 && password.length <= 16){
      alert('환영합니다~!')
    }
  }

  return(
    <Wrapper>
      <StatusBar>
        <Time>12:30</Time>
      </StatusBar>
      <LogoWrapper>
        <LogoImg src="../../../images/logo.svg"></LogoImg>
        <LogoTxt>잇츠로드</LogoTxt>
      </LogoWrapper>
      <EmailInput 
        type="text" 
        placeholder="simplelife@gmail.com"
        onChange={onChangeEmail}
      >
      </EmailInput>
      <DeleteBtn>
        <img src="../../../images/deleteBtn.svg"></img>
      </DeleteBtn>
      <Line></Line>
      <EmailErr>{emailErr}</EmailErr>
      <PasswordInput 
        type="password" 
        placeholder="●●●●●●●●"
        onChange={onChangePassword}
      >
      </PasswordInput>
      <DeleteBtn>
        <img src="../../../images/deleteBtn.svg"></img>
      </DeleteBtn>
      <Line></Line>
      <PasswordErr>{passwordErr}</PasswordErr>
      <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
      <AboutSign>
        <FindingEmailBtn>이메일 찾기</FindingEmailBtn>
        <ColBar>|</ColBar>
        <FindingPWBtn>비밀번호 찾기</FindingPWBtn>
        <ColBar>|</ColBar>
        <SignupBtn>회원가입</SignupBtn>
      </AboutSign>
      <KaKaoLoginBtn>
        <KakaoLogo src="../../../images/kakaotalk-1.svg"></KakaoLogo>
        카카오톡으로 로그인
      </KaKaoLoginBtn>
    </Wrapper>
  )
}