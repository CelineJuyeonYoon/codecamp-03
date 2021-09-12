import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARD = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
`;

const Column = styled.div`
  width: 20%;
`;

const Table = styled.div``;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function MapSelectorPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD); // [{}, {}, {}]

  async function onClickDelete(event) {
    await deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARD }],
    });
  }

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <Row key={el.number}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{index}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
