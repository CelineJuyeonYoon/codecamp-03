import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

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
  DislikeImg
} from '../../../../styles/ProductDetail-style'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
  fetchBoard(boardId: $boardId){
    writer
    createdAt
    title
    contents
  }
}
`

export default function BoardReadPage(){
  const router = useRouter()

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id }
  })
  

  return(
    <Wrapper>
      <Box>
        <Header>
          <WriterWrapper>
            <img src="../../images/profile.png"></img>
            <WriteInfo>
              <WriterName>{data?.fetchBoard.writer}</WriterName>
              <WriteDate>{data?.fetchBoard.createAt}</WriteDate>
            </WriteInfo>
          </WriterWrapper>
          <Icons>
            <LinkImg src="../../images/link.png"></LinkImg>
            <LocaImg src="../../images/loca.png"></LocaImg>
          </Icons>
        </Header>
        <Title>{data?.fetchBoard.title}</Title>
        <Image src='../../images/image.png'></Image>
        <Contents>{data?.fetchBoard.contents}</Contents>
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
    </Wrapper>
  )
}