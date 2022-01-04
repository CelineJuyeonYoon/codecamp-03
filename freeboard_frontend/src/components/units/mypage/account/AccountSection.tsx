import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRef } from "react";

const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Password = styled.input`
  width: 200px;
  border-style: none;
  border: 1px solid black;
  margin: 3px 0;
`;
const ChangeBtn = styled.button`
  border-style: none;
  background-color: black;
  color: white;
  width: 100px;
`;

export default function AccountSection() {
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const PW1 = useRef<HTMLInputElement>(null);
  const PW2 = useRef<HTMLInputElement>(null);

  async function onClickChangePW() {
    if (PW1.current?.value !== PW2.current?.value) {
      alert("비밀번호가 다릅니다.");
      return;
    }
    try {
      await resetUserPassword({
        variables: {
          password: PW1.current?.value,
        },
      });
    } catch (err: any) {
      alert(err.message);
    }
    alert("비밀번호가 변경되었습니다.");
  }

  return (
    <Wrapper>
      <div>password</div>
      <Password type="password" ref={PW1} />
      <Password type="password" ref={PW2} />
      <ChangeBtn onClick={onClickChangePW}>변경</ChangeBtn>
    </Wrapper>
  );
}
