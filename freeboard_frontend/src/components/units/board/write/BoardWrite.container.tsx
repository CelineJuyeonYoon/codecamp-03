import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BoardWrite(props: any) {
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const router = useRouter();

  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState("");

  const [content, setContent] = useState("");
  const [contentErr, setContentErr] = useState("");

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [buttonAct, setButtonAct]: any = useState("");

  const [files, setFiles] = useState([null, null, null]);

  function onChangeName(event: any) {
    setName(event.target.value);
    if (event.target.value) {
      setNameErr("");
    }
    if (
      event.target.value !== "" &&
      password.length > 3 &&
      title !== "" &&
      content !== ""
    ) {
      setButtonAct(true);
    } else {
      setButtonAct("");
    }
  }
  function onChangePassword(event: any) {
    setPassword(event.target.value);
    if (event.target.value.length > 3) {
      setPasswordErr("");
    }
    if (
      name !== "" &&
      event.target.value.length > 3 &&
      title !== "" &&
      content !== ""
    ) {
      setButtonAct(true);
    } else {
      setButtonAct("");
    }
  }
  function onChangeTitle(event: any) {
    setTitle(event.target.value);
    if (event.target.value) {
      setTitleErr("");
    }
    if (
      name !== "" &&
      password.length > 3 &&
      event.target.value !== "" &&
      content !== ""
    ) {
      setButtonAct(true);
    } else {
      setButtonAct("");
    }
  }
  function onChangeContent(event: any) {
    setContent(event.target.value);
    if (event.target.value) {
      setContentErr("");
    }
    if (
      name !== "" &&
      password.length > 3 &&
      title !== "" &&
      event.target.value !== ""
    ) {
      setButtonAct(true);
    } else {
      setButtonAct("");
    }
  }

  function onChangeYoutubeUrl(event: any) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event: any) {
    setAddressDetail(event.target.value);
  }

  function onClickZipcodeSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setZipcode(data.zonecode);
    setAddress(`${data.address} ${data.buildingName}`);
    setIsOpen(false);
  }

  function onClickCancle() {
    router.push(`../../../boards`);
  }

  async function onClickSubmit() {
    if (!name) {
      setNameErr("*이름을 입력해주세요.");
    }

    if (password.length < 4) {
      setPasswordErr("*비밀번호를 4자리 이상 입력해주세요.");
    }

    if (!title) {
      setTitleErr("*제목을 입력해주세요.");
    }

    if (!content) {
      setContentErr("*내용을 입력해주세요.");
    }

    if (name !== "" && password.length >= 4 && title !== "" && content !== "") {
      alert("게시물이 등록되었습니다.");
    }

    try {
      /////////////// 이미지 2차 실습 /////////////////
      const uploadFiles = files // [File1, null, File2]
        .filter((el) => el) // [File1, File2]
        .map((el) => uploadFile({ variables: { file: el } })); // [result1, result2]
      const results = await Promise.all(uploadFiles); // 위 과정이 다 끝날때까지 기다려줌
      const myImages = results.map((el) => el.data.uploadFile.url); // url 가져오기
      /////////////////////////////////////////////

      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: name,
            password: password,
            title: title,
            contents: content,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: myImages,
          },
        },
      });
      router.push(`/boards/board_read/${result.data.createBoard._id}`);
    } catch (error: any) {
      console.log(error);
    }
  }

  async function onClickEdit() {
    const myVariables: any = {
      boardId: router.query.id,
      password,
      updateBoardInput: {},
    };
    if (title) myVariables.updateBoardInput.title = title;
    if (content) myVariables.updateBoardInput.contents = content;
    if (youtubeUrl) myVariables.updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      myVariables.updateBoardInput.boardAddress = {};
      if (zipcode) myVariables.updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) myVariables.updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        myVariables.updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    /////////////// 이미지 수정 ///////////////// 이미지 업로드와 거의 동일, filter 없음
    const uploadFiles = files // [File1, null, File2]
      .map((el) => (el ? uploadFile({ variables: { file: el } }) : null)); // [File1, null, File2]
    const results = await Promise.all(uploadFiles); // 위 과정이 다 끝날때까지 기다려줌
    const myImages = results.map((el) => el?.data.uploadFile.url || ""); // url 가져오기 [url1, "", url2]
    myVariables.updateBoardInput.images = myImages;

    if (props.data?.fetchBoard.images?.length) {
      const prevImages = [...props.data?.fetchBoard.images];
      myVariables.updateBoardInput.images = prevImages.map((el, index) => myImages[index] || el); // prettier-ignore
    } else {
      myVariables.updateBoardInput.images = myImages;
    }
    ////////////////////////////////////////////////////////////////////////////

    try {
      await updateBoard({ variables: myVariables });
      router.push(`/boards/board_read/${router.query.id}`);
    } catch (error: any) {
      alert(error.message);
    }
  }

  function onChangeFiles(file: any, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      nameErr={nameErr}
      onChangePassword={onChangePassword}
      passwordErr={passwordErr}
      onChangeTitle={onChangeTitle}
      titleErr={titleErr}
      onChangeContent={onChangeContent}
      contentErr={contentErr}
      onClickSubmit={onClickSubmit}
      buttonAct={buttonAct}
      onClickEdit={onClickEdit}
      onClickCancle={onClickCancle}
      isEdit={props.isEdit}
      data={props.data}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickZipcodeSearch={onClickZipcodeSearch}
      isOpen={isOpen}
      onCompleteAddressSearch={onCompleteAddressSearch}
      zipcode={zipcode}
      address={address}
      files={files}
      onChangeFiles={onChangeFiles}
    />
  );
}
