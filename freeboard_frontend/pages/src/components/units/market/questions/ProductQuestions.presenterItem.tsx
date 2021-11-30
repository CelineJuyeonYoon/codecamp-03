import {
  Wrapper,
  QuestionWrapper,
  Question,
  ProfileImg,
  QuestionInfo,
  QuestionWriter,
  QuestionContent,
  QuestionDate,
  QuestionEditBtn,
  QuestionButtons,
  QuestionDeleteBtn,
  QuestionAnswerBtn,
  AnswerWrapper,
  Answer,
  AnswerContents,
  AnswerWriter,
  AnswerWriterProfile,
  Arrow,
  AnswerButtons,
  AnswerInfo,
} from "./ProductQuestions.styles";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  FETCH_USEDITEM_QUESTION_ANSWERS,
  DELETE_USEDITEM_QUESTION_ANSWER,
} from "./ProductQuestions.queries";
import { FETCH_USEDITEM } from "../detail/ProductDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import Answer01 from "../../../commons/answers/01/answer01";
import Comment02 from "../../../commons/comments/02/comment02";

export default function ProductQuestionsItem(props: any) {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.productid,
    },
  });
  const { data: answerData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  async function onClickDeleteQuestion() {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.productid },
          },
        ],
      });
    } catch (err) {
      alert(err.message);
    }
  }

  function onClickEdit() {
    setIsEdit(true);
  }

  function onClickAnswer() {
    setIsAnswer((prev) => !prev);
  }

  async function onClickDeleteAnswer() {
    await deleteUseditemQuestionAnswer({ variables: {} });
  }

  return (
    <Wrapper>
      {!isEdit ? (
        <QuestionWrapper>
          <Question>
            <ProfileImg src={props.el?.user.picture} />
            <QuestionInfo>
              <QuestionWriter>{props.el?.user.name}</QuestionWriter>
              <QuestionContent>{props.el?.contents}</QuestionContent>
              <QuestionDate>{props.el?.createdAt.slice(0, 10)}</QuestionDate>
            </QuestionInfo>
          </Question>
          {props.el?.user._id === props.userInfo?._id && (
            <QuestionButtons>
              <QuestionEditBtn
                src="/images/edit.png"
                onClick={onClickEdit}
              ></QuestionEditBtn>
              <QuestionDeleteBtn
                src="/images/delete.png"
                onClick={onClickDeleteQuestion}
              ></QuestionDeleteBtn>
            </QuestionButtons>
          )}
          {data?.fetchUseditem.seller._id === props.userInfo?._id && (
            <QuestionAnswerBtn
              src="/images/question.png"
              onClick={onClickAnswer}
            ></QuestionAnswerBtn>
          )}
        </QuestionWrapper>
      ) : (
        <Comment02 name="수정하기" setIsEdit={setIsEdit} el={props?.el} />
      )}
      {/* 답글 */}
      {answerData &&
        answerData?.fetchUseditemQuestionAnswers.map((el) => (
          <AnswerWrapper key={el._id}>
            <Answer>
              <Arrow src="/images/response.png" />
              <AnswerWriterProfile src={el.user.picture} />
              <AnswerInfo>
                <AnswerWriter>{el.user.name}</AnswerWriter>
                <AnswerContents>{el.contents}</AnswerContents>
              </AnswerInfo>
            </Answer>
            {el?.user._id === props.userInfo?._id ? (
              <QuestionButtons>
                <QuestionEditBtn
                  src="/images/edit.png"
                  onClick={onClickEdit}
                ></QuestionEditBtn>
                <QuestionDeleteBtn
                  src="/images/delete.png"
                  onClick={onClickDeleteAnswer}
                ></QuestionDeleteBtn>
              </QuestionButtons>
            ) : (
              <AnswerButtons>
                <QuestionAnswerBtn
                  src="/images/question.png"
                  onClick={onClickAnswer}
                ></QuestionAnswerBtn>
              </AnswerButtons>
            )}
            {/* 내가 쓴 글의 댓글이면 답글버튼 보이기 */}
            {/* {el?.useditemQuestion?.user._id === props.userInfo?.email && (
              <AnswerButtons>
                <QuestionAnswerBtn
                  src="/images/question.png"
                  onClick={onClickAnswer}
                ></QuestionAnswerBtn>
              </AnswerButtons>
            )} */}
          </AnswerWrapper>
        ))}
      {isAnswer && (
        <Answer01 name="답글등록" el={props.el} setIsAnswer={setIsAnswer} />
      )}
    </Wrapper>
  );
}
