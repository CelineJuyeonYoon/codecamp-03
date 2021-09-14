import CommentWriteUI from "./CommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "../commentList/CommentList.queries";

export default function CommentWrite(props) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [writer, setWriter] = useState("익명");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState();
  const [contents, setContents] = useState("");
  function onChangeWriter(event) {
    setWriter(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeContents(event) {
    setContents(event.target.value);
  }

  function onClickRating1() {
    setRating(1);
    console.log(rating);
  }
  function onClickRating2() {
    setRating(2);
    console.log(rating);
  }
  function onClickRating3() {
    setRating(3);
    console.log(rating);
  }
  function onClickRating4() {
    setRating(4);
    console.log(rating);
  }
  function onClickRating5() {
    setRating(5);
    console.log(rating);
  }

  async function onClickCommentSubmit() {
    if (contents !== "" && rating !== 0) {
      await createBoardComment({
        variables: {
          boardId: router.query.id,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      console.log(router.query.id);
      alert(`댓글이 추가되었습니다`);
    }
  }

  async function onClickCommentEdit(event) {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
      return;
    }
    if (!password) {
      alert("비밀번호가 입력되지 않았습니다.");
      return;
    }
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: event.target.id,
          password,
          updateBoardCommentInput: {
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      props.setIsEdit?.(false); // 수정버튼 눌러서 수정되면 다시 수정박스 닫기!
      console.log(router.query.id);
      alert(`댓글이 수정되었습니다`);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <CommentWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onClickRating1={onClickRating1}
      onClickRating2={onClickRating2}
      onClickRating3={onClickRating3}
      onClickRating4={onClickRating4}
      onClickRating5={onClickRating5}
      onChangeContents={onChangeContents}
      onClickCommentSubmit={onClickCommentSubmit}
      onClickCommentEdit={onClickCommentEdit}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
