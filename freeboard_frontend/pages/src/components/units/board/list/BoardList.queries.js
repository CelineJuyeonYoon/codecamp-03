import {gql} from "@apollo/client"

export const FETCH_BOARDS = gql`
  query{
  fetchBoards{
    title
    writer
    createdAt
    _id
  }
}
`