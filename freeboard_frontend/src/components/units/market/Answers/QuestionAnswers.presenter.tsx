import QuestionAnswersUIItem from "./QuestionAnswers.presenterItem";

export default function QuestionAnswersUI(props: any) {
  return (
    <>
      {props.data &&
        props.data?.fetchUseditemQuestionAnswers.map((el: any) => (
          <QuestionAnswersUIItem
            key={el._id}
            question={props.el}
            el={el}
            setIsAnswer={props.setIsAnswer}
            userInfo={props.userInfo}
          />
        ))}
    </>
  );
}
