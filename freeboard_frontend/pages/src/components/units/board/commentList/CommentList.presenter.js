import {
  Wrapper,
  CommentWrapper,
  Comment,
  ProfileImg,
  CommentInfo,
  CommentWriterAndRating,
  CommentWriter,
  CommentRating,
  CommentContent,
  CommentDate,
  CommentButtons,
  CommentEditBtn,
  CommentDeleteBtn,
} from "./CommentList.styles";

export default function CommentListUI(props) {
  return (
    <Wrapper>
      {props.data?.fetchBoardComments.map((el) => (
        <CommentWrapper>
          <Comment>
            <ProfileImg src="/images/profile.png" />
            <CommentInfo>
              <CommentWriterAndRating>
                <CommentWriter>{el.writer}</CommentWriter>
                <CommentRating>
                  <img src="/images/star.png" />
                  <img src="/images/star.png" />
                  <img src="/images/star.png" />
                  <img src="/images/star.png" />
                  <img src="/images/star.png" />
                </CommentRating>
              </CommentWriterAndRating>
              <CommentContent>{el.contents}</CommentContent>
              <CommentDate>{el.createdAt.slice(0, 10)}</CommentDate>
            </CommentInfo>
          </Comment>
          <CommentButtons>
            <CommentEditBtn>
              <img src="/images/edit.png" />
            </CommentEditBtn>
            <CommentDeleteBtn>
              <img src="/images/delete.png" />
            </CommentDeleteBtn>
          </CommentButtons>
        </CommentWrapper>
      ))}
    </Wrapper>
  );
}
