import MarketMainUI from "./ProductList.presenter";
import { FETCH_USEDITEMS } from "./ProductList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MarketMain() {
  const { data, fetchMore, refetch } = useQuery(FETCH_USEDITEMS);
  const router = useRouter();
  const [onSale, setOnSale] = useState(true);
  const [soldOut, setSoldOut] = useState(false);

  function onClickToDetail(event: any) {
    router.push(`/market/${event.target.id}`);
  }

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

  function onLoadProductMore() {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1, // 다음페이지
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  function onChangeKeyword(data: any) {}

  return (
    <MarketMainUI
      data={data}
      onClickToDetail={onClickToDetail}
      onClickToWrite={onClickToWrite}
      onClickOnSale={onClickOnSale}
      onClickSoldOut={onClickSoldOut}
      onSale={onSale}
      soldOut={soldOut}
      onLoadProductMore={onLoadProductMore}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
