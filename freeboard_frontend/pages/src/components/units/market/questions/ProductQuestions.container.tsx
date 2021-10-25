import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductQuestionsUI from "./ProductQuestions.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./ProductQuestions.queries";
import { GlobalContext } from "../../../../../_app";
import { useContext } from "react";

export default function ProductQuestions() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.productid },
  });
  const { userInfo } = useContext(GlobalContext);
  return <ProductQuestionsUI data={data} userInfo={userInfo} />;
}
