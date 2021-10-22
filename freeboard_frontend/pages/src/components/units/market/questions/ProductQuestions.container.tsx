import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductQuestionsUI from "./ProductQuestions.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./ProductQuestions.queries";

export default function ProductQuestions() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.productid },
  });

  return <ProductQuestionsUI data={data} />;
}
