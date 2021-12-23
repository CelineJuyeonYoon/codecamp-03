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
  // SearchTitle,
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
  TextToken,
} from "./BoardList.styles";
import SearchBars01 from "../../../commons/searchbars/Searchbars01";
import { v4 as key } from "uuid";

export default function BoardListUI(props: any) {
  return (
    <Wrapper>
      <SearchBar>
        {/* <SearchTitle type="text" placeholder="제목을 검색해주세요" /> */}
        <SearchBars01
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
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
        {props.data?.fetchBoards.map((el: any, index: any) => (
          <Row key={el._id} id={el._id} onClick={props.onClickToDetailPage}>
            <Number>{10 - index}</Number>
            {/* <Title id={el._id}>{el.title}</Title> */}
            <Title id={el._id}>
              {el.title
                .replaceAll(props.keyword, `^^${props.keyword}^^`)
                .split("^^")
                .map((el: any) => (
                  <TextToken key={key()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}
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
                  thisPage={props.thisPage}
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
