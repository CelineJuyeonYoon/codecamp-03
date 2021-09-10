import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import router from "next/router";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickToDetailPage() {
    router.push(`../../boards/board_read/${router.query.id}`);
  }

  return (
    <BoardListUI
      data={data}
      router={router}
      onClickToDetailPage={onClickToDetailPage}
    />
  );
}
