import {
  Wrapper,
  CommentWrapper,
  Comment,
  ProfileImg,
  CommentInfo,
  CommentWriter,
  CommentContent,
  CommentDate,
  CommentEditBtn,
} from "./ProductQuestions.styles";

export default function ProductQuestionsUI(props) {
  if (!props.data?.fetchUseditemQuestions) return <></>;
  return props.data?.fetchUseditemQuestions.map((el) => (
    <Wrapper key={el._id}>
      <CommentWrapper>
        <Comment>
          <ProfileImg src="/images/profile.png" />
          <CommentInfo>
            <CommentWriter>{el?.user.name}</CommentWriter>
            <CommentContent>{el?.contents}</CommentContent>
            <CommentDate>{el?.createdAt.slice(0, 10)}</CommentDate>
          </CommentInfo>
        </Comment>
        <CommentEditBtn src="/images/question.png"></CommentEditBtn>
      </CommentWrapper>
    </Wrapper>
  ));
}
