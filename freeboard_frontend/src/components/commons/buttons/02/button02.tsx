import styled from "@emotion/styled";

const Button = styled.button<{ isValid: boolean }>`
  background-color: ${(props: any) => (props.isValid ? "#ffd600" : "#BDBDBD;")};
  width: 179px;
  height: 52px;
  margin: 80px 12px 0 12px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    border-color: #ffd600;
  }
`;

export default function Button02(props: any) {
  return (
    <Button type={props.type} onClick={props.onClick} isValid={props.isValid}>
      {props.name}
    </Button>
  );
}
