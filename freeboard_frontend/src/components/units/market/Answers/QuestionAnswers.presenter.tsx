import QuestionAnswersUIItem from "./QuestionAnswers.presenterItem";

export default function QuestionAnswersUI(props: any) {
  return (
    <>
      {props.data &&
        props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
          <QuestionAnswersUIItem
            question={props.el}
            el={el}
            setIsAnswer={props.setIsAnswer}
            userInfo={props.userInfo}
          />
        ))}
    </>
  );
}
