import styled from "@emotion/styled";
import { IProps } from "../../../units/myform/Myform.types";

export const Button = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "")};
`;

export default function Button01(props) {
  return (
    <Button type={props.type} isValid={props.isValid}>
      {props.name}
    </Button>
  );
}
