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
} from "./ProductQuestions.styles";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  CREATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./ProductQuestions.queries";
import { FETCH_USEDITEM } from "../detail/ProductDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import Answer01 from "../../../commons/answers/01/answer01";
import Comment02 from "../../../commons/comments/02/comment02";
import QuestionAnswers from "../Answers/QuestionAnswers.container";

export default function ProductQuestionsItem(props: any) {
  const router = useRouter();
  const [contents, setContents] = useState("");

  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  );
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: router.query.productid,
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
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function onClickSubmitAnswer() {
    if (!contents) {
      alert("답글을 입력해주세요.");
      return;
    }
    await createUseditemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents,
        },
        useditemQuestionId: props.el?._id,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTION_ANSWERS,
          variables: { useditemQuestionId: props.el._id },
        },
      ],
    });
    setIsAnswer(false);
    setContents("");
  }

  function onClickEdit() {
    setIsEdit(true);
  }

  function onClickAnswer() {
    setIsAnswer((prev) => !prev);
  }

  function onChangeAnswer(event: any) {
    setContents(event.target.value);
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
      <QuestionAnswers
        setIsAnswer={setIsAnswer}
        el={props.el}
        userInfo={props.userInfo}
      />
      {isAnswer && (
        <Answer01
          name="답글등록"
          el={props.el}
          setIsAnswer={setIsAnswer}
          onChangeAnswer={onChangeAnswer}
          onClickSubmitAnswer={onClickSubmitAnswer}
          contents={contents}
        />
      )}
    </Wrapper>
  );
}
