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
        <MenuItem id="/boards" onClick={props.onClickMove}>
          REVIEW
        </MenuItem>
        <MenuItem id="/market" onClick={props.onClickMove}>
          SHOP
        </MenuItem>
      </Menu>
      <Logo src="/images/logo.png" onClick={props.onClickHome} />
      <LoginWrapper>
        {props.accessToken ? (
          <>
            <Login onClick={props.onClickLogout}>로그아웃</Login>
            <Mypage>마이페이지</Mypage>
          </>
        ) : (
          <>
            <Login onClick={props.onClickToLogin}>로그인</Login>
            <Signup onClick={props.onClickToSignup}>회원가입</Signup>
          </>
        )}
      </LoginWrapper>
    </Wrapper>
  );
}
