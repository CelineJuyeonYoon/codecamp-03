import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USEDITEM_QUESTIONS } from "../../../units/market/questions/ProductQuestions.queries";

const UPDATE_USEDITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

const Wrapper = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
`;
const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-top: 6px;
  border-radius: 50%;
`;
const CommentWrapper = styled.div`
  padding-left: 20px;
`;
const CommentWriter = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
const Comment = styled.div`
  width: 1140px;
  padding-top: 10px;
`;
const CommentInput = styled.textarea`
  width: 1140px;
  height: 64px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 20px;
  padding-top: 20px;
  resize: none;
  display: block;
`;
const CommentSubmitBar = styled.div`
  height: 51px;
  border: 1px solid #bdbdbd;
  border-top: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentCount = styled.span`
  color: #bdbdbd;
  padding-left: 20px;
`;
const Button = styled.button`
  background-color: #ffd600;
  border-style: none;
  width: 91px;
  height: 52px;
  font-weight: 500;
  cursor: pointer;
`;
const Button2 = styled.button`
  background-color: black;
  color: #fff;
  border-style: none;
  width: 91px;
  height: 52px;
  font-weight: 500;
  cursor: pointer;
`;

export default function Comment02(props: any) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  function onClickCancel() {
    props.setIsEdit(false);
  }

  function onChangeContents(event: any) {
    setContents(event.target.value);
  }

  async function onClickEditQuestion() {
    if (contents) {
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
          updateUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.productid },
          },
        ],
      });
    }
    props.setIsEdit(false);
  }

  return (
    <Wrapper>
      <ProfileImg src={props.el?.user.picture} />
      <CommentWrapper>
        <CommentWriter>{props.el?.user.name}</CommentWriter>
        <Comment>
          <CommentInput
            onChange={onChangeContents}
            defaultValue={props.el?.contents}
            maxLength={100}
          />
          <CommentSubmitBar>
            <CommentCount>{contents.length}/100</CommentCount>
            <div>
              <Button onClick={onClickEditQuestion}>{props.name}</Button>
              <Button2 onClick={onClickCancel}>수정취소</Button2>
            </div>
          </CommentSubmitBar>
        </Comment>
      </CommentWrapper>
    </Wrapper>
  );
}
