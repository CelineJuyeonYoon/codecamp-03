import { useQuery, gql } from "@apollo/client";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
    }
  }
`;

export default function MyLogginSuccessPage() {
  const router = useRouter();
  const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    // if (userInfo.email) return;
    console.log(accessToken);
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
    });
    console.log(
      "localstorage의 accesstoken:",
      localStorage.getItem("accessToken")
    );
    if (!localStorage.getItem("accessToken")) {
      alert("로그인을 먼저 해주세요");
      router.push("/Quiz/Week5/day23_login");
    }
  }, []);

  return (
    <div>
      <div>로그인 성공!!!</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다.
    </div>
  );
}
