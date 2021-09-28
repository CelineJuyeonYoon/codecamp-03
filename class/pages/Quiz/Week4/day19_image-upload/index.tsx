import { useMutation, gql } from "@apollo/client"
import { useState, useRef } from "react"
import { LikeOutlined } from "@ant-design/icons"
import { Button } from "antd"

const UPLOAD_FILE = gql`
  mutation($file: Upload!){
    uploadFile(file: $file){
      url
    }
  }
`

const CREATE_BOARD = gql`
  mutation($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
      images
    }
  }
`

export default function MyImageUploadPage() {
  const myRef = useRef<HTMLInputElement>()
  const [uploadFile] = useMutation(UPLOAD_FILE)
  const [createBoard] = useMutation(CREATE_BOARD)
  const [imgUrl, setImgUrl] = useState("")
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  })

  async function onChangeUploadImg(event){
    const myImg = event.target.files[0]

    if(!myImg){
      alert('이미지가 없습니다!')
      return
    }

    if(myImg.size > 5 * 1024 * 1024){
      alert('용량이 초과되었습니다!')
      return
    }

    const result = await uploadFile({
      variables: {
        file: myImg
      }
    })
    setImgUrl(result.data.uploadFile.url)
  }

  async function onClickSubmit(){
    await createBoard({
      variables: {
        createBoardInput: {
          ...inputs,
          images: [imgUrl]
        }
      }
    })
  }

  function onChangeInputs(event){
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  function onClickIcon(){
    myRef.current?.click()
  }

  return(
    <>
      작성자: <input type="text" name="writer" onChange={onChangeInputs} /><br />
      비밀번호: <input type="password" name="password" onChange={onChangeInputs} /><br />
      제목: <input type="text" name="title" onChange={onChangeInputs} /><br />
      내용: <input type="text" name="contents" onChange={onChangeInputs} /><br />
      <LikeOutlined onClick={onClickIcon} style={{width: '50px', height: '50px', backgroundColor: 'yellow'}}/>
      <Button onClick={onClickSubmit}>저장하기</Button>
      <img src={`https://storage.googleapis.com/${imgUrl}`} />
      <input style={{display: 'none'}} type="file" ref={myRef} onChange={onChangeUploadImg}/>
    </>
  )
}