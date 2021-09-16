import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

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

const Page = styled.span`
  margin: 10px;
  cursor: pointer;
`;

export default function PaginationBasicPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: 1 }, // 처음에는 1페이지를 fetch
  });

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) }); // page는 Int니까 숫자로 바꿔주기!
  }

  return (
    <>
      <div>페이지네이션</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>{el.title}</div>
        ))}
      </div>
      <br />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <Page key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </Page> // el이 숫자여서 html이 읽을 수 있게 String으로!
      ))}
    </>
  );
}
