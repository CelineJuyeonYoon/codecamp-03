import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      writer
      title
      contents
    }
  }
`

export default function BoardEditPage(){
  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD, {
    variables: {number: Number(router.query.number)}
  })

  return(
    <BoardWrite isEdit={true} data={data}/>
  )
}