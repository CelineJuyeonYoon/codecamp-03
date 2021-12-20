import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USEDITEM_QUESTIONS } from "../../../units/market/questions/ProductQuestions.queries";

export const Wrapper = styled.div`
  padding-bottom: 20px;
`;
export const CommentHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;
export const CommentImg = styled.img``;
export const Comment = styled.span`
  margin-left: 14px;
  font-size: 18px;
  font-weight: 500;
`;

export const CommentInput = styled.textarea`
  width: 1200px;
  height: 108px;
  margin-top: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 20px;
  padding-top: 20px;
  resize: none;
  display: block;
`;
export const CommentSubmitBar = styled.div`
  width: 1200px;
  height: 51px;
  border: 1px solid #bdbdbd;
  border-top: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CommentCount = styled.span`
  color: #bdbdbd;
  padding-left: 20px;
`;
export const Button = styled.button`
  background-color: ${(props: any) =>
    props.response === true ? "#FFD600" : "black"};
  color: white;
  border-style: none;
  width: 91px;
  height: 52px;
  cursor: pointer;
`;

const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      user {
        name
      }
    }
  }
`;

export default function Comment01(props: any) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);

  function onChangeQuestion(event: any) {
    setContents(event.target.value);
  }

  const onClickSubmit = async () => {
    const result = await createUseditemQuestion({
      variables: {
        useditemId: router.query.productid,
        createUseditemQuestionInput: {
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
  };

  return (
    <Wrapper>
      <CommentHead>
        <CommentImg src="/images/comment.png" />
        <Comment>{props.name}</Comment>
      </CommentHead>
      <CommentInput
        onChange={onChangeQuestion}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        // defaultValue={props.el?.contents}
        maxLength={100}
      />
      <CommentSubmitBar>
        <CommentCount>{contents.length}/100</CommentCount>
        <Button onClick={onClickSubmit}>{props.name}</Button>
      </CommentSubmitBar>
    </Wrapper>
  );
}
// name, contents, onClick, onChange, response
