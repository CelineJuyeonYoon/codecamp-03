import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken }: any = useContext(GlobalContext);

  useEffect(() => {
    // const token = localStorage.getItem("accessToken") || "";
    // setAccessToken(token); // 이제 localStorage 가 아닌 변수에 accessToken 저장함. (v2)
    if (!localStorage.getItem("refreshToken")) {
      // if(!accessToken)으로 하면, accessToken을 불러오기 전에 렌더되어 accessToken이 있어도 조건문이 실행돼버림.(v1)
      alert("로그인을 해주세요!");
      router.push("/login");
    }
  }, [accessToken]);

  return <Component {...props} />;
};
