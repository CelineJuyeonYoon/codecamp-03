import styled from "@emotion/styled";

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
const Image = styled.div`
  background-color: #bdbdbd;
  width: 180px;
  height: 180px;
  text-align: center;
  margin-right: 24px;
`;

export default function UploadImage01() {
  return (
    <Wrapper>
      <Label>사진첨부</Label>
      <Images>
        <Image></Image>
        <Image></Image>
      </Images>
    </Wrapper>
  );
}
