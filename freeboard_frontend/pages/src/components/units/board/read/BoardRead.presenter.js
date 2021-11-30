import ReactPlayer from "react-player";
import { Tooltip } from "antd";
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
  Video,
  LikeDislike,
  LikeBtn,
  DislikeBtn,
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
            <WriterProfile src="/images/profile.png" />
            <WriteInfo>
              <WriterName>{props.data?.fetchBoard.writer}</WriterName>
              <WriteDate>
                Date: {props.data?.fetchBoard.createdAt.slice(0, 10)}
              </WriteDate>
            </WriteInfo>
          </WriterWrapper>
          <Icons>
            <LinkImg src="/images/link.png" />
            <Tooltip
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <LocaImg src="/images/loca.png" />
            </Tooltip>
          </Icons>
        </Header>
        <Title>{props.data?.fetchBoard.title}</Title>
        {/* <Image src={`https://storage.googleapis.com/${props.data?.fetchBoard.images}`} />*/}
        {props.data?.fetchBoard.images
          ?.filter((el) => el) // 비어있는 imgUrls 배열 요소 제거하기
          .map((el) => (
            <Image key={el} src={`https://storage.googleapis.com/${el}`} /> // 각각의 url을 넣어 이미지 보여주기
          ))}
        <Contents>{props.data?.fetchBoard.contents}</Contents>
        <Video>
          <ReactPlayer
            url={props.data?.fetchBoard.youtubeUrl}
            width={486}
            height={240}
          />
        </Video>
        <LikeDislike>
          <Like>
            <LikeBtn src="/images/like.png" onClick={props.onClickLike} />
            <LikeCount>{props.data?.fetchBoard.likeCount}</LikeCount>
          </Like>
          <Dislike>
            <DislikeBtn
              src="/images/dislike.png"
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
