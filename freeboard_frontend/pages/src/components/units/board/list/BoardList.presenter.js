import {
  Wrapper,
  Row,
  Header,
  Column
} from './BoardList.styles'

export default function BoardListUI(props){

  return(
    <Wrapper>
        <Row>
          <Header>번호</Header>
          <Header>제목</Header>
          <Header>작성자</Header>
          <Header>날짜</Header>
        </Row>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <Column>{index+1}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt.slice(0, 10)}</Column>
        </Row>
      )).reverse()}
    </Wrapper>
  )
}