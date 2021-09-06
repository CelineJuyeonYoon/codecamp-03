import BoardWriteUI from './BoardWrite.presenter'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite() {
  const router = useRouter()

  const [ createBoard ] = useMutation(CREATE_BOARD)
  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  function onChangeMyWriter(event){
    setMyWriter(event.target.value)
  }

  function onChangeMyTitle(event){
    setMyTitle(event.target.value)
  }

  function onChangeMyContents(event){
    setMyContents(event.target.value)
  }

  async function aaa(){
    try{
      const result = await createBoard({
        variables: { 
          writer: myWriter, 
          title: myTitle, 
          contents: myContents
        }
      })
      console.log(result)
      console.log(result.data.createBoard.number)
      // router.push('05-06-dynamic-board-read/' + result.data.createBoard.number) //옛날방식
      router.push(`05-06-dynamic-board-read/${result.data.createBoard.number}`) //템플릿 리터럴
    } catch(error){
        console.log(error)
    }
  }
  return(
    <BoardWriteUI 
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      aaa={aaa}
    />
  )
}