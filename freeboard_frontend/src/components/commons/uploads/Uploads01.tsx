import styled from "@emotion/styled";
import { useRef, useState } from "react";

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

export default function Uploads01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgUrl, setImgUrl] = useState(""); // 임시 미리보기 주소 넣을 state
  // const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: any) {
    const file = event.target.files[0]; // file 정보

    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    // const result = await uploadFile({ variables: { file } });
    // props.onChangeImageUrls(result.data.uploadFile.url, props.index);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // 임시 미리보기 주소 생성

    fileReader.onload = (data) => {
      setImgUrl(data.target?.result as string); // 생성된 임시 미리보기 주소 imgUrl(현재 컴포넌트 state)에 저장
      props.onChangeFiles(file, props.index); // 실제 파일은 BoardWrite.container에 저장(그곳에서 uploadFile)
    };
  }

  return (
    <>
      {/* 임시 미리보기 주소가 있으면, */}
      {imgUrl || props.defaultImageUrl ? (
        <UploadImg
          onClick={onClickUpload} // 이미지가 처음 클릭되고 나서도 다시 클릭할 수 있어야 함
          // src={`https://storage.googleapis.com/${props.imgUrl}`}
          src={
            imgUrl || `https://storage.googleapis.com/${props.defaultImageUrl}`
          } // 임시 미리보기 주소
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
