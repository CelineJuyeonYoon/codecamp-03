import { useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardReadUI from './BoardRead.presenter'
import {FETCH_BOARD, DELETE_BOARD} from './BoardRead.queries'

export default function BoardRead(){
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id }
  })

  const [deleteBoard] = useMutation(DELETE_BOARD)

  async function onClickDelete(){
    await deleteBoard({
      variables: { boardId: router.query.id }
    })
    alert('게시물이 삭제되었습니다.')
  }

  function onClickToEdit(){
    router.push(`/boards/board_read/${router.query.id}/edit`)
  }

  return(
    <BoardReadUI 
      data={data}
      router={router}
      onClickDelete={onClickDelete}
      onClickToEdit={onClickToEdit}
    />
  )
}