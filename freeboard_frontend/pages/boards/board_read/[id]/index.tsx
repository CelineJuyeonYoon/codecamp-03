import BoardRead from "../../../../src/components/units/board/read/BoardRead.container";
import CommentWrite from "../../../../src/components/units/board/comment/CommentWrite.container";
import CommentList from "../../../../src/components/units/board/commentList/CommentList.container";

export default function BoardReadPage() {
  return (
    <>
      <BoardRead />
      <CommentWrite />
      <CommentList />
    </>
  );
}
