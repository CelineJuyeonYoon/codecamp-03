import {
  Wrapper,
  Row,
  Header,
  HeadNumber,
  HeadTitle,
  HeadWriter,
  HeadDate,
  Column,
  Number,
  Title,
  Writer,
  Date
} from './BoardList.styles'

export default function BoardListUI(props){

  return(
    <Wrapper>
        <Row>
          <HeadNumber>번호</HeadNumber>
          <HeadTitle>제목</HeadTitle>
          <HeadWriter>작성자</HeadWriter>
          <HeadDate>날짜</HeadDate>
        </Row>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <Number>{index+1}</Number>
          <Title>{el.title}</Title>
          <Writer>{el.writer}</Writer>
          <Date>{el.createdAt.slice(0, 10)}</Date>
        </Row>
      )).reverse()}
    </Wrapper>
  )
}