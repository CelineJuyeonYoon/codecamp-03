import { useRef, useState } from "react"
import { fileValidation } from "../../src/commons/libraries/validation"
import {gql, useMutation} from '@apollo/client'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!){
    uploadFile(file: $file){
      url
    }
  }
`

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

export default function ImageUploadPreviewPage(){
  const [imageUrl, setImageUrl] = useState("")
  const [myFile, setMyFile] = useState("")
  const [uploadFile] = useMutation(UPLOAD_FILE)
  const fileRef = useRef<HTMLInputElement>()

  function onClickGray(){
    fileRef.current.click()
  }

  function onChangeFile(event){
    const file = event.target.files[0]
    if (!fileValidation(file)) return // 검증 한줄로 정리, 성격 다른 것들은 분리하는 게 좋음

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => {
      setImageUrl(data.target.result)
      // 임시 url(내컴퓨터에서만 사용가능), 스토리지에 아직 올라가지 않은 상태
      // 업로드하지 않고 돌아갈 경우, 리소스 낭비 방지 가능!
      // console.log(data.target.result)
      setMyFile(file)
    }
  }
// 위는 임시 미리보기 url, 아래는 실제 업로드된 파일 url
  async function onClickSubmit(){
    // promise 동시요청
    // await Promise.all([
    //   uploadFile({variables: {file: myFile}}),
    //   uploadFile({variables: {file: myFile}}),
    //   uploadFile({variables: {file: myFile}}),
    //   uploadFile({variables: {file: myFile}}),
    //   uploadFile({variables: {file: myFile}})
    // ])
    const start = performance.now()
    const result1 = await uploadFile({
      variables: {
        file: myFile
      }
    })
    const result2 = await uploadFile({
      variables: {
        file: myFile
      }
    })
    const result3 = await uploadFile({
      variables: {
        file: myFile
      }
    })
    const result4 = await uploadFile({
      variables: {
        file: myFile
      }
    })
    const result5 = await uploadFile({
      variables: {
        file: myFile
      }
    })
    const end = performance.now()
    console.log(end - start) // 시간테스트

    // const url = result.data.uploadFile.url

    // 게시물등록 images: [url]
  }

  return(
    <>
      <div style={{width: '50px', height: '50px', backgroundColor: 'gray'}} onClick={onClickGray}>이미지 업로드</div>
      <img src={imageUrl} />
      <input type="file" ref={fileRef} onChange={onChangeFile}/>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  )
}