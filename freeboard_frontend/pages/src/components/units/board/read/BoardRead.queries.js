import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      _id
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

// export const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!){
//   deleteBoard(boardId: $boardId){
//     message
//   }
// }
// `
// message => 이거때문에 400에러남..!!! ("Variable \"$boardId\" of required type \"ID!\" was not provided.")
// 그리고 {} 이것도 같이 지워야하는데 안지워서 에러남. (GraphQLError: Syntax Error: Expected Name, found "}".)
