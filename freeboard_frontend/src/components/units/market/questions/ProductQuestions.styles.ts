import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0;
`;
export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Question = styled.div`
  display: flex;
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-top: 6px;
  border-radius: 50%;
`;
export const QuestionInfo = styled.div`
  margin-left: 16px;
`;
export const QuestionWriterAndRating = styled.div`
  display: flex;
  align-items: center;
`;
export const QuestionWriter = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
export const QuestionRating = styled.div`
  padding-left: 18px;
`;
export const QuestionContent = styled.div`
  font-size: 16px;
  padding-top: 4px;
  color: #4f4f4f;
`;
export const QuestionDate = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  padding-top: 20px;
`;
export const QuestionButtons = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;
export const QuestionEditBtn = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
export const QuestionDeleteBtn = styled.img`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 16px;
`;
export const QuestionAnswerBtn = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;
