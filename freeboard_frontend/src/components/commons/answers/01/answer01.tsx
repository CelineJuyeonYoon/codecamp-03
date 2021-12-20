import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding-bottom: 20px;
  padding-left: 60px;
  padding-top: 20px;
  display: flex;
`;
const Arrow = styled.img`
  width: 15px;
  height: 17px;
`;
const CommentWrapper = styled.div`
  padding-left: 20px;
`;
const CommentInput = styled.textarea`
  width: 1105px;
  height: 64px;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 20px;
  padding-top: 20px;
  resize: none;
  display: block;
`;
const CommentSubmitBar = styled.div`
  width: 1105px;
  height: 51px;
  border: 1px solid #bdbdbd;
  border-top: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CommentCount = styled.span`
  color: #bdbdbd;
  padding-left: 20px;
`;
const Button = styled.button`
  background-color: #ffd600;
  border-style: none;
  width: 91px;
  height: 50px;
  font-weight: 500;
  cursor: pointer;
`;

export default function Answer01(props: any) {
  return (
    <Wrapper>
      <Arrow src="/images/response.png" />
      <CommentWrapper>
        <CommentInput
          onChange={props.onChangeAnswer}
          placeholder="답글을 등록해주세요."
          maxLength={100}
        />
        <CommentSubmitBar>
          <CommentCount>{props.contents.length}/100</CommentCount>
          <Button onClick={props.onClickSubmitAnswer}>{props.name}</Button>
        </CommentSubmitBar>
      </CommentWrapper>
    </Wrapper>
  );
}
