import styled from "@emotion/styled";

export default function BoardsNewPage() {

  const Wrapper = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 20px;
    padding-top: 90px;
    padding-bottom: 100px;
    margin: 100px;
  `

  const Title = styled.div`
    font-size: 36px;
    font-weight: bold;
  `

  const WriterWrapper = styled.div`
    width: 996px;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
  `

  const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
  `

  const Label = styled.div`
    font-size: 16px;
    margin-bottom: 12px;
    margin-left: 1px;
    font-weight: 500;
  `

  const Check = styled.span`
    color: #FFD600;
  `

  const WriterInput = styled.input`
    border: 1px solid #BDBDBD;
    width: 486px;
    height: 52px;
    padding-left: 15px;
    font-size: 16px;
  `

  const Input = styled.input`
    border: 1px solid #BDBDBD;
    width: 996px;
    height: 52px;
    padding-left:15px;
    font-size: 16px;
    `

  const ContentInput = styled.textarea`
    border: 1px solid #BDBDBD;
    width: 996px;
    height: 480px;
    padding-top: 16px;
    padding-left:15px;
    font-size: 16px;
    `

  const AddressWrapper = styled.div`
    height: 244px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    padding-top: 16px;
  `

  const ZipcodeWrapper = styled.div`
    width: 217px;
    display: flex;
    justify-content: space-between;
  `

  const ZipcodeInput = styled.input`
    border: 1px solid #BDBDBD;
    width: 77px;
    height: 52px;
    padding-left:15px;
    font-size: 16px;
  `

  const ZipcodeBtn = styled.button`
    background-color: black;
    width: 124px;
    height: 52px;
    color: white;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
  `
  const Address = styled.input`
    border: 1px solid #BDBDBD;
    width: 996px;
    height: 52px;
    padding-left:15px;
    font-size: 16px;
    margin-top: 16px;
  `

  const AddWrapper = styled.div`
    width: 996px;
    padding-top: 40px;
  `

  const AddBoxWrapper = styled.div`
    display: flex;
    width: 282px;
    display:flex;
    justify-content: space-between;
  `

  const AddBox = styled.button`
    width: 78px;
    height: 78px;
    background-color: #BDBDBD;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #4F4F4F;
    cursor: pointer;
    border: none;
  `

  const Vector = styled.img`
    margin-bottom: 5px;
  `

  const SelectWrapper = styled.div`
    padding-top: 40px;
    width: 996px;
  `

  // const RadioWrapper = styled.div`
  //   height: 24px;
  //   display: flex;
  //   align-items: center;
  // `

  const RadioInput = styled.input`
    width: 15px;
    height: 15px;
    background: #FFFFFF;
    border: 1px solid #FFD600;
    cursor: pointer;
  `

  const RadioLabel = styled.label`
    margin-left: 10px;
    margin-right: 22px;
    font-size: 16px;
    font-weight: 500;
    /* padding-bottom: 1px; */
  `

  const CancelBtn = styled.button`
    background-color: #BDBDBD;
    width:179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #4F4F4F;
    cursor: pointer;
  `
  const SubmitBtn = styled.button`
    background-color: #FFD600;
    width:179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    `
  const ButtonWrapper = styled.div`
    width: 382px;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
  `

  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>
            작성자
            <Check> *</Check>
          </Label>
          <WriterInput type="text" placeholder="이름을 적어주세요."></WriterInput>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <WriterInput type="text" placeholder="비밀번호를 입력해주세요."></WriterInput>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>
          제목
          <Check> *</Check>
        </Label>
        <Input type="text" placeholder="제목을 작성해주세요."></Input>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <ContentInput type="text" placeholder="내용을 작성해주세요."></ContentInput>
      </InputWrapper>
      <AddressWrapper>
        <Label>주소</Label>
        <ZipcodeWrapper>
          <ZipcodeInput placeholder="07250"></ZipcodeInput>
          <ZipcodeBtn>우편번호 검색</ZipcodeBtn>
        </ZipcodeWrapper>
        <Address></Address>
        <Address></Address>
      </AddressWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Input placeholder="링크를 복사해주세요."></Input>
      </InputWrapper>
      <AddWrapper>
        <Label>사진 첨부</Label>
        <AddBoxWrapper>
          <AddBox>
          <Vector src="../Vector.png"></Vector>
            <div>Upload</div>
          </AddBox>
          <AddBox>
          <Vector src="../Vector.png"></Vector>
            <div>Upload</div>
          </AddBox>
          <AddBox>
            <Vector src="../Vector.png"></Vector>
            <div>Upload</div>
          </AddBox>
        </AddBoxWrapper>
      </AddWrapper>
      <SelectWrapper>
        <Label>메인 설정</Label>
        {/* <RadioWrapper> */}
        <RadioInput type="radio"></RadioInput>
        <RadioLabel>유튜브</RadioLabel>
        <RadioInput type="radio"></RadioInput>
        <RadioLabel>사진</RadioLabel>
        {/* </RadioWrapper> */}
      </SelectWrapper>
      <ButtonWrapper>
        <CancelBtn>취소하기</CancelBtn>
        <SubmitBtn>등록하기</SubmitBtn>
      </ButtonWrapper>
    </Wrapper>
  )
}
