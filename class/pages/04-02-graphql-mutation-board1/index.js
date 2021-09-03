import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`                                 
  mutation{
    createBoard(writer:"celineY" title:"test" contents:"successful"){
      message
      number
    }
  }
`                                                         //7 playground에서 요청할 mutation내용 그대로 복붙!
                                                          //8 변수에 gql로 감싸서 담아주기

export default function GraphqlMutationBoard1Page(){      //1
  const [ createBoard ] = useMutation(CREATE_BOARD)       //3 //9 요청할 내용 useMutation()안에 입력(CREATE_BOARD)

  async function aaa(){                                   //5
    const result = await createBoard()                    //6 createBoard() 함수 실행
    console.log(result)
    console.log(result.data.createBoard.number)
  }

  return(                                                 
    <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>  //2
  )
}