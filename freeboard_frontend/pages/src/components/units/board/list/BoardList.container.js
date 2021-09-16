import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardList() {
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: fetchBoardsCountData } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(fetchBoardsCountData?.fetchBoardsCount / 10);

  function onClickToDetailPage(event) {
    router.push(`../../boards/board_read/${event.target.id}`);
  }

  function onClickToBoardWrite() {
    router.push(`../../boards/board_new`);
  }

  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
    console.log(event.target.id);
  }

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  return (
    <BoardListUI
      data={data}
      fetchBoardsCountData={fetchBoardsCountData}
      onClickToDetailPage={onClickToDetailPage}
      onClickToBoardWrite={onClickToBoardWrite}
      startPage={startPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      lastPage={lastPage}
    />
  );
}
