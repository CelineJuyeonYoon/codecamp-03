import {
  Box,
  Buttons,
  Category,
  Event,
  FAQ,
  Home,
  HomeBtn,
  Like,
  LikeBtn,
  Loca,
  LocaBtn,
  My,
  MyMain,
  MyMainBtn,
  Mypage,
  Notice,
  Qn,
  QnA,
  Question,
  QuestionBox,
  QuestionLi,
  QuestionList,
  SearchBar,
  SearchBtn,
  ShowBtn,
  StatusBar,
  Time,
  User,
  UserImg,
  UserName,
  UserTog
} from '../../../styles/01-faq-style';

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
          <img src="../../images/Search.svg"/>
        </SearchBtn>
      </SearchBar>
      
      <Mypage>
        <My>마이</My>
        <User>
        <UserImg src="../../images/ProfileImg.png"/>
        <UserName>임정아</UserName>
        <UserTog src="../../images/togle.svg"></UserTog>
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
          <ShowBtn src="../../images/showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 02</Qn>
            <Question>리뷰 수정/삭제는 어떻게 하나요?</Question>
          </QuestionBox>
          <ShowBtn src="../../images/showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 03</Qn>
            <Question>아이디/비밀번호를 잊어버렸어요.</Question>
          </QuestionBox>
          <ShowBtn src="../../images/showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 04</Qn>
            <Question>회원탈퇴를 하고싶어요.</Question>
          </QuestionBox>
          <ShowBtn src="../../images/showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 05</Qn>
            <Question>출발지 설정은 어떻게 하나요?</Question>
          </QuestionBox>
          <ShowBtn src="../../images/showBtn.svg"></ShowBtn>
        </QuestionLi>

        <QuestionLi>
          <QuestionBox>
            <Qn>Q. 06</Qn>
            <Question>비밀번호를 변경하고 싶어요.</Question>
          </QuestionBox>
          <ShowBtn src="../../images/showBtn.svg"></ShowBtn>
        </QuestionLi>
      </QuestionList>

      <Buttons>
        <Home>
          <HomeBtn src="../../images/home.svg"></HomeBtn>
          홈
        </Home>
        <Loca>
          <LocaBtn src="../../images/location.svg"></LocaBtn>
          잇츠로드
        </Loca>
        <Like>
          <LikeBtn src="../../images/love.svg"></LikeBtn>
          마이찜
        </Like>
        <MyMain>
          <MyMainBtn src="../../images/my.svg"></MyMainBtn>
          마이
        </MyMain>
      </Buttons>

    </Box>
  )

}