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

  return(
    <Wrapper>
      <StatusBar>
        <Time>12:30</Time>
      </StatusBar>
      <LogoWrapper>
        <LogoImg src="../../../images/logo.svg"></LogoImg>
        <LogoTxt>잇츠로드</LogoTxt>
      </LogoWrapper>
      <EmailInput type="text" placeholder="simplelife@gmail.com">
      </EmailInput>
      <DeleteBtn>
        <img src="../../../images/deleteBtn.svg"></img>
      </DeleteBtn>
      <Line></Line>
      <EmailErr>이메일 주소를 다시 확인해주세요.</EmailErr>
      <PasswordInput type="password" placeholder="●●●●●●●●"></PasswordInput>
      <DeleteBtn>
        <img src="../../../images/deleteBtn.svg"></img>
      </DeleteBtn>
      <Line></Line>
      <PasswordErr>8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.</PasswordErr>
      <LoginBtn>로그인</LoginBtn>
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