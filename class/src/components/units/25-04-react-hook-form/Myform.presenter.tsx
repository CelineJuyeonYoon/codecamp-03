import Button01 from "../../commons/buttons/01/Button01";
import { ErrMsg } from "./Myform.styles";
import Input01 from "../../commons/inputs/01/Input01";

export default function MyformUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <div>리액트 훅 폼 연습!</div>
      이메일: <Input01 type="text" register={props.register("myEmail")} />
      <ErrMsg>{props.formState.errors.myEmail?.message}</ErrMsg>
      비밀번호:{" "}
      <Input01 type="password" register={props.register("myPassword")} />
      <ErrMsg>{props.formState.errors.myPassword?.message}</ErrMsg>
      <Button01
        name="로그인하기"
        type="submit"
        isValid={props.formState.isValid}
      />
    </form>
  );
}
