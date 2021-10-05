import { useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter(); // 페이지 새로고침하면 입력값 날라가기 때문에, SPA 이용하기 위해, router.push로 이동
  const { setAccessToken } = useContext(GlobalContext); // Context 이용해서 setAccessToken가져옴
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken); // Context의 변수에 저장
    router.push("/23-02-login-success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
