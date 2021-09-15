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
  Button,
} from "./CommentWrite.styles";

export default function CommentWriteUI(props) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <CommentHead>
          <CommentImg src="../../images/comment.png" />
          <Comment>댓글</Comment>
        </CommentHead>
      )}
      <CommentInfo>
        <Writer
          type="text"
          placeholder="작성자"
          readOnly={Boolean(props.data?.writer)} // 작성자가 있으면(작성됐으면), 이후로 수정 불가능
          onChange={props.onChangeWriter}
          defaultValue={props.el?.writer}
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
      <CommentInput
        onChange={props.onChangeContents}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        defaultValue={props.el?.contents}
      />
      <CommentSubmitBar>
        <CommentCount>0/100</CommentCount>
        {!props.isEdit && (
          <Button onClick={props.onClickCommentSubmit}>등록하기</Button>
        )}
        {props.isEdit && (
          <Button onClick={props.onClickCommentEdit} id={props.el?._id}>
            수정하기
          </Button>
        )}
      </CommentSubmitBar>
    </Wrapper>
  );
}