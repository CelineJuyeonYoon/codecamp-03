import {
  Wrapper,
  CommentHead,
  CommentImg,
  Comment,
  CommentInfo,
  Writer,
  Password,
  CommentInput,
  CommentSubmitBar,
  CommentCount,
  Button,
  StarRating,
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
        <StarRating onChange={props.onChangeStar} />
      </CommentInfo>
      <CommentInput
        onChange={props.onChangeContents}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        defaultValue={props.el?.contents}
        maxLength={100}
      />
      <CommentSubmitBar>
        <CommentCount>{props.contents.length}/100</CommentCount>
        {!props.isEdit && (
          <Button onClick={props.onClickCommentSubmit}>등록하기</Button>
        )}
        {props.isEdit && (
          <Button
            onClick={props.onClickCommentEdit}
            id={props.el?._id}
            isEdit={props.isEdit}
          >
            수정하기
          </Button>
        )}
      </CommentSubmitBar>
    </Wrapper>
  );
}
