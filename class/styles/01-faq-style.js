import styled from '@emotion/styled'

export const Box = styled.div`
  /* padding: 0;
  margin: 0; */
  width: 640px;
  height: 1140px;
  /* background-color: #fff; */
  border: solid 1px darkgrey;
  font-family: SpoqaHanSans-Bold;
`

{/* <SearchBar> */}
export const StatusBar = styled.div`
  width: 640px;
  height: 43px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
`

export const Time = styled.span`
  margin-right: 15px;
  width: 58px;
  height: 30px;
  font-size: 25px;
  font-weight: 600;
  opacity: 0.7;
`

export const SearchBar = styled.div`
  display:flex;
  justify-content:flex-end;
`

export const SearchBtn = styled.button`
  width: 32px;
  height: 32px;
  margin: 36px 48px 31px 0;
  padding: 3px 4px 4px 3px;
  object-fit: contain;
  border-style: none;
  background-color: transparent;
`

{/* <Mypage> */}
export const Mypage = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  padding-left: 50px;
  font-weight: 800;
`
export const User = styled.div`
  width: 224px;
  height: 60px;
  display:flex;
  /* justify-content: space-between; */
  align-items: center;
`
export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`
export const My = styled.span`
  font-size: 40px;
`
export const UserTog = styled.img`
  margin-left: 0px;
`
export const UserName = styled.span`
  font-size: 24px;
`
{/* <Category> */}
export const Category = styled.div`
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
export const Notice = styled.span`
  
`
export const Event = styled.span`
  
`
export const FAQ = styled.span`
  color: #ff1b6d;
  border-bottom: 2px #ff1b6d solid;
`
export const QnA = styled.span`
  
`
{/* <QuestionList> */}
export const QuestionList = styled.ul`
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
export const QuestionLi = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const QuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Qn = styled.div`
  color: #adadad;
  font-size: 18px;
  margin-bottom: 10px;
`
export const Question = styled.div`
  color: #444444;
  font-size: 24px;
`
export const ShowBtn = styled.img`
  width: 60px;
  height: 60px;
  /* margin-right: 40.5px; */
  `

{/* <Buttons> */}
export const Buttons = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-top: 5px; */
`
export const Home = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
`
export const HomeBtn = styled.img`

`
export const Loca = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LocaBtn = styled.img`

`
export const Like = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LikeBtn = styled.img`

`
export const MyMain = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MyMainBtn = styled.img`

`