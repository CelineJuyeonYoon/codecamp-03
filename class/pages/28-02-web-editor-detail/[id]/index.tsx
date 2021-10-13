import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.id,
    },
  });

  return (
    <>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>
        내용:
        {process.browser && (
          <div
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(data?.fetchBoard.contents),
            }} // Dompurify.sanitize 는 태그가 들어있으면 실행을 막는다.
          />
        )}
      </div>
    </>
  );
}
