import { useQuery, gql } from "@apollo/client";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../_app";

// header에 정보 있기 때문에 따로 input할거 없음
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function LoginSuccessPage() {
  const { setUserInfo, userInfo, accessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(() => {
    if (userInfo.email) return; // early-exit 패턴 사용. 안하면 무한루프됨
    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    }); // 어디서든 email, name, picture 가져다 쓸 수 있게 됨
  }, [data]);

  console.log("이름", data?.fetchUserLoggedIn.name);
  return (
    <>
      <div>로그인에 성공하셨습니다!</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다.
    </>
  );
}
