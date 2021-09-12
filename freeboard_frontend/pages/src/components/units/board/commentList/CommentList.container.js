import CommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CommentList() {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.id },
  });

  function onClickEditComment() {
    setIsEdit(true);
  }

  return (
    <CommentListUI
      data={data}
      onClickEditComment={onClickEditComment}
      isEdit={isEdit}
    />
  );
}
