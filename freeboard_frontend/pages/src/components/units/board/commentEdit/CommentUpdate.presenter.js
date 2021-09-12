import {
  Wrapper,
  CommentHead,
  CommentImg,
  Comment,
  CommentInfo,
  Writer,
  Password,
  RatingBtn,
  CommentInput,
  CommentSubmitBar,
  CommentCount,
  UpdateBtn,
} from "./CommentUpdate.styles";

export default function CommentWriteUI(props) {
  return (
    <Wrapper>
      <CommentHead>
        <CommentImg src="../../images/comment.png" />
        <Comment>댓글</Comment>
      </CommentHead>
      <CommentInfo>
        <Writer
          type="text"
          placeholder="작성자"
          onChange={props.onChangeWriter}
        />
        <Password
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
        <RatingBtn onClick={props.onClickRating1} value={1}>
          <img src="../../images/star.png" />
        </RatingBtn>
        <RatingBtn onClick={props.onClickRating2} value={2}>
          <img src="../../images/star.png" />
        </RatingBtn>
        <RatingBtn onClick={props.onClickRating3}>
          <img src="../../images/star.png" />
        </RatingBtn>
        <RatingBtn onClick={props.onClickRating4}>
          <img src="../../images/star.png" />
        </RatingBtn>
        <RatingBtn onClick={props.onClickRating5}>
          <img src="../../images/star.png" />
        </RatingBtn>
      </CommentInfo>
      <CommentInput onChange={props.onChangeContents} />
      <CommentSubmitBar>
        <CommentCount>0/100</CommentCount>
        <SubmitBtn onClick={props.onClickCommentSubmit}>수정하기</SubmitBtn>
      </CommentSubmitBar>
    </Wrapper>
  );
}
