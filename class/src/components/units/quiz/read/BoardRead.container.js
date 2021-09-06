import BoardReadUI from './BoardRead.presenter'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {FETCH_BOARD} from '../read/BoardRead.queries'

export default function BoardRead(){
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.aaa) }
  })

  return(
    <BoardReadUI 
      data={data}
      router={router}/>
  )
}
// props로 presenter에 넘길 데이터 component 안에 넣는 것 잊지말기!!!