import CommentListUIItem from "./CommentList.presenterItem";

export default function CommentListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <CommentListUIItem key={el._id} el={el} />
      ))}
    </>
  );
}
