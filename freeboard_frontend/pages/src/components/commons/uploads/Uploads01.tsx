import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const UploadImg = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
`;
const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
const UploadFile = styled.input`
  display: none;
`;

export default function Uploads01(props) {
  const fileRef = useRef<HTMLInputElement>();
  const [imgUrl, setImgUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files[0]; // file 정보
    console.log(event.target.files[0]);

    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    const result = await uploadFile({ variables: { file } });
    props.onChangeImageUrls(result.data.uploadFile.url, props.index);
    console.log(result);

    //   const fileReader = new FileReader();
    //   fileReader.readAsDataURL(file);
    //   fileReader.onload = (data) => {
    //     setImgUrl(data.target?.result as string);
    //     props.onChangeImageUrls(file, props.index);
    //   };
  }

  return (
    <>
      {props.imgUrl ? (
        <UploadImg
          onClick={onClickUpload}
          src={`https://storage.googleapis.com/${props.imgUrl}`}
        />
      ) : (
        <UploadButton onClick={onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFile ref={fileRef} type="file" onChange={onChangeFile} />
    </>
  );
}