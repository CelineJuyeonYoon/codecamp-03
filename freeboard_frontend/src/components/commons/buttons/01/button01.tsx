import styled from "@emotion/styled";
import { IProps } from "../../../units/myform/Myform.types";

export const Button = styled.button`
  background-color: ${(props: IProps) =>
    props.isValid ? "yellow" : "transparent"};
  border-style: none;
  margin-top: 10px;
  cursor: pointer;
`;

export default function Button01(props: any) {
  return (
    <Button type={props.type} isValid={props.isValid}>
      {props.name}
    </Button>
  );
}
