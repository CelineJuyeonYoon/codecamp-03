import Button01 from "../../commons/buttons/01/button01";
import Input01 from "../../commons/inputs/01/input01";
import Error01 from "../../commons/errors/01/error01";

export default function MyformLoginUI(props: any) {
  return (
    <form
      onSubmit={props.handleSubmit(props.onClickLogin)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Input01
        name="์ด๋ฉ์ผ ๐ guest@gmail.com"
        type="text"
        register={props.register("email")}
      />
      <Error01 value={props.formState.errors.email?.message} />
      <Input01
        name="๋น๋ฐ๋ฒํธ ๐ 1213"
        type="password"
        register={props.register("password")}
      />
      <Error01 value={props.formState.errors.password?.message} />
      <Button01
        name={"๋ก๊ทธ์ธ"}
        type="submit"
        isValid={props.formState.isValid}
      ></Button01>
    </form>
  );
}
