import MarketMainUI from "./ProductList.presenter";
import { FETCH_USEDITEMS } from "./ProductList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MarketMain() {
  const { data } = useQuery(FETCH_USEDITEMS);
  const router = useRouter();
  const [onSale, setOnSale] = useState(true);
  const [soldOut, setSoldOut] = useState(false);

  function onClickToWrite() {
    router.push("/market/new");
  }

  function onClickOnSale() {
    setOnSale(true);
    setSoldOut(false);
  }

  function onClickSoldOut() {
    setOnSale(false);
    setSoldOut(true);
  }

  return (
    <MarketMainUI
      data={data}
      onClickToWrite={onClickToWrite}
      onClickOnSale={onClickOnSale}
      onClickSoldOut={onClickSoldOut}
      onSale={onSale}
      soldOut={soldOut}
    />
  );
}
