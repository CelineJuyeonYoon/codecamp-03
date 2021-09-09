import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
  createBoard(
    createBoardInput: $createBoardInput
  ){
    _id
    writer
    title
    contents
    createdAt
  }
}
`

export const UPDATE_BOARD = gql`
  mutation updateBoard($boardId: ID!, $password: String, $updateBoardInput: UpdateBoardInput!){
    updateBoard(boardId: $boardId, password: $password, updateBoardInput: $updateBoardInput){
      title,
      contents,
  } ### return부분이 필수인데 입력안해서 오류, playground & 9일차 블로그 참고
}
`