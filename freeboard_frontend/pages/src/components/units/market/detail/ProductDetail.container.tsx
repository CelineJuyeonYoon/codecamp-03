import ProductDetailUI from "./ProductDetail.presenter";
import { FETCH_USEDITEM, TOGGLE_USEDITEM_PICK } from "./ProductDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../_app";
import { useContext } from "react";

export default function ProductDetail() {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: router.query.productid },
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const { userInfo } = useContext(GlobalContext);

  function onClickToList() {
    router.push("/market");
  }

  function onClickToEdit() {
    router.push(`/market/${router.query.productid}/edit`);
  }

  async function onClickPick() {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query.productid,
      },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: router.query.productid },
        },
      ],
    });
    // refetch({ useditemId: router.query.productid }); // 얘도가능
  }

  return (
    <ProductDetailUI
      data={data}
      onClickToList={onClickToList}
      onClickToEdit={onClickToEdit}
      router={router}
      onClickPick={onClickPick}
      userInfo={userInfo}
    />
  );
}
