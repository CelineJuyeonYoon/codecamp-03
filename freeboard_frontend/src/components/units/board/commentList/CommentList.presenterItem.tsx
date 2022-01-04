import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import CommentWrite from "../comment/CommentWrite.container";
import {
  Wrapper,
  CommentWrapper,
  Comment,
  ProfileImg,
  CommentInfo,
  CommentWriterAndRating,
  CommentWriter,
  CommentRating,
  CommentContent,
  CommentDate,
  CommentButtons,
  CommentEditBtn,
  CommentDeleteBtn,
  StarRating,
} from "./CommentList.styles";

const DELETE_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export default function CommentListUIItem(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  async function onClickEditComment() {
    setIsEdit(true);
  }

  async function onClickDeleteComment(event: any) {
    const myPassword = prompt("비밀번호를 입력해주세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <>
      {/* 수정하기 누르기 전, 댓글상세 UI */}
      {!isEdit && (
        <Wrapper>
          <CommentWrapper key={props.el._id}>
            <Comment>
              <ProfileImg src="/images/profile.png" />
              <CommentInfo>
                <CommentWriterAndRating>
                  <CommentWriter>{props.el.writer}</CommentWriter>
                  <CommentRating>
                    <StarRating value={props.el.rating} disabled />
                  </CommentRating>
                </CommentWriterAndRating>
                <CommentContent>{props.el.contents}</CommentContent>
                <CommentDate>{props.el.createdAt.slice(0, 10)}</CommentDate>
              </CommentInfo>
            </Comment>
            <CommentButtons>
              <CommentEditBtn
                src="/images/edit.png"
                onClick={onClickEditComment}
                id={props.el._id}
              ></CommentEditBtn>
              <CommentDeleteBtn
                onClick={onClickDeleteComment}
                src="/images/delete.png"
                id={props.el._id}
              ></CommentDeleteBtn>
            </CommentButtons>
          </CommentWrapper>
        </Wrapper>
      )}
      {/* 수정하기 눌렀을 때, 댓글수정 (댓글등록component 재사용!!) */}
      {isEdit && (
        <CommentWrite isEdit={isEdit} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
