import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../../../../_app";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);

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

  return (
    <LayoutHeaderUI
      onClickToLogin={onClickToLogin}
      onClickToSignup={onClickToSignup}
      accessToken={accessToken}
      onClickLogout={onClickLogout}
    />
  );
}
