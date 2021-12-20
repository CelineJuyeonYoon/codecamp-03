import ProductQuestionsItem from "./ProductQuestions.presenterItem";

export default function ProductQuestionsUI(props: any) {
  if (!props.data?.fetchUseditemQuestions) return <></>;
  return props.data?.fetchUseditemQuestions.map((el: any) => (
    <div key={el._id}>
      <ProductQuestionsItem
        el={el}
        userInfo={props.userInfo}
        refetch={props.refetch}
      />
    </div>
  ));
}
