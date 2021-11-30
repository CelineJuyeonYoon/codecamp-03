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
  QuestionEditWrapper,
  UpdateContentWrapper,
  UpdateContentInput,
  UpdateContentBtn,
  UpdateCancelBtn,
  SubmitAnswer,
  QuestionAnswerBtn,
  QuestionAnswerInput,
  AnswerSubmitBtn,
  AnswerWrapper,
  AnswerContents,
  AnswerWriter,
  AnswerWriterProfile,
  Arrow,
} from "./ProductQuestions.styles";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./ProductQuestions.queries";
import { FETCH_USEDITEM } from "../detail/ProductDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductQuestionsItem(props: any) {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
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
  const [contents, setContents] = useState("");
  const [answer, setAnswer] = useState("");

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

  function onClickCancel() {
    setIsEdit(false);
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
    setIsEdit(false);
  }

  function onClickAnswer() {
    setIsAnswer((prev) => !prev);
  }

  function onChangeAnswer(event: any) {
    setAnswer(event.target.value);
  }

  function onClickSubmitAnswer() {
    createUseditemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: answer,
        },
        useditemQuestionId: props.el?._id,
      },
    });
  }

  return (
    <Wrapper>
      {!isEdit ? (
        <QuestionWrapper>
          <Question>
            <ProfileImg src="/images/profile.png" />
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
        <QuestionEditWrapper>
          <ProfileImg src="/images/profile.png" />
          <UpdateContentWrapper>
            <QuestionWriter>{props.el?.user.name}</QuestionWriter>
            <UpdateContentInput
              onChange={onChangeContents}
              defaultValue={props.el?.contents}
            ></UpdateContentInput>
            <UpdateContentBtn onClick={onClickEditQuestion}>
              수정하기
            </UpdateContentBtn>
            <UpdateCancelBtn onClick={onClickCancel}>취소</UpdateCancelBtn>
          </UpdateContentWrapper>
        </QuestionEditWrapper>
      )}
      {answerData &&
        answerData?.fetchUseditemQuestionAnswers.map((el) => (
          <AnswerWrapper key={el._id}>
            <Arrow src="/images/response.png" />
            <AnswerWriterProfile src={el.user.picture} />
            <div>
              <AnswerWriter>{el.user.name}</AnswerWriter>
              <AnswerContents>{el.contents}</AnswerContents>
            </div>
          </AnswerWrapper>
        ))}
      {isAnswer && (
        <SubmitAnswer>
          <Arrow src="/images/response.png" />
          <div>
            <QuestionAnswerInput
              placeholder="답글을 등록해주세요."
              onChange={onChangeAnswer}
            />
            <AnswerSubmitBtn onClick={onClickSubmitAnswer}>
              답글등록
            </AnswerSubmitBtn>
          </div>
        </SubmitAnswer>
      )}
    </Wrapper>
  );
}
