import {
  Wrapper,
  Logo,
  LoginWrapper,
  Login,
  Profile,
  Signup,
  Mypage,
} from "../header/LayoutHeader.styles";

export default function LayoutHeaderUI(props) {
  return (
    <Wrapper>
      <Logo src="/images/logo.png" onClick={props.onClickHome} />
      <span>{props.data?.fetchUserLoggedIn.name}님 안녕하세요</span>
      <LoginWrapper>
        {props.accessToken && <Profile src="/images/profile.png" />}
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
