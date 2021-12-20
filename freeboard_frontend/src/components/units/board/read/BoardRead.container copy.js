import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardReadUI from "./BoardRead.presenter";
import CommentWriteUI from "../comment/CommentWrite.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardRead.queries";
import { CREATE_BOARD_COMMENT } from "../comment/CommentWrite.queries";

export default function BoardRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function onClickDelete() {
    await deleteBoard({
      variables: { boardId: router.query.id },
    });
    alert("게시물이 삭제되었습니다.");
    router.push(`/boards/board_list`);
  }

  function onClickToEdit() {
    router.push(`/boards/board_read/${router.query.id}/edit`);
  }
  // ################################################################################
  // ####################### 아래는 댓글부분 ############################################
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [writer, setWriter] = useState("익명");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(4);
  const [contents, setContents] = useState("");
  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickRating1() {
    setRating(1);
  }
  function onClickRating2() {
    setRating(2);
  }
  function onClickRating3() {
    setRating(3);
  }
  function onClickRating4() {
    setRating(4);
  }
  function onClickRating5() {
    setRating(5);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  async function onClickCommentSubmit() {
    if (contents !== "" && rating !== 0) {
      const result = await createBoardComment({
        variables: {
          boardId: router.query.id,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
      });
      alert("댓글이 추가되었습니다");
    }
  }

  return (
    <div>
      <BoardReadUI
        data={data}
        router={router}
        onClickDelete={onClickDelete}
        onClickToEdit={onClickToEdit}
      />
      <CommentWriteUI
        data={data}
        router={router}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onClickRating1={onClickRating1}
        onClickRating2={onClickRating2}
        onClickRating3={onClickRating3}
        onClickRating3={onClickRating4}
        onClickRating3={onClickRating5}
        onChangeContents={onChangeContents}
        onClickCommentSubmit={onClickCommentSubmit}
      />
    </div>
  );
}
