import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // resolvers 안에 yup 내장되어있음
import { schema } from "./Myform.validations";
import MyformUI from "./Myform.presenter";

export default function Myform() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    // yup-yupResolver 연결
  });

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <MyformUI
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      register={register}
      formState={formState}
    />
  );
}
