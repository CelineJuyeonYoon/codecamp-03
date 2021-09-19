import { useQuery } from "@apollo/client";
import CommentListUIItem from "./CommentList.presenterItem";
import {FETCH_BOARD_COMMENTS} from './CommentList.queries' // 댓글 조회 query import
import InfiniteScroll from 'react-infinite-scroller';
import { useRouter } from "next/router";

export default function CommentListUI(props) {
  const router = useRouter()
  const {data, fetchMore} = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {boardId: router.query.id}
  })

  function onLoadCommentMore(){
    if(!data) return
    fetchMore({ // fetchMore를 만나면 추가로 데이터 요청됨. 요청된 데이터는 아래 fetchMoreResult에 들어온다.
      variables: {page: Math.ceil(data?.fetchBoardComments.length/10)+1}, // ! fetchMore 할때는 variables에 boardId 안넣어도 된다.
      updateQuery: (prev, {fetchMoreResult}) => {
        return{
          fetchBoardComments: [...prev.fetchBoardComments, ...fetchMoreResult.fetchBoardComments]
        }
      }
    })
  }

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={onLoadCommentMore}
      hasMore={true}> 
        {props.data?.fetchBoardComments.map((el) => (
          <CommentListUIItem key={el._id} el={el} />
        ))}
    </InfiniteScroll>
  );
}
