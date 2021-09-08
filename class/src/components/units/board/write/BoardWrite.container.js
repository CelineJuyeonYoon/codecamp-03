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
    console.log(result)
    console.log(result.data)
    // console.log(result.data.createBoard)
    // console.log(result.data.createBoard.number)
    router.push(`/08-04-board-detail/${result.data.createBoard.number}`)
  }

  async function onClickEdit(){
    try{
      await updateBoard({
        variables: {
          number: Number(router.query.number),
          writer: myWriter,
          title: myTitle,
          contents: myContents
        }
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
    />
  )
}