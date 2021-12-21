import { useQuery } from "@apollo/client";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGEDIN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken, setAccessToken, setUserInfo, userInfo }: any =
    useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  useEffect(() => {
    if (!isEmpty(userInfo)) return;
    setUserInfo(data?.fetchUserLoggedIn);
  }, [data]);

  function onClickToLogin() {
    router.push("/login");
  }

  function onClickToSignup() {
    router.push("/signup");
  }

  function onClickLogout() {
    setAccessToken("");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("login");
  }

  function onClickHome() {
    router.push("/market");
  }

  return (
    <LayoutHeaderUI
      onClickToLogin={onClickToLogin}
      onClickToSignup={onClickToSignup}
      onClickHome={onClickHome}
      accessToken={accessToken}
      onClickLogout={onClickLogout}
      data={data}
    />
  );
}
