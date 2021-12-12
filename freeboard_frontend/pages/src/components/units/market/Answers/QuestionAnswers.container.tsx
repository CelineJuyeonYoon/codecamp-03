import { useQuery } from "@apollo/client";
import QuestionAnswersUI from "./QuestionAnswers.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./QuestionAnswers.queries";

export default function QuestionAnswers(props: any) {
  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });

  return (
    <QuestionAnswersUI
      data={data}
      el={props.el}
      setIsAnswer={props.setIsAnswer}
      userInfo={props.userInfo}
    />
  );
}
