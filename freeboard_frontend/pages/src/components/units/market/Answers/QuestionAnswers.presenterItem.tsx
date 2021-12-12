import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
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
} from "./QuestionAnswers.styles";
import {
  FETCH_USEDITEM_QUESTION_ANSWERS,
  DELETE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM,
} from "./QuestionAnswers.queries";
import EditAnswer from "../../../commons/answers/02/editAnswer";
import router from "next/router";

export default function QuestionAnswersUIItem(props: any) {
  const [isEditAnswer, setIsEditAnswer] = useState(false);
  const [contents, setContents] = useState("");

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.productid },
  });

  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  function onClickAnswer() {
    props.setIsAnswer((prev: any) => !prev);
  }

  function onClickEditBtn() {
    setIsEditAnswer(true);
    setContents(props.el.contents);
  }

  function onChangeAnswer(event: any) {
    if (event.target.value.length > 100) {
      alert("답글은 최대 100자까지 입력 가능합니다.");
      return;
    }
    setContents(event.target.value);
  }

  async function onClickEditAnswer(event: any) {
    {
      contents &&
        (await updateUseditemQuestionAnswer({
          variables: {
            useditemQuestionAnswerId: event.target.id,
            updateUseditemQuestionAnswerInput: { contents },
          },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTION_ANSWERS,
              variables: { useditemQuestionId: props.question._id },
            },
          ],
        }));
    }
    setIsEditAnswer(false);
  }

  async function onClickDeleteAnswer(event: any) {
    await deleteUseditemQuestionAnswer({
      variables: { useditemQuestionAnswerId: event.target.id },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.question._id },
        },
      ],
    });
  }

  return (
    <>
      {!isEditAnswer ? (
        <AnswerWrapper key={props.el?._id}>
          <Answer>
            <Arrow src="/images/response.png" />
            <AnswerWriterProfile src={props.el?.user.picture} />
            <AnswerInfo>
              <AnswerWriter>{props.el?.user.name}</AnswerWriter>
              <AnswerContents>{props.el?.contents}</AnswerContents>
            </AnswerInfo>
          </Answer>
          {data?.fetchUseditem.seller._id === props.userInfo._id && (
            <>
              {props.el?.user._id === props.userInfo?._id ? (
                <QuestionButtons>
                  <QuestionEditBtn
                    src="/images/edit.png"
                    onClick={onClickEditBtn}
                    id={props.el?._id}
                  ></QuestionEditBtn>
                  <QuestionDeleteBtn
                    src="/images/delete.png"
                    onClick={onClickDeleteAnswer}
                    id={props.el?._id}
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
            </>
          )}
        </AnswerWrapper>
      ) : (
        <EditAnswer
          name="답글수정"
          defaultValue={props.el.contents}
          onChangeAnswer={onChangeAnswer}
          onClickEditAnswer={onClickEditAnswer}
          contents={contents}
          id={props.el?._id}
        />
      )}
    </>
  );
}
