import styled from "@emotion/styled";

const Input = styled.input``;
const Label = styled.label``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Input01(props) {
  return (
    <Wrapper>
      <Label>{props.name}</Label>
      <Input type={props.type} {...props.register} />
    </Wrapper>
  );
}
