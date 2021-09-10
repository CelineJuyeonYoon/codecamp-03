import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const CommentHead = styled.div`
  display: flex;
  align-items: center;
`;
export const CommentImg = styled.img``;
export const Comment = styled.span`
  margin-left: 14px;
  font-size: 18px;
  font-weight: 500;
`;
export const CommentInfo = styled.div`
  padding-top: 40px;
`;
export const Writer = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 24px;
  padding-left: 20px;
`;
export const Password = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin-right: 26px;
  padding-left: 20px;
`;
export const RatingBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
`;
export const CommentInput = styled.textarea`
  width: 1200px;
  height: 108px;
  margin-top: 20px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 20px;
  padding-top: 20px;
  resize: none;
  display: block;
`;
export const CommentSubmitBar = styled.div`
  width: 1200px;
  height: 51px;
  border: 1px solid #bdbdbd;
  border-top: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CommentCount = styled.span`
  color: #bdbdbd;
  padding-left: 20px;
`;
export const SubmitBtn = styled.button`
  background-color: black;
  color: white;
  border-style: none;
  width: 91px;
  height: 52px;
  cursor: pointer;
`;
