import styled from "@emotion/styled"

const Wrapper = styled.div`

`
const CommentHead = styled.div`
  display: flex;
  align-items: center;
`
const CommentImg = styled.img`
`
const Comment = styled.span`
  margin-left: 14px;
  font-size: 18px;
  font-weight: 500;
`
const CommentInfo = styled.div`
  padding-top: 40px;
`
const Writer = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #BDBDBD;
  margin-right: 24px;
  padding-left: 20px;
`
const Password = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #BDBDBD;
  margin-right: 26px;
  padding-left: 20px;
`
const RatingBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
`
const CommentInput = styled.textarea`
  width: 1200px;
  height: 108px;
  margin-top: 20px;
  border: 1px solid #BDBDBD;
  border-bottom: 1px solid #F2F2F2;
  padding-left: 20px;
  padding-top: 20px;
  resize: none;
`
const CommentSubmitBar = styled.div`
  width: 1200px;
  height: 51px;
`
const CommentCount = styled.span`
  color: #BDBDBD;
`
const SubmitBtn = styled.button`
  background-color: black;
  color: white;
  border-style: none;
  width: 91px;
  height: 52px;
`

export default function CommentWrite(){

  return(
    <Wrapper>
      <CommentHead>
        <CommentImg src='../../images/comment.png' />
        <Comment>댓글</Comment>
      </CommentHead>
      <CommentInfo>
        <Writer type='text' placeholder='작성자'/>
        <Password type='text' placeholder='비밀번호'/>
        <RatingBtn><img src='../../images/star.png' /></RatingBtn>
        <RatingBtn><img src='../../images/star.png' /></RatingBtn>
        <RatingBtn><img src='../../images/star.png' /></RatingBtn>
        <RatingBtn><img src='../../images/star.png' /></RatingBtn>
        <RatingBtn><img src='../../images/star.png' /></RatingBtn>
      </CommentInfo>
      <CommentInput placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'/>
      <CommentSubmitBar>
        <CommentCount>0/100</CommentCount>
        <SubmitBtn>등록하기</SubmitBtn>
      </CommentSubmitBar>
    </Wrapper>
  )
}