import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USEDITEM } from "./ProductDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.productid },
  });

  return <ProductDetailUI data={data} />;
}
