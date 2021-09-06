import { gql } from '@apollo/client'
// export 하는거 까먹지않기!!
export const CREATE_BOARD = gql` 
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      message
      number
    }
  }
`