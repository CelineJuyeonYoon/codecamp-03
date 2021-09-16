import {
  Wrapper,
  BoardList,
  Row,
  Header,
  HeadNumber,
  HeadTitle,
  HeadWriter,
  HeadDate,
  Number,
  Title,
  Writer,
  Date,
  SearchTitle,
  SearchBar,
  SearchDate,
  SearchBtn,
  Footer,
  BoardWriteBtn,
  BoardWrite,
  Page,
  Pages,
  ToPrev,
  ToNext,
} from "./BoardList.styles";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      <SearchBar>
        <SearchTitle type="text" placeholder="제목을 검색해주세요" />
        <SearchDate type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" />
        <SearchBtn>검색하기</SearchBtn>
      </SearchBar>
      <BoardList>
        <Header>
          <HeadNumber>번호</HeadNumber>
          <HeadTitle>제목</HeadTitle>
          <HeadWriter>작성자</HeadWriter>
          <HeadDate>날짜</HeadDate>
        </Header>
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id}>
            <Number>{10 - index}</Number> {/*가장 최신글이 맨 위, 글번호 10번*/}
            <Title onClick={props.onClickToDetailPage} id={el._id}>
              {el.title}
            </Title>
            <Writer>{el.writer}</Writer>
            <Date>{el.createdAt.slice(0, 10)}</Date>
          </Row>
        ))}
        {/* )).reverse()} */}
      </BoardList>
      <Footer>
        <Pages>
          <ToPrev
            onClick={props.onClickPrevPage}
            src="../../../images/toLeft.png"
          />
          {new Array(10).fill(1).map(
            (_, index) =>
              props.startPage + index <= props.lastPage && (
                <Page
                  key={props.startPage + index}
                  id={String(props.startPage + index)}
                  onClick={props.onClickPage}
                >
                  {props.startPage + index}
                </Page>
              )
          )}
          <ToNext
            onClick={props.onClickNextPage}
            src="../../../images/toRight.png"
          />
        </Pages>
        <BoardWriteBtn>
          <img src="../../../images/boardwrite.png" />
          <BoardWrite onClick={props.onClickToBoardWrite}>
            게시물 등록하기
          </BoardWrite>
        </BoardWriteBtn>
      </Footer>
    </Wrapper>
  );
}
