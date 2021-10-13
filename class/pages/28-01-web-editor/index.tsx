import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill"; // 프론트엔드 서버에서 그릴 때, document가 없어서 문제가 됨!!

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`; // 타입 뒤에 ! 붙이는 것: 반드시 입력해야하는 필수 column이야!

export default function WebEditorPage() {
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  // async function onClickMyButton(data) {
  // async 넣는 위치는 가장 가까운 함수 앞에!
  const onClickMyButton = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/28-02-web-editor-detail/${result.data.createBoard._id}`);
    } catch (err) {
      console.log(err);
    }
    // finally {

    // } // 성공했든 실패했든 실행되는 것들(ex.백엔드에 유저의 시도 자체를 알려줘야한다든지)
  };

  function onChangeMyEditor(value) {
    // event가 아니라 입력한 값이 바로 value로 들어옴.
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    console.log(value);
    // onChange 됐는지 react-hook-form 에 알려주는 기능
    trigger("contents");
  }

  return (
    <form onSubmit={handleSubmit(onClickMyButton)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeMyEditor} />
      {/* ReactQuill은 HTML태그가 아님. onChange는 이벤트함수가 아님!
          onChange는 react-quill 만든 사람이 만든 함수! */}
      <br />
      <button type="submit">등록하기</button>
      {/* <button type="button" onClick={onClickMyButton}>나의버튼</button>
      <button type="reset">리셋하기</button> */}
    </form>
  );
}
