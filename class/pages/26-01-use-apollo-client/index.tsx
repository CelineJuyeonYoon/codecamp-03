import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseApolloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient(); // client로 axios처럼 쓸 수 있다.

  async function onClickLogin(data) {
    // 로그인 처리하기!!
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;

    // const result = await axios.get("koreanjson.com"); // client.query와 비교
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
      // context 이용해서 header에 넣는 부가적인 요소들 넣을 수 있음
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;

    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }

  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다.`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일: <input type="text" {...register("email")} />
          비밀번호: <input type="text" {...register("password")} />
          <button>로그인하기</button>
          {/* <button type="button" onClick={onClickFunction}>버튼</button> */}
        </form>
      )}
    </>
  );
}

// form과 onSubmit은 태그에 원래 있는 것
// 버튼에 타입지정안하면 디폴트가 type="submit"
// 버튼으로 하고싶으면 type="button" 해줘야함
