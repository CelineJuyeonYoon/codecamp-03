import {gql, useQuery} from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroller';

const FETCH_BOARD = gql`
  query fetchBoards($page: Int){
    fetchBoards(page: $page){
      _id
      writer
      title
      contents
    }
  }
`

export default function InfiniteScrollerPage(){
  const {data, fetchMore} = useQuery(FETCH_BOARD)

  function onLoadMore(){
    if(!data) return
    fetchMore({
      variables: {page: Math.ceil(data?.fetchBoards.length/10)+1},
      updateQuery: (prev, {fetchMoreResult}) => {
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards]
        }
      }
    })
  }

  return(
    <div style="height:700px;overflow:auto;">
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore} // 다음 데이터 불러오기 함수
        hasMore={true}>
          {data?.fetchBoards.map((el) =>
            <div key={el._id}>
              <span>{el.writer}</span>
              <span>{el.title}</span>
              <span>{el.contents}</span>
            </div>
          )}
      </InfiniteScroll>
    </div>
  )
}