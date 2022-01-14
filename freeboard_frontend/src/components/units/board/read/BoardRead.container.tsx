import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardReadUI from "./BoardRead.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardRead.queries";

export default function BoardRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  function onClickLike() {
    likeBoard({
      variables: { boardId: router.query.id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.id },
        },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: router.query.id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.id },
        },
      ],
    });
  }

  function onClickToList() {
    router.push(`../../boards`);
  }

  function onClickToEdit() {
    router.push(`/boards/board_read/${router.query.id}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.id } });
      alert("게시물이 삭제되었습니다.");
      router.push(`/boards`);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <BoardReadUI
      data={data}
      onClickDelete={onClickDelete}
      onClickToEdit={onClickToEdit}
      onClickToList={onClickToList}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
