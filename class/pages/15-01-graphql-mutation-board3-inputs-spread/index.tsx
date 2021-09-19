import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents){
      message
      number
    } 
  }
`
// 04-04-graphql-mutation-board3과 비교하면서 학습하기!
export default function GraphqlMutationBoard3Page(){
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [myInputs, setMyInputs] = useState({
    writer:"",
    title:"", 
    contents:""
  })
  function onChangeMyInputs(event){
    setMyInputs({
      ...myInputs, // 기존의 값을 spread 연산자로 살려준다.
      [event.target.name]: event.target.value, // 새로운 값이 덮어씌워진다.
    })
    // 위 코드 두 줄은 아래 4줄을 축약한 것이다.
    // writer: myInputs.wraiter
    // title: myInputs.title
    // contnents: myInputs.contents
    // writer: '철수' 
  }

  // const [myWriter, setMyWriter] = useState("")
  // const [myTitle, setMyTitle] = useState("")
  // const [myContents, setMyContents] = useState("")

  // function onChangeMyWriter(event){
  //   setMyWriter(event.target.value)
  // }     

  // function onChangeMyTitle(event){
  //   setMyTitle(event.target.value)
  // }

  // function onChangeMyContents(event){
  //   setMyContents(event.target.value)
  // }

  async function aaa(){
    const result = await createBoard({
      variables: { ...myInputs }
    })
    console.log(result)
    console.log(result.data.createBoard.number)
  }

  return(
    <>
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs}/><br />
      제목:<input type="text" name="title" onChange={onChangeMyInputs}/><br />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs}/><br />
      <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    </>
  )
}