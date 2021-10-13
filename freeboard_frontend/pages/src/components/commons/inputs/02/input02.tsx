import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  /* margin-top: 80px; */
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 12px;
  margin-left: 1px;
  font-weight: 500;
`;

const Input = styled.input`
  border: 1px solid #bdbdbd;
  width: 996px;
  height: 52px;
  padding-left: 15px;
  font-size: 16px;
`;

const Error = styled.div`
  color: red;
`;

export default function Input02(props) {
  return (
    <Wrapper>
      <Label>{props.name}</Label>
      <Input
        type={props.type}
        {...props.register}
        // placeholder={props.placeholder}
        // onChange={props.onChange}
        // defaultValue={props.data?.fetchBoard.title}
      ></Input>
      <Error>{props.value}</Error>
    </Wrapper>
  );
}
