import MypageUI from "./Mypage.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  UPDATE_USER,
  UPLOAD_FILE,
  FETCH_USER_LOGGEDIN,
} from "./Mypage.queries";
import { useRef } from "react";
import { useEffect } from "react";

export default function Mypage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [prev, setPrev] = useState("");
  const [picture, setPicture] = useState("");
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [section, setSection] = useState("account");

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

  function onClickChangeContent(event: any) {
    history.pushState(null, "null", `/mypage/${event.target.id}`);
    setSection(event.target.id);
  }

  useEffect(() => {
    if (process.browser) {
      window.onpopstate = function () {
        setSection(location.pathname.split("/")[2]);
        // setSection(event.target.history.state.as.split("/")[2]);
      };
    }
  });

  return (
    <MypageUI
      onChangeImg={onChangeImg}
      onClickFile={onClickFile}
      inputRef={inputRef}
      prev={prev}
      onClickUpload={onClickUpload}
      data={data}
      onClickChangeContent={onClickChangeContent}
      section={section}
    />
  );
}
