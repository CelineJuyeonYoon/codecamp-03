import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  function onClickToDetailPage(event) {
    router.push(`../../boards/board_read/${event.target.id}`);
  }

  function onClickToBoardWrite() {
    router.push(`../../boards/board_new`);
  }

  return (
    <BoardListUI
      data={data}
      onClickToDetailPage={onClickToDetailPage}
      onClickToBoardWrite={onClickToBoardWrite}
    />
  );
}
