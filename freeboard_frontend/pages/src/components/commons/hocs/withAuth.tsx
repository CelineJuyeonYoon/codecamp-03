import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../_app";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const { accessToken, setAccessToken } = useContext(GlobalContext);

  useEffect(() => {
    const token = localStorage.getItem("accessToken") || "";
    setAccessToken(token);
    if (!token) {
      // if(!accessToken)으로 하면, accessToken을 불러오기 전에 렌더되어 accessToken이 있어도 조건문이 실행돼버림.
      alert("로그인을 해주세요!");
      router.push("/login");
    }
  }, [accessToken]);

  return <Component {...props} />;
};
