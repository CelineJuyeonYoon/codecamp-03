import styled from "@emotion/styled"
import { useRef } from "react"
import { gql, useMutation } from "@apollo/client"

const UPLOAD_FILE = gql`
  mutation($file: Upload!){
    uploadFile(file: $file){
      url
  }
} 
`

const UploadImg = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`
const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`
const UploadFile = styled.input`
  display: none;
`


export default function Uploads01(props){
  const fileRef = useRef<HTMLInputElement>()
  const [uploadFile] = useMutation(UPLOAD_FILE)

  function onClickUpload(){
    fileRef.current.click()
  }

  async function onChangeFile(event){
    const file = event.target.files[0]

    if(!file){
      alert('파일이 없습니다')
      return
    }

    const result = await uploadFile({
      variables: {
        file
      }
    })
    // const myUrl = result.data.upload.url // 이 url은 등록하기 함수에 들어갈 url임!
    props.onChangeImageUrls(result.data.uploadFile.url, props.index)
  }

  return(
    <>
      {/* <UploadImg onClick={onClickUpload} src={`https://storage.googleapis.com/${}`} /> */}
      <UploadButton onClick={props.onClickUpload}>
        <>+</>
        <>Upload</>
      </UploadButton>
      <UploadFile ref={fileRef} type="file" onChange={onChangeFile} />
    </>
  )
}