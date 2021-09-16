import {
  Wrapper,
  Logo,
  LoginWrapper,
  Login,
  Profile,
  Signup,
  Mypage,
} from "../header/LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <Wrapper>
      <Logo src="../images/logo.png"></Logo>
      <LoginWrapper>
        <Login>로그인</Login>
        {/* <Profile></Profile> */}
        <Signup>회원가입</Signup>
        {/* <Mypage></Mypage> */}
      </LoginWrapper>
    </Wrapper>
  );
}
