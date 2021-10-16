import styled from "@emotion/styled";
import { useRef, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  /* width: 384px; */
  width: 996px;
`;
const Label = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
  margin-left: 1px;
  font-weight: 500;
`;
const Images = styled.div`
  display: flex;
`;
const UploadImage = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 24px;
  cursor: pointer;
`;
const UploadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdbdbd;
  width: 180px;
  height: 180px;
  margin-right: 24px;
  cursor: pointer;
`;
const UploadFile = styled.input`
  display: none;
`;

export default function UploadImage01(props) {
  const fileRef = useRef<HTMLInputElement>();
  const [imgUrl, setImgUrl] = useState("");

  function onClickUpload() {
    fileRef.current.click();
  }

  async function onChangeFile(event) {
    const file = event.target.files[0];

    if (!file) {
      alert("파일이 없습니다");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImgUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }

  return (
    <Wrapper>
      <Label>사진첨부</Label>
      <Images>
        {imgUrl || props.defaultImgUrl ? (
          <UploadImage
            onClick={onClickUpload}
            src={
              imgUrl ||
              `https://storage.googleapis.com/${props.defaultImageUrl}`
            }
          ></UploadImage>
        ) : (
          <UploadButton onClick={onClickUpload}>
            <>+</>
            <>Upload</>
          </UploadButton>
        )}
      </Images>
      <UploadFile ref={fileRef} type="file" onChange={onChangeFile} />
    </Wrapper>
  );
}
