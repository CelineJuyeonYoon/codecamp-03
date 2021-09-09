import {
  Wrapper,
  Box,
  Header,
  WriterWrapper,
  WriterProfile,
  Icons,
  WriterName,
  WriteDate,
  WriteInfo,
  LinkImg,
  LocaImg,
  Title,
  Image,
  Contents,
  Vedio,
  LikeDislike,
  LikeBtn,
  DislikeBtn,
  LikeImg,
  DislikeImg,
  Buttons,
  ToListBtn,
  DeleteBTn,
  EditBTn
} from './BoardRead.styles'

export default function BoardReadUI(props){

  return(
    <Wrapper>
    <Box>
      <Header>
        <WriterWrapper>
          <img src="../../images/profile.png"></img>
          <WriteInfo>
            <WriterName>{props.data?.fetchBoard.writer}</WriterName>
            <WriteDate>{props.data?.fetchBoard.createdAt}</WriteDate>
          </WriteInfo>
        </WriterWrapper>
        <Icons>
          <LinkImg src="../../images/link.png"></LinkImg>
          <LocaImg src="../../images/loca.png"></LocaImg>
        </Icons>
      </Header>
      <Title>{props.data?.fetchBoard.title}</Title>
      <Image src='../../images/image.png'></Image>
      <Contents>{props.data?.fetchBoard.contents}</Contents>
      <Vedio src="../../images/video.png"></Vedio>
      <LikeDislike>
        <LikeBtn >
          <LikeImg src="../../images/like.png"></LikeImg>
          1920
        </LikeBtn>
        <DislikeBtn>
          <DislikeImg src="../../images/dislike.png"></DislikeImg>
          1920
        </DislikeBtn>
      </LikeDislike>
    </Box>
    <Buttons>
      <ToListBtn>목록으로</ToListBtn>
      <EditBTn onClick={props.onClickToEdit}>수정하기</EditBTn>
      <DeleteBTn onClick={props.onClickDelete}>삭제하기</DeleteBTn>
    </Buttons>
  </Wrapper>
  )
}