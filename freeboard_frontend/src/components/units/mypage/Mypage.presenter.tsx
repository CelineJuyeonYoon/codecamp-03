import { useContext } from "react";
import { GlobalContext } from "../../../../pages/_app";

export default function MypageUI(props: any) {
  const { userInfo }: any = useContext(GlobalContext);
  console.log(userInfo);
  return (
    <>
      {userInfo?.picture ? (
        <img src={userInfo.picture} style={{ width: "50px" }} />
      ) : (
        <img src="/images/profile.png" />
      )}
      <div onClick={props.onClickUpdateProfile}>수정</div>
    </>
  );
}
