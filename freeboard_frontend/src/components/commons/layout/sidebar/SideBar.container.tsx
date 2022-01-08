import SideBarUI from "./SideBar.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRef } from "react";
import {
  UPDATE_USER,
  UPLOAD_FILE,
  FETCH_USER_LOGGEDIN,
} from "../../../units/mypage/Mypage.queries";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [prev, setPrev] = useState("");
  const [picture, setPicture] = useState("");
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  function onClickFile() {
    inputRef.current?.click();
  }

  async function onChangeImg(event: any) {
    const file = event.target.files[0];

    if (!file) {
      alert("파일을 선택해주세요");
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setPrev(data.target?.result as string);
    };

    try {
      const result = await uploadFile({
        variables: {
          file,
        },
      });
      setPicture(
        `https://storage.googleapis.com/${result.data.uploadFile.url}`
      );
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function onClickUpload() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            picture,
          },
        },
      });
    } catch (err: any) {
      alert(err.message);
    }
    alert("수정되었습니다.");
  }

  function onClickMenu(event: any) {
    router.push(`/mypage/${event.target.id}`);
  }
  return (
    <SideBarUI
      onChangeImg={onChangeImg}
      onClickFile={onClickFile}
      inputRef={inputRef}
      prev={prev}
      onClickUpload={onClickUpload}
      data={data}
      onClickMenu={onClickMenu}
    />
  );
}
