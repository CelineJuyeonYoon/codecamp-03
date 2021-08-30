import {MyDiv, Title, IdInput, PasswordInput, LogtinButton, Wrapper} from '../../styles/Example'

export default function EmotionPage(){

  // return 위쪽은 JavaScript 쓰는 곳
  // return 아래는 HTML 쓰는 곳
  return(
    <Wrapper>
      <Title>로그인화면</Title>
      아이디: <IdInput type="text" /><br />
      비밀번호: <PasswordInput type="password" /><br />
      <LogtinButton>로그인</LogtinButton>
      <img src="/lotto.png" />
      {/* <MyDiv>안녕하세요~</MyDiv> */}
    </Wrapper>
  )

}