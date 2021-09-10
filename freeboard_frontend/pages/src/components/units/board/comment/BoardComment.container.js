import CommentWriteUI from "./BoardComment.presenter";
import { CREATE_BOARD_COMMENT } from "../comment/BoardComment.queries";
import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";

export default function CommentWrite() {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
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

  function onClickRating1(event) {
    setRating(event.target.value);
    console.log(event.target.value);
  }
  function onClickRating2(event) {
    setRating(event.target.value);
    console.log(event.target.value);
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
      console.log(result.data.createBoardComment._id);
      alert("댓글이 추가되었습니다");
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
    />
  );
}
