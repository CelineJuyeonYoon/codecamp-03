import{
  AddBox,
  AddBoxWrapper,
  Address,
  AddressWrapper,
  AddWrapper,
  ButtonWrapper,
  CancelBtn,
  Check,
  ContentInput,
  Input,
  InputWrapper,
  Label,
  RadioInput,
  RadioLabel,
  SelectWrapper,
  SubmitBtn,
  Title,
  Vector,
  Wrapper,
  WriterInput,
  WriterWrapper,
  ZipcodeBtn,
  ZipcodeInput,
  ZipcodeWrapper
} from '../../../styles/BoardsNew-style'

export default function BoardsNewPage() {

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
