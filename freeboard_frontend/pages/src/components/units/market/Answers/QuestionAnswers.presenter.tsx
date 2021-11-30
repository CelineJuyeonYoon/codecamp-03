import { gql, useQuery } from "@apollo/client";
import QuestionAnswersUIItem from "./QuestionAnswers.presenterItem";

const FETCH_USEDITEM_QUESTIONS_ANSWERS = gql`
  query fetchUseditemQuestionsAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionsAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
    }
  }
`;

export default function QuestionAnswerUI(props) {
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });

  return <QuestionAnswersUIItem />;
}
