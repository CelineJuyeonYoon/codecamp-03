import { gql, useMutation, useQuery } from "@apollo/client";
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
} from "../questions/ProductQuestions.styles";

export const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(useditemQuestionId: $useditemQuestionId) {
      _id
      contents
      useditemQuestion {
        _id
        # user {
        #   _id
        # }
        ###### 위 user 를 추가하면 fetch자체가 안됨..
      }
      createdAt
      user {
        _id
        name
        picture
      }
    }
  }
`;

export const DELETE_USEDITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!){
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId: $useditemQuestionAnswerId)
  }
`

export default function QuestionAnswer(props:) {
  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_USEDITEM_QUESTION_ANSWER)
  const { data: answerData } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });

  function onClickEdit() {
    setIsEdit(true);
  }

  function onClickAnswer() {
    setIsAnswer((prev) => !prev);
  }

  // async function onClickDeleteAnswer() {
  //   await deleteUseditemQuestionAnswer({ variables: {useditemQuestionAnswerId: } });
  // }

  return (
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
  );
}
