import BoardWrite from "../../src/components/units/board/write/BoardWrite.container";
// import BoardWrite from "/pages/src/components/units/board/write/BoardWrite.container"
// 이렇게 절대경로로 지정하면 폴더 경로가 변경되어도 위 주소가 바뀌지 않아 일일이 수정해줘야함

export default function BoardNewPage() {
  return <BoardWrite />;
}

// import { useMutation, gql } from '@apollo/client'
// import { useState } from 'react'
// import { useRouter } from 'next/router'

// import{
//   AddBox,
//   AddBoxWrapper,
//   Address,
//   AddressWrapper,
//   AddWrapper,
//   ButtonWrapper,
//   CancelBtn,
//   Check,
//   ContentInput,
//   Input,
//   InputWrapper,
//   Label,
//   RadioInput,
//   RadioLabel,
//   RadioWrapper,
//   SelectWrapper,
//   SubmitBtn,
//   Title,
//   Vector,
//   Wrapper,
//   WriterInput,
//   WriterWrapper,
//   ZipcodeBtn,
//   ZipcodeInput,
//   ZipcodeWrapper,
//   NameErr,
//   PasswordErr,
//   TitleErr,
//   ContentErr
// } from '../../../styles/BoardsNew-style'

// const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!){
//   createBoard(
//     createBoardInput: $createBoardInput
//   ){
//     _id
//     writer
//     title
//     contents
//     createdAt
//   }
// }
// `

// export default function BoardsNewPage() {
//   const [ createBoard ] = useMutation(CREATE_BOARD)
//   const router = useRouter()

//   const [ name, setName ] = useState("")
//   const [ nameErr, setNameErr ] = useState("")

//   const [ password, setPassword ] = useState("")
//   const [ passwordErr, setPasswordErr ] = useState("")

//   const [ title, setTitle ] = useState("")
//   const [ titleErr, setTitleErr ] = useState("")

//   const [ content, setContent ] = useState("")
//   const [ contentErr, setContentErr ] = useState("")

//   function onChangeName(event){
//     setName(event.target.value)
//     if(event.target.value){ //이부분을 state인 name으로하면 입력시 바로 에러가 없어지지 X
//       setNameErr("")
//     }
//   }
//   function onChangePassword(event){
//     setPassword(event.target.value)
//     if(event.target.value.length > 3){
//       setPasswordErr("")
//     }
//   }
//   function onChangeTitle(event){
//     setTitle(event.target.value)
//     if(event.target.value){
//       setTitleErr("")
//     }
//   }
//   function onChangeContent(event){
//     setContent(event.target.value)
//     if(event.target.value){
//       setContentErr("")
//     }
//   }

//   async function onClickSubmit(){

//     if(!name){
//       setNameErr("*이름을 입력해주세요.")
//     }

//     if((password.length) < 4){
//       setPasswordErr("*비밀번호를 4자리 이상 입력해주세요.")
//     }

//     if(!title){
//       setTitleErr("*제목을 입력해주세요.")
//     }

//     if(!content){
//       setContentErr("*내용을 입력해주세요.")
//     }

//     if(name !=="" && password.length>=4 && title !=="" && content !==""){
//       alert('게시물이 등록되었습니다.')
//     }

//     try{
//       const result = await createBoard({
//         variables: {
//           createBoardInput: {
//             writer: name,
//             password: password,
//             title: title,
//             contents: content
//           }
//         }
//       })
//       router.push(`/boards/board_read/${result.data.createBoard._id}`)
//     } catch(error){
//       console.log(error)
//     }
//   }

//   return (
//     <Wrapper>
//       <Title>게시물 등록</Title>
//       <WriterWrapper>
//         <InputWrapper>
//           <Label>
//             작성자
//             <Check> *</Check>
//           </Label>
//           <WriterInput type="text" placeholder="이름을 적어주세요." onChange={onChangeName}></WriterInput>
//           <NameErr>{nameErr}</NameErr>
//         </InputWrapper>
//         <InputWrapper>
//           <Label>비밀번호</Label>
//           <WriterInput type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangePassword}></WriterInput>
//           <PasswordErr>{passwordErr}</PasswordErr>
//         </InputWrapper>
//       </WriterWrapper>
//       <InputWrapper>
//         <Label>
//           제목
//           <Check> *</Check>
//         </Label>
//         <Input type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle}></Input>
//         <TitleErr>{titleErr}</TitleErr>
//       </InputWrapper>
//       <InputWrapper>
//         <Label>내용</Label>
//         <ContentInput type="text" placeholder="내용을 작성해주세요." onChange={onChangeContent}></ContentInput>
//         <ContentErr>{contentErr}</ContentErr>
//       </InputWrapper>
//       <AddressWrapper>
//         <Label>주소</Label>
//         <ZipcodeWrapper>
//           <ZipcodeInput placeholder="07250"></ZipcodeInput>
//           <ZipcodeBtn>우편번호 검색</ZipcodeBtn>
//         </ZipcodeWrapper>
//         <Address></Address>
//         <Address></Address>
//       </AddressWrapper>
//       <InputWrapper>
//         <Label>유튜브</Label>
//         <Input placeholder="링크를 복사해주세요."></Input>
//       </InputWrapper>
//       <AddWrapper>
//         <Label>사진 첨부</Label>
//         <AddBoxWrapper>
//           <AddBox>
//           <Vector src="../Vector.png"></Vector>
//             <div>Upload</div>
//           </AddBox>
//           <AddBox>
//           <Vector src="../Vector.png"></Vector>
//             <div>Upload</div>
//           </AddBox>
//           <AddBox>
//             <Vector src="../Vector.png"></Vector>
//             <div>Upload</div>
//           </AddBox>
//         </AddBoxWrapper>
//       </AddWrapper>
//       <SelectWrapper>
//         <Label>메인 설정</Label>
//         <RadioWrapper>
//           <RadioInput type="radio"></RadioInput>
//           <RadioLabel>유튜브</RadioLabel>
//           <RadioInput type="radio"></RadioInput>
//           <RadioLabel>사진</RadioLabel>
//         </RadioWrapper>
//       </SelectWrapper>
//       <ButtonWrapper>
//         <CancelBtn>취소하기</CancelBtn>
//         <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
//       </ButtonWrapper>
//     </Wrapper>
//   )
// }
