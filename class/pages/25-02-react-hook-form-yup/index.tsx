import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // resolvers 안에 yup 내장되어있음
import * as yup from "yup"; // * 은 모든 export들을 가져올 때 사용

// 어떻게 검증할 건지 => 스키마
const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 반드시 입력해주세요!"),
});

export default function ReactHookFormYupPage() {
  const { handleSubmit, register, formState } = useForm({
    // yup으로 만든 에러메세지를 보여주기 위해 formState 사용(안에 errors가 내장되어있음)
    mode: "onChange", // 검증을 언제 할 것인지 => 변경이 일어났을 때 검증
    resolver: yupResolver(schema), // yup-useForm 연결
  });

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>리액트 훅 폼 연습!</div>
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <button onClick={onClickLogin}>로그인하기</button>
    </form>
  );
}
