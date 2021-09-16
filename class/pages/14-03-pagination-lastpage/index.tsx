import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
// 총 게시물 개수 가져오기
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function PaginationNextPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  // data를 위에서 썼기 때문에 이런식으로 다른 변수를 설정해줘야함.
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
  }
  function onClickPrevPage() {
    if (startPage === 1) return; // startPage가 1페이지면, 작동 X
    setStartPage((prev) => prev - 10);
  }
  function onClickNextPage() {
    if (startPage + 10 > lastPage) return; // 페이지가 더이상 없을 때, 작동 X
    setStartPage((prev) => prev + 10);
  }

  return (
    <>
      <div>페이지네이션(마지막페이지)</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      <span onClick={onClickPrevPage}>이전</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          startPage + index <= lastPage && ( // 조건부 렌더링(마지막페이지까지만 보여주기)
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
      )}
      <span onClick={onClickNextPage}>다음</span>
    </>
  );
}
