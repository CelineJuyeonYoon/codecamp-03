import { useMutation } from "@apollo/client";
import { useState } from "react";
import MypageUI from "./Mypage.presenter";
import { UPDATE_USER } from "./Mypage.queries";

export default function Mypage() {
  const [updateUser] = useMutation(UPDATE_USER);
  const name = useState("");
  const picture = useState("");
  const myUpdate: any = {
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OXyJ1dN-6nhzobM0sWCGCq_JSz3hWQNCKg&usqp=CAU",
  };
  // if (name) {
  //   myUpdate.name = name;
  // }
  // if (picture) {
  //   // myUpdate.picture = picture;
  //   myUpdate.picture =
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OXyJ1dN-6nhzobM0sWCGCq_JSz3hWQNCKg&usqp=CAU";
  // }
  async function onClickUpdateProfile() {
    await updateUser({
      variables: {
        updateUserInput: myUpdate,
      },
    });
  }

  return <MypageUI onClickUpdateProfile={onClickUpdateProfile} />;
}
