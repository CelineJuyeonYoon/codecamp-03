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

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  margin: 20px;
`;

export default function EventBubblingPage() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickRow(event) {
    alert("클릭!");
    alert(event.currentTarget.id); // 부모의 id를 가리킴
  }
  // 이벤트 버블링을 통해, 자식태그를 클릭해도 부모를 클릭한 것과 똑같이 실행된다.
  return (
    <>
      <div>이벤트버블링</div>
      <div>
        {data?.fetchBoards.map((el) => (
          <Row key={el._id} id={el._id} onClick={onClickRow}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
            <Column>{el.createdAt}</Column>
          </Row>
        ))}
      </div>
    </>
  );
}
