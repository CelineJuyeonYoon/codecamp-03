import styled from "@emotion/styled";

const ErrMsg = styled.div`
  color: red;
`;

export default function Error01(props) {
  return <ErrMsg>{props.value}</ErrMsg>;
}
