import styled from '@emotion/styled'

const Box = styled.div`
  /* padding: 0;
  margin: 0; */
  width: 640px;
  height: 1140px;
  /* background-color: #fff; */
  border: solid 1px darkgrey;
  font-family: SpoqaHanSans-Bold;
`

{/* <SearchBar> */}
const StatusBar = styled.div`
  width: 640px;
  height: 43px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
`

const Time = styled.span`
  margin-right: 15px;
  width: 58px;
  height: 30px;
  font-size: 25px;
  font-weight: 600;
  opacity: 0.7;
`

const SearchBar = styled.div`
  display:flex;
  justify-content:flex-end;
`

const SearchBtn = styled.button`
  width: 32px;
  height: 32px;
  margin: 36px 48px 31px 0;
  padding: 3px 4px 4px 3px;
  object-fit: contain;
  border-style: none;
  background-color: transparent;
`

{/* <Mypage> */}
const Mypage = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  padding-left: 50px;
  font-weight: 800;
`
const User = styled.div`
  width: 224px;
  height: 60px;
  display:flex;
  /* justify-content: space-between; */
  align-items: center;
`
const UserImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`
const My = styled.span`
  font-size: 40px;
`
const UserTog = styled.img`
  margin-left: 0px;
`
const UserName = styled.span`
  font-size: 24px;
`
{/* <Category> */}
const Category = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #cacaca;
  padding-left: 50px;
  padding-right: 121px;
  margin-top: 50px;
  font-weight: 800;
`
const Notice = styled.span`
  
`
const Event = styled.span`
  
`
const FAQ = styled.span`
  color: #ff1b6d;
  border-bottom: 2px #ff1b6d solid;
`
const QnA = styled.span`
  
`
{/* <QuestionList> */}
const QuestionList = styled.ul`
  height: 692px;
  border-top: 1px solid #cacaca;
  border-bottom: 1px solid #cacaca;
  margin: 53px 0 0 0;
  padding: 9px 50px 26px 40.5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const QuestionLi = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Qn = styled.div`
  color: #adadad;
  font-size: 18px;
  margin-bottom: 10px;
`
const Question = styled.div`
  color: #444444;
  font-size: 24px;
`
const ShowBtn = styled.img`
  width: 60px;
  height: 60px;
  /* margin-right: 40.5px; */
  `

{/* <Buttons> */}
const Buttons = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 5px; */
`
const Home = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: pink; */
`
const HomeBtn = styled.img`

`
const Loca = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LocaBtn = styled.img`

`
const Like = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LikeBtn = styled.img`

`
const MyMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MyMainBtn = styled.img`

`

// import {MyDiv, Title, IdInput, PasswordInput, LogtinButton, Wrapper} from '../../styles/Example'

export default function EmotionPage(){

  // return 위쪽은 JavaScript 쓰는 곳
  // return 아래는 HTML 쓰는 곳
  return(
    <Box>

      <StatusBar>
        <Time>12:30</Time>
      </StatusBar>

      <SearchBar>
        <SearchBtn>
          <img src="Search.svg"/>
        </SearchBtn>
      </SearchBar>
      
      <Mypage>
        <My>마이</My>
        <User>
        <UserImg src="ProfileImg.png"/>
        <UserName>임정아</UserName>
        <UserTog src="togle.svg"></UserTog>
        </User>
      </Mypage>

      <Category>
        <Notice>공지사항</Notice>
        <Event>이벤트</Event>
        <FAQ>FAQ</FAQ>
        <QnA>Q&A</QnA>
      </Category>

      <QuestionList>
        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 01</Qn>
            <Question>리뷰 작성은 어떻게 하나요?</Question>
          </QuestionBox>
          <ShowBtn src="showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 02</Qn>
            <Question>리뷰 수정/삭제는 어떻게 하나요?</Question>
          </QuestionBox>
          <ShowBtn src="showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 03</Qn>
            <Question>아이디/비밀번호를 잊어버렸어요.</Question>
          </QuestionBox>
          <ShowBtn src="showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 04</Qn>
            <Question>회원탈퇴를 하고싶어요.</Question>
          </QuestionBox>
          <ShowBtn src="showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 05</Qn>
            <Question>출발지 설정은 어떻게 하나요?</Question>
          </QuestionBox>
          <ShowBtn src="showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 06</Qn>
            <Question>비밀번호를 변경하고 싶어요.</Question>
          </QuestionBox>
          <ShowBtn src="showBtn.svg"></ShowBtn>
        </QuestionLi>
      </QuestionList>

      <Buttons>
        <Home>
          <HomeBtn src="home.svg"></HomeBtn>
          홈
        </Home>
        <Loca>
          <LocaBtn src="location.svg"></LocaBtn>
          잇츠로드
        </Loca>
        <Like>
          <LikeBtn src="love.svg"></LikeBtn>
          마이찜
        </Like>
        <MyMain>
          <MyMainBtn src="my.svg"></MyMainBtn>
          마이
        </MyMain>
      </Buttons>

    </Box>
  )

}