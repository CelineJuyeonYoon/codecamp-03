import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_BOARD, UPDATE_BOARD} from './BoardWrite.queries'
import {useRouter} from 'next/router'

export default function BoardWrite(props){
  const router = useRouter()

  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [ updateBoard ] = useMutation(UPDATE_BOARD)

  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")
  const [titleCol, setTitleCol] = useState(true)
  const [able, setAble] = useState(false)

  // myWriter, myTitle, myContents 모두 내용이 저장되어 있다면,
  // 즉, (myWriter !== "" && myTitle !== "" && myContents !== "")라면,
  // setAble를 사용해서, false => true, 이모션의 버튼색을 노란색으로 변경하기
  // + 하나라도 다시 빈값이 되면 바로 false로 만들기
  function onChangeMyWriter(event){
    setMyWriter(event.target.value)
    if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
      setAble(true)
    } else{
      setAble(false)
    }
  }

  function onChangeMyTitle(event){
    setMyTitle(event.target.value)
    if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
      setAble(true)
    } else{
      setAble(false)
    }
  }

  function onChangeMyContents(event){
    setMyContents(event.target.value)
    if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
      setAble(true)
    } else{
      setAble(false)
    }
  }

  async function onClickCreate(){
    const result = await createBoard({
      variables: { 
        writer: myWriter, 
        title: myTitle, 
        contents: myContents
      }
    })
    // console.log(result)
    // console.log(result.data)
    console.log(result.data.createBoard)
    // console.log(result.data.createBoard.number)
    router.push(`/08-04-board-detail/${result.data.createBoard.number}`)
  }

  async function onClickEdit(){
    try{
      // 1. state의 초기값에도 defaultValue를 넣어주는 방법
      // 2. 실제로 변경이 일어난 값만 수정하라고 Backend에 요청하는 방법 << 이게 더 효율적인 방법!
      const myVariables = {
        number: Number(router.query.number)
      }
      if(myWriter) myVariables.writer = myWriter
      if(myTitle) myVariables.title = myTitle
      if(myContents) myVariables.contents = myContents
      // 입력값이 있는 것만 추가할 수 있음
      await updateBoard({
        variables: myVariables
        //             {
        //   number: Number(router.query.number),
        //   // writer: myWriter, // 보낸 값만 수정할 수 있게되어있거나, 아니거나 (회사마다 다를수있음)
        //   // title: myTitle,
        //   contents: myContents
        // }
      })
      router.push(`/08-04-board-detail/${router.query.number}`)
    } catch(error){
      console.log(error)
    }
  }

  return(
    <BoardWriteUI 
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      onClickCreate={onClickCreate}
      titleCol={titleCol}
      able={able}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={props.data}
    />
  )
}