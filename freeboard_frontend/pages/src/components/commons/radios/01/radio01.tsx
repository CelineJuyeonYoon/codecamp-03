import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  width: 996px;
`;
const Label = styled.div`
  font-size: 16px;
  margin-bottom: 12px;
  margin-left: 1px;
  font-weight: 500;
`;
const Radios = styled.div`
  display: flex;
  align-items: center;
`;
const Radio = styled.input`
  margin-right: 10px;
`;
const RadioLabel = styled.div`
  padding-right: 24px;
  font-weight: 500;
  font-size: 16px;
`;

export default function Radio01() {
  return (
    <Wrapper>
      <Label>메인 사진 설정</Label>
      <Radios>
        <Radio type="radio" name="main"></Radio>
        <RadioLabel>사진 1</RadioLabel>
        <Radio type="radio" name="main"></Radio>
        <RadioLabel>사진 2</RadioLabel>
      </Radios>
    </Wrapper>
  );
}
