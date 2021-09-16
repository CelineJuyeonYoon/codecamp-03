import DaumPostcode from "react-daum-postcode";
import {
  AddBox,
  AddBoxWrapper,
  Address,
  AddressWrapper,
  AddWrapper,
  ButtonWrapper,
  CancelBtn,
  Check,
  ContentInput,
  EditBtn,
  Input,
  InputWrapper,
  Label,
  RadioInput,
  RadioLabel,
  RadioWrapper,
  SelectWrapper,
  SubmitBtn,
  Title,
  Vector,
  Wrapper,
  WriterInput,
  WriterWrapper,
  ZipcodeBtn,
  ZipcodeInput,
  ZipcodeWrapper,
  NameErr,
  PasswordErr,
  TitleErr,
  ContentErr,
} from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>
            작성자
            <Check> *</Check>
          </Label>
          <WriterInput
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeName}
            defaultValue={props.data?.fetchBoard.writer}
          ></WriterInput>
          <NameErr>{props.nameErr}</NameErr>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <WriterInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          ></WriterInput>
          <PasswordErr>{props.passwordErr}</PasswordErr>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>
          제목
          <Check> *</Check>
        </Label>
        <Input
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
        ></Input>
        <TitleErr>{props.titleErr}</TitleErr>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <ContentInput
          type="text"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContent}
          defaultValue={props.data?.fetchBoard.contents}
        ></ContentInput>
        <ContentErr>{props.contentErr}</ContentErr>
      </InputWrapper>
      <AddressWrapper>
        <Label>주소</Label>
        <DaumPostcode onComplete={props.handleComplete} />
        <ZipcodeWrapper>
          <ZipcodeInput placeholder="07250"></ZipcodeInput>
          <ZipcodeBtn onClick={props.onToggleZipcode}>우편번호 검색</ZipcodeBtn>
        </ZipcodeWrapper>
        <Address></Address>
        <Address onChange={props.onChangeAddressDetail}></Address>
      </AddressWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Input
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutubeUrl}
        ></Input>
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
        <RadioWrapper>
          <RadioInput type="radio" name="main"></RadioInput>
          <RadioLabel>유튜브</RadioLabel>
          <RadioInput type="radio" name="main"></RadioInput>
          <RadioLabel>사진</RadioLabel>
        </RadioWrapper>
      </SelectWrapper>
      <ButtonWrapper>
        <CancelBtn onClick={props.onClickCancle}>취소하기</CancelBtn>
        {!props.isEdit && (
          <SubmitBtn
            onClick={props.onClickSubmit}
            buttonAct={props.buttonAct}
            disabled={!props.buttonAct}
          >
            등록하기
          </SubmitBtn>
        )}
        {props.isEdit && (
          <EditBtn onClick={props.onClickEdit} buttonAct={props.buttonAct}>
            수정하기
          </EditBtn>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
