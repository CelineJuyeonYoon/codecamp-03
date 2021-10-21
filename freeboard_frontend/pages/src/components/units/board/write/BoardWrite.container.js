import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
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

  const [buttonAct, setButtonAct] = useState("");

  // const [imgUrls, setImgUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState([null, null, null]);
  // const [files, setFiles] = useState(["", "", ""]);

  function onChangeName(event) {
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
  function onChangePassword(event) {
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
  function onChangeTitle(event) {
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
  function onChangeContent(event) {
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

  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }

  function onClickZipcodeSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data) {
    // 우편번호 검색이 끝났을 때 사용자가 선택한 정보를 받아올 콜백함수
    setZipcode(data.zonecode);
    setAddress(`${data.address} ${data.buildingName}`);
    setIsOpen(false);
  }

  function onClickCancle() {
    router.push(`../../../boards/board_read/${router.query.id}`);
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
            // images: [...imgUrls],
            images: myImages, // 이미지 2차 실습
          },
        },
      });
      router.push(`/boards/board_read/${result.data.createBoard._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function onClickEdit() {
    const myVariables = {
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
      // 기존에 이미지가 있었으면,
      const prevImages = [...props.data?.fetchBoard.images]; // 기존 이미지 배열
      console.log("기존이미지!", prevImages);
      myVariables.updateBoardInput.images = prevImages.map((el, index) => myImages[index] || el); // prettier-ignore
      // 새로운 이미지가 들어왔으면 대체, 없으면 기존꺼
    } else {
      myVariables.updateBoardInput.images = myImages;
    }
    ////////////////////////////////////////////////////////////////////////////

    try {
      await updateBoard({ variables: myVariables });
      router.push(`/boards/board_read/${router.query.id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  // function onChangeImageUrls(imgUrl, index) {
  //   const newImgUrls = [...imgUrls]; // 얕은복사 => 원본을 건드리지 않는 것이 암묵룰!
  //   newImgUrls[index] = imgUrl;
  //   setImgUrls(newImgUrls);
  //   console.log("이미지url: " + imgUrl);
  // }

  /////////////// 이미지 2차 실습 /////////////////
  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  console.log("props" + props.data?.fetchBoard.images);

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
      // imgUrls={imgUrls}
      files={files}
      // onChangeImageUrls={onChangeImageUrls}
      onChangeFiles={onChangeFiles} // 이미지 2차 실습
    />
  );
}
