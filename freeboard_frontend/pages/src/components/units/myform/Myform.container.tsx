import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyformUI from "./Myform.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER, LOGIN_USER } from "./Myform.queries";
import { schema } from "./Myform.validataion";

export default function Myform(props) {
  const [createUser] = useMutation(CREATE_USER);
  const [loginUser] = useMutation(LOGIN_USER);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickSignup(data) {
    console.log(data);
    createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
  }

  function onClickLogin(data) {
    loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
  }

  return (
    <MyformUI
      onClickSignup={onClickSignup}
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      isLogin={props.isLogin}
    />
  );
}
