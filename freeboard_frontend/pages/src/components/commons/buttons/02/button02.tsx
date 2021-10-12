import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${(props: any) => (props.isValid ? "#ffd600" : "#BDBDBD;")};
  width: 179px;
  height: 52px;
  margin: 0 12px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    background-color: #ffd600;
    border-color: #ffd600;
  }
`;

export default function Button02(props) {
  return (
    <Button type={props.type} isValid={props.isValid}>
      {props.name}
    </Button>
  );
}
