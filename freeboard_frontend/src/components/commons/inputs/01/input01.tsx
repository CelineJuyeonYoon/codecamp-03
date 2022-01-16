import styled from "@emotion/styled";

const Input = styled.input`
  border-style: none;
  border-bottom: 1px solid;
`;
const Label = styled.label``;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding-bottom: 5px;
`;

export default function Input01(props: any) {
  return (
    <Wrapper>
      <Label>{props.name}</Label>
      <Input type={props.type} {...props.register} />
    </Wrapper>
  );
}
