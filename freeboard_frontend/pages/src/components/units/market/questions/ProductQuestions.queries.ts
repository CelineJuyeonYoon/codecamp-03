import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      createdAt
      user {
        _id
        name
        picture
      }
    }
  }
`;

export const DELETE_USEDITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

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
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
