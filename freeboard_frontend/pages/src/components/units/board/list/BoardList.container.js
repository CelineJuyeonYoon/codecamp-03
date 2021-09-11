import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useQuery } from "@apollo/client";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  function onClickToDetailPage(event) {
    router.push(`../../boards/board_read/${event.target.id}`);
  }

  return <BoardListUI data={data} onClickToDetailPage={onClickToDetailPage} />;
}
