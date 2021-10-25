import { User } from "../../../commons/layout/header/LayoutHeader.styles";
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
  CommentButtons,
  CommentDeleteBtn,
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
        {el?.user._id === props.userInfo?._id ? (
          <CommentButtons>
            <CommentEditBtn src="/images/edit.png"></CommentEditBtn>
            <CommentDeleteBtn src="/images/delete.png"></CommentDeleteBtn>
          </CommentButtons>
        ) : (
          <CommentEditBtn src="/images/question.png"></CommentEditBtn>
        )}
      </CommentWrapper>
    </Wrapper>
  ));
}
