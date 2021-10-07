import styled from "@emotion/styled";
import { IProps } from "./Myform.types";

export const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "none")};
`;
export const ErrMsg = styled.div`
  color: red;
`;
