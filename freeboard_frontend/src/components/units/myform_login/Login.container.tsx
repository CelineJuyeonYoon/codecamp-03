import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyformUI from "./Login.presenter";
import { useApolloClient, useMutation } from "@apollo/client";
import { LOGIN_USER, FETCH_USER_LOGGEDIN } from "./Login.queries";
import { schema } from "./Login.validation";
import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";

export default function MyformLogin() {
  const router = useRouter();
  const { setAccessToken, setUserInfo }: any = useContext(GlobalContext);
  const [loginUser] = useMutation(LOGIN_USER);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const client = useApolloClient();

  async function onClickLogin(data: any) {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    const accessToken = result.data?.loginUser.accessToken;
    // useApolloClient 로 query 하기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGEDIN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    setUserInfo(userInfo);
    setAccessToken(accessToken);
    localStorage.setItem("refreshToken", "true");
    sessionStorage.setItem("login", "true");
    router.push("/market");
  }

  return (
    <MyformUI
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}
