import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const { accessToken }: any = useContext(GlobalContext);

  useEffect(() => {
    if (
      !localStorage.getItem("refreshToken") ||
      !sessionStorage.getItem("login")
    ) {
      alert("로그인을 해주세요!");
      router.push("/login");
    }
  }, [accessToken]);

  return <Component {...props} />;
};
