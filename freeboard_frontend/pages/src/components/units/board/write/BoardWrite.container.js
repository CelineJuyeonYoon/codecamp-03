import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.queries'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function BoardWrite(){
  const [ createBoard ] = useMutation(CREATE_BOARD)
  const router = useRouter()

  const [ name, setName ] = useState("")
  const [ nameErr, setNameErr ] = useState("")

  const [ password, setPassword ] = useState("")
  const [ passwordErr, setPasswordErr ] = useState("")

  const [ title, setTitle ] = useState("")
  const [ titleErr, setTitleErr ] = useState("")

  const [ content, setContent ] = useState("")
  const [ contentErr, setContentErr ] = useState("")

  const [ buttonAct, setButtonAct ] = useState("")

  function onChangeName(event){
    setName(event.target.value)
    if(event.target.value){
      setNameErr("")
    } if(event.target.value !== "" && password.length > 3 && title !== "" && content !== ""){
      setButtonAct(true)
    } else{
      setButtonAct("")
    }
  }
  function onChangePassword(event){
    setPassword(event.target.value)
    if(event.target.value.length > 3){
      setPasswordErr("")
    } if(name !== "" && event.target.value.length > 3 && title !== "" && content !== ""){
      setButtonAct(true)
    } else{
      setButtonAct("")
    }
  }
  function onChangeTitle(event){
    setTitle(event.target.value)   
    if(event.target.value){
      setTitleErr("")
    } if(name !== "" && password.length > 3 && event.target.value !== "" && content !== ""){
      setButtonAct(true)
    } else{
      setButtonAct("")
    }
  }
  function onChangeContent(event){
    setContent(event.target.value)
    if(event.target.value){
      setContentErr("")
    } if(name !== "" && password.length > 3 && title !== "" && event.target.value !== ""){
      setButtonAct(true)
    } else{
      setButtonAct("")
    }
  }

  async function onClickSubmit(){
    
    if(!name){
      setNameErr("*이름을 입력해주세요.")
    }
    
    if((password.length) < 4){
      setPasswordErr("*비밀번호를 4자리 이상 입력해주세요.")
    }
    
    if(!title){
      setTitleErr("*제목을 입력해주세요.")
    }
    
    if(!content){
      setContentErr("*내용을 입력해주세요.")
    }
    
    if(name !=="" && password.length>=4 && title !=="" && content !==""){
      alert('게시물이 등록되었습니다.')
    }
    
    try{
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password: password,
            title: title,
            contents: content
          }
        }
      })
      router.push(`/boards/board_read/${result.data.createBoard._id}`)
    } catch(error){
      console.log(error)
    }
  }

  return(
    <BoardWriteUI
      onChangeName={onChangeName}
      nameErr={nameErr}
      onChangePassword={onChangePassword}
      passwordErr={passwordErr}
      onChangeTitle={onChangeTitle}
      titleErr={titleErr}
      onChangeContent={onChangeContent}
      contentErr={contentErr}
      onClickSubmit={onClickSubmit}
      buttonAct={buttonAct}
    />
  )
}