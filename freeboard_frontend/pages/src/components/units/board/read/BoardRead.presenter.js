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
  EditBTn,
  LikeCount,
  DislikeCount,
  Like,
  Dislike,
} from "./BoardRead.styles";

export default function BoardReadUI(props) {
  return (
    <Wrapper>
      <Box>
        <Header>
          <WriterWrapper>
            <WriterProfile src="../../images/profile.png" />
            <WriteInfo>
              <WriterName>{props.data?.fetchBoard.writer}</WriterName>
              <WriteDate>
                Date: {props.data?.fetchBoard.createdAt.slice(0, 10)}
              </WriteDate>
            </WriteInfo>
          </WriterWrapper>
          <Icons>
            <LinkImg src="../../images/link.png"></LinkImg>
            <LocaImg src="../../images/loca.png"></LocaImg>
          </Icons>
        </Header>
        <Title>{props.data?.fetchBoard.title}</Title>
        <Image src="../../images/image.png"></Image>
        <Contents>{props.data?.fetchBoard.contents}</Contents>
        <Vedio src="../../images/video.png"></Vedio>
        <LikeDislike>
          <Like>
            <LikeBtn src="../../images/like.png" onClick={props.onClickLike} />
            <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
          </Like>
          <Dislike>
            <DislikeBtn
              src="../../images/dislike.png"
              onClick={props.onClickDislike}
            />
            <DislikeCount>{props.data?.fetchBoard.dislikeCount}</DislikeCount>
          </Dislike>
        </LikeDislike>
      </Box>
      <Buttons>
        <ToListBtn onClick={props.onClickToList}>목록으로</ToListBtn>
        <EditBTn onClick={props.onClickToEdit}>수정하기</EditBTn>
        <DeleteBTn onClick={props.onClickDelete}>삭제하기</DeleteBTn>
      </Buttons>
    </Wrapper>
  );
}
