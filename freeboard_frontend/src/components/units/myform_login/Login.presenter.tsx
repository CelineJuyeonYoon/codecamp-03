import Button01 from "../../commons/buttons/01/button01";
import Input01 from "../../commons/inputs/01/input01";
import Error01 from "../../commons/errors/01/error01";

export default function MyformLoginUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <Input01 name="이메일" type="text" register={props.register("email")} />
      <Error01 value={props.formState.errors.email?.message} />
      <Input01
        name="비밀번호"
        type="password"
        register={props.register("password")}
      />
      <Error01 value={props.formState.errors.password?.message} />
      <Button01
        name={"로그인"}
        type="submit"
        isValid={props.formState.isValid}
      ></Button01>
    </form>
  );
}
