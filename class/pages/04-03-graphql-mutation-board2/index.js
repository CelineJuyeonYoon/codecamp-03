import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      message
      number
    }
  }
`

export default function GraphqlMutationBoard2Page(){
  const [ createBoard ] = useMutation(CREATE_BOARD)

  async function aaa(){
    const result = await createBoard({
      variables: { writer: "철수", title: "제목이에요!", contents: "내용!!" }
    })
    console.log(result)
    console.log(result.data.createBoard.number)
  }

  return(
    <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
  )
}