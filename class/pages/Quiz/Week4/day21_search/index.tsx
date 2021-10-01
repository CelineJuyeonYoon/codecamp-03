import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";
import { v4 as key } from "uuid";
import _ from "lodash";

const Wrapper = styled.span`
  display: flex;
  justify-content: space-between;
`;
const Column = styled.span`
  padding: 0px 10px;
`;
const Page = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;
interface Iprops {
  isMatched: boolean;
}
const MyWord = styled.span`
  color: ${(props: Iprops) => (props.isMatched ? "red" : "black")};
`; // MyWord 컴포넌트의 isMatched를 props로 가져와서 조건부렌더링

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function MySearchPage() {
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const getDebounce = _.debounce((word) => {
    refetch({ search: word, page: 1 }); // 수업때는 page: 1 안넣어줘서 이전페이지값으로 refetch됐음
    setKeyword(word);
  }, 500); // 0.5초 후에 실행

  function onChangeSearch(event) {
    getDebounce(event.target.value);
    // setSearch(event.target.value);
  }

  // function onClickSearch() {
  //   setKeyword(search);
  //   refetch({ search });
  // }

  function onClickPage(event) {
    refetch({ search: keyword, page: Number(event.target.id) });
  }

  return (
    <>
      검색어: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <Wrapper key={el._id}>
          <Column>{el.writer}</Column>
          <Column>
            {el.title // 안녕하세요
              .replaceAll(keyword, `^^${keyword}^^`) // keyword: 안녕 => ^^안녕^^하세요
              .split("^^") // ["안녕", "하세요"]
              .map((el) => (
                <MyWord key={key()} isMatched={keyword === el}>
                  {el}
                </MyWord>
              ))}
          </Column>
          <Column>{el.contents}</Column>
          <Column>{el.createdAt}</Column>
        </Wrapper>
      ))}
      {new Array(10).fill(1).map((el, index) => (
        <Page key={key()} onClick={onClickPage} id={el + index}>
          {el + index}
        </Page>
      ))}
    </>
  );
}
