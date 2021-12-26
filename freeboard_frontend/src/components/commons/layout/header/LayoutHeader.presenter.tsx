import {
  Wrapper,
  Logo,
  LoginWrapper,
  Login,
  Signup,
  Mypage,
  Menu,
  MenuItem,
} from "./LayoutHeader.styles";

export default function LayoutHeaderUI(props: any) {
  return (
    <Wrapper>
      <Menu>
        <MenuItem>ABOUT</MenuItem>
        <MenuItem id="boards">REVIEW</MenuItem>
        <MenuItem id="market">SHOP</MenuItem>
      </Menu>
      <Logo src="/images/logo.png" onClick={props.onClickHome} />
      <LoginWrapper>
        {props.accessToken ? (
          <Login onClick={props.onClickLogout}>로그아웃</Login>
        ) : (
          <Login onClick={props.onClickToLogin}>로그인</Login>
        )}
        {!props.accessToken && (
          <Signup onClick={props.onClickToSignup}>회원가입</Signup>
        )}
        {props.accessToken && <Mypage>마이페이지</Mypage>}
      </LoginWrapper>
    </Wrapper>
  );
}
