import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyformUI from "./Myform.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER, LOGIN_USER } from "./Myform.queries";
import { schema } from "./Myform.validataion";
import { useContext } from "react";
import { GlobalContext } from "../../../../_app";
import { useRouter } from "next/router";

export default function Myform(props) {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
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
    router.push("/login");
  }

  async function onClickLogin(data) {
    const result = await loginUser({
      variables: {
        email: data.email,
        password: data.password,
      },
    });
    console.log(result.data?.loginUser.accessToken);
    localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    setAccessToken(result.data?.loginUser.accessToken);
    router.push("/market");
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
