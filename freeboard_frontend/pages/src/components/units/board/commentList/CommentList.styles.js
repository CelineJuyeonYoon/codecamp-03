import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  /* padding-top: 20px; */
`;
export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 5px 20px 5px;
`;
export const Comment = styled.div`
  display: flex;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`;
export const CommentInfo = styled.div`
  margin-left: 16px;
`;
export const CommentWriterAndRating = styled.div`
  display: flex;
`;
export const CommentWriter = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
export const CommentRating = styled.div`
  padding-left: 18px;
`;
export const CommentContent = styled.div`
  font-size: 16px;
  padding-top: 4px;
  color: #4f4f4f;
`;
export const CommentDate = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  padding-top: 20px;
`;
export const CommentButtons = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;
export const CommentEditBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const CommentDeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
