import { useQuery } from "@apollo/client";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../../_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { FETCH_USER_LOGGEDIN } from "./LayoutHeader.queries";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken, setAccessToken, setUserInfo, userInfo } =
    useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  // setUserInfo(data?.fetchUserLoggedIn);

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
    // router.push("/login"); => 권한분기해서 필요없어짐
    // localStorage.removeItem("accessToken"); // refreshToken 넣으면서 이제 변수에 저장
    setAccessToken("");
    localStorage.removeItem("refreshToken");
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
