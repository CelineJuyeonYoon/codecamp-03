import BoardListUI from "./BoardList.presenter"
import {FETCH_BOARDS} from "./BoardList.queries"
import {useQuery} from '@apollo/client'

export default function BoardList(){
  const {data} = useQuery(FETCH_BOARDS)

  return<BoardListUI 
    data={data}/>
}