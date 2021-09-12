import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadUI from "./BoardRead.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardRead.queries";
import CommentWrite from "../comment/CommentWrite.container";
import CommentEdit from "../commentEdit/CommentUpdate.container";
import CommentList from "../commentList/CommentList.container";

export default function BoardRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function onClickDelete() {
    await deleteBoard({
      variables: { boardId: router.query.id },
      // refetchQueries: [{ query: FETCH_BOARD }],
    });
    alert("게시물이 삭제되었습니다.");
    router.push(`/boards/board_list`);
  }

  function onClickToEdit() {
    router.push(`/boards/board_read/${router.query.id}/edit`);
  }

  function onClickToList() {
    router.push(`../../boards/board_list`);
  }

  return (
    <div>
      <BoardReadUI
        data={data}
        router={router}
        onClickDelete={onClickDelete}
        onClickToEdit={onClickToEdit}
        onClickToList={onClickToList}
      />
      <CommentWrite />
      {/* <CommentEdit /> */}
      <CommentList />
    </div>
  );
}
