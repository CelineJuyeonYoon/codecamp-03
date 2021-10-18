import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 12px;
  margin-left: 1px;
  font-weight: 500;
`;

const Quill = styled(ReactQuill)`
  width: 996px;
  height: 320px;
  /* margin-bottom: 40px; */
  padding-bottom: 40px;
`;

const Error = styled.div`
  color: red;
  margin-top: 5px;
  margin-left: 3px;
`;

export default function Editor01(props) {
  console.log(props);
  return (
    <Wrapper>
      <Label>{props.name}</Label>
      <Quill onChange={props.onChange} value={props.contents || ""} />
      {/* watch("contents")를 받아오기 전에는 undefined이므로 에러 호출하기 때문에 || "" 붙여줌 */}
      <Error>{props.error}</Error>
    </Wrapper>
  );
}
